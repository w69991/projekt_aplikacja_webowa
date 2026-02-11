'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export const runtime = 'edge';

export default function ProfilePage() {
  const [favorites, setFavorites] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchFavorites();
  }, []);

  async function fetchFavorites() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push('/login');
      return;
    }

    const { data, error } = await supabase.from('favorites').select('*');
    if (!error) setFavorites(data);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  }

  async function deleteFavorite(id: number) {
    await supabase.from('favorites').delete().eq('id', id);
    fetchFavorites();
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Twoje Ulubione Przepisy 💙</h1>
        <button onClick={handleLogout} className="bg-gray-200 px-4 py-2 rounded hover:bg-red-100 hover:text-red-600 transition">
          Wyloguj się
        </button>
      </div>

      {favorites.length === 0 ? (
        <p>Nie masz jeszcze żadnych ulubionych przepisów.</p>
      ) : (
        <div className="grid gap-4">
          {favorites.map((fav) => (
            <div key={fav.id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
              <span className="text-lg font-medium">{fav.recipe_name}</span>
              <div className="flex gap-4">
                <button 
                  onClick={() => router.push(`/recipe/${fav.recipe_id}`)}
                  className="text-blue-500 hover:underline"
                >
                  Zobacz
                </button>
                <button 
                  onClick={() => deleteFavorite(fav.id)}
                  className="text-red-500 hover:underline"
                >
                  Usuń
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}