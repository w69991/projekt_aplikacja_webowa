export default function Home() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-orange-500">Moja Książka Kucharska 🍲</h1>
        <p className="text-gray-600">Witaj! Znajdź przepis na dziś.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tu zaraz pojawią się przepisy z API */}
        <div className="border p-4 rounded-lg shadow">
          <h2 className="font-semibold">Przykładowy Przepis</h2>
          <p>Kliknij przycisk poniżej, aby pobrać dane!</p>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
            Szukaj obiadu
          </button>
        </div>
      </section>
    </div>
  );
}