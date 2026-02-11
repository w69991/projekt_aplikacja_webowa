export default function ContactPage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6">Napisz do nas</h1>
        
        <form className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-medium">Imię</label>
            <input 
              type="text" 
              required 
              className="w-full p-2 border rounded-md focus:ring-2 border-orange-300 outline-none"
              placeholder="Twoje imię..."
            />
          </div>
          
          <div>
            <label className="block mb-1 font-medium">E-mail</label>
            <input 
              type="email" 
              required 
              className="w-full p-2 border rounded-md focus:ring-2 border-orange-300 outline-none"
              placeholder="email@przyklad.pl"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Wiadomość</label>
            <textarea 
              rows={4} 
              className="w-full p-2 border rounded-md focus:ring-2 border-orange-300 outline-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Wyślij wiadomość
          </button>
        </form>
      </section>
    </main>
  );
}