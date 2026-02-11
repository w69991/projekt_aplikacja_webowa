'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setMessage(error.message);
    else setMessage('Sprawdź e-mail, aby potwierdzić rejestrację!');
  };

  const handleLogin = async () => {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    setMessage(error.message);
  } else {
    setMessage('Zalogowano pomyślnie! Przekierowuję...');
    setTimeout(() => {
      router.push('/profile');
      router.refresh(); 
    }, 1000);
  }
};
  return (
    <main className="p-8 max-w-md mx-auto mt-10 border rounded-xl shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Panel Kucharza</h1>
      <div className="flex flex-col gap-4">
        <input 
          type="email" 
          placeholder="Twój e-mail" 
          className="p-2 border rounded text-gray-900" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Hasło" 
          className="p-2 border rounded text-gray-900" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <div className="flex gap-2">
          <button onClick={handleLogin} className="flex-1 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
            Zaloguj
          </button>
          <button onClick={handleSignUp} className="flex-1 border border-orange-500 text-orange-500 py-2 rounded hover:bg-orange-50">
            Rejestracja
          </button>
        </div>
        {message && <p className="text-center text-sm text-blue-600 mt-2">{message}</p>}
      </div>
    </main>
  );
}