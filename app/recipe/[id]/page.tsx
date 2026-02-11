import { supabase } from '@/lib/supabase';
import FavoriteButton from '@/components/FavoriteButton';

export const runtime = 'edge';

async function getRecipeDetails(id: string) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals ? data.meals[0] : null;
}

export default async function RecipeDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
  const recipe = await getRecipeDetails(id);

  if (!recipe) return <p className="p-8 text-center">Nie znaleziono przepisu.</p>;
  
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
    }
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{recipe.strMeal}</h1>
          <FavoriteButton recipeId={recipe.idMeal} recipeName={recipe.strMeal} />
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-96 object-cover rounded-2xl shadow-lg" />
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Składniki:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Instrukcja:</h2>
            <p className="whitespace-pre-line text-gray-700 leading-relaxed">
              {recipe.strInstructions}
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}