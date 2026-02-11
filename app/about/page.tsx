export default function AboutPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold">O projekcie Smart Recipe</h1>
      </header>

      <section className="space-y-8">
        <article className="border-l-4 border-orange-500 pl-4">
          <h2 className="text-2xl font-semibold mb-2">Nasza Misja</h2>
          <p className="text-gray-700">
            Aplikacja powstała, aby ułatwić codzienne gotowanie i poszukiwanie kulinarnych inspiracji 
            z całego świata przy użyciu nowoczesnych technologii webowych.
          </p>
        </article>

        <article className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-2xl font-semibold mb-2">Technologie</h2>
          <p className="text-gray-700">
            Projekt wykorzystuje Next.js, Tailwind CSS oraz zewnętrzne API kulinarne. 
            Spełnia wszystkie wymagania nowoczesnego, responsywnego designu.
          </p>
        </article>
      </section>
    </main>
  );
}