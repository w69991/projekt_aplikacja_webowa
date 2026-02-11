'use client';

import { supabase } from '@/lib/supabase';

export default function FavoriteButton({ recipeId, recipeName }: { recipeId: string, recipeName: string }) {
  
  const handleAdd = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert("Musisz się zalogować! 🔒");
      return;
    }

    const { data: existing } = await supabase
    .from('favorites')
    .select('id')
    .eq('recipe_id', recipeId)
    .maybeSingle();

    if (existing) {
    alert("Ten przepis jest już w Twoich ulubionych!");
    return; 
  }

    const { error } = await supabase.from('favorites').insert({
      user_id: user.id,
      recipe_id: recipeId,
      recipe_name: recipeName
    });

    if (error) {
      alert("Błąd: " + error.message);
    } else {
      alert("Dodano do ulubionych! ❤️");
    }
  };

  return (
    <button 
      onClick={handleAdd}
      className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition shadow-md"
    >
      Dodaj do ulubionych ❤️
    </button>
  );
}