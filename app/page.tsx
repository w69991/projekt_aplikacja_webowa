'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState('Seafood');

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => res.json())
      .then(data => setRecipes(data.meals));
  }, [category]);

  const categories = ['Seafood', 'Beef', 'Chicken', 'Vegetarian', 'Pasta'];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <nav className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full border ${category === cat ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-orange-100'}`}
          >
            {cat}
          </button>
        ))}
      </nav>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes?.map((meal: any) => (
          <article key={meal.idMeal} className="border rounded-xl overflow-hidden shadow-sm">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">{meal.strMeal}</h2>
                <Link href={`/recipe/${meal.idMeal}`}>
                    <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Zobacz przepis
                    </button>
                </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}