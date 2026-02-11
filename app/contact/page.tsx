'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="p-8 text-center mt-20">
        <h2 className="text-2xl font-bold text-green-600">Dziękujemy za wiadomość! ✅</h2>
        <p className="mt-4">Odezwiemy się do Ciebie najszybciej jak to możliwe.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-orange-500 underline"
        >
          Wyślij kolejną wiadomość
        </button>
      </main>
    );
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <section className="bg-white p-6 rounded-xl shadow-md border">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Kontakt</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Imię</label>
            <input 
              type="text" 
              required 
              minLength={3}
              className="w-full p-2 border rounded-md outline-orange-500 text-gray-900"
              placeholder="Jan"
            />
          </div>
          
          <div>
            <label className="block mb-1 font-medium text-gray-700">E-mail</label>
            <input 
              type="email"
              required 
              className="w-full p-2 border rounded-md outline-orange-500 text-gray-900"
              placeholder="jan@kowalski.pl"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Wiadomość</label>
            <textarea 
              required
              rows={4} 
              className="w-full p-2 border rounded-md outline-orange-500 text-gray-900"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-transform active:scale-95"
          >
            Wyślij wiadomość
          </button>
        </form>
      </section>
    </main>
  );
}