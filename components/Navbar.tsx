'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === 'SIGNED_OUT') router.refresh();
    });

    return () => authListener.subscription.unsubscribe();
  }, [router]);

  return (
    <nav className="max-w-6xl mx-auto flex justify-between p-4 items-center text-gray-800">
      <div className="flex gap-6 items-center">
        <Link href="/" className="font-bold text-xl text-orange-500 font-mono">🍲 SmartRecipe</Link>
        <Link href="/about" className="hover:text-orange-500 font-medium">O nas</Link>
        <Link href="/contact" className="hover:text-orange-500 font-medium">Kontakt</Link>
      </div>

      <div className="flex gap-6 items-center">
        {user ? (
          <>
            <Link href="/profile" className="hover:text-orange-500 font-medium">Mój Profil</Link>
            <span className="text-xs text-gray-400">{user.email}</span>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-orange-500 font-medium border border-orange-500 px-4 py-1 rounded-full">Zaloguj</Link>
          </>
        )}
      </div>
    </nav>
  );
}