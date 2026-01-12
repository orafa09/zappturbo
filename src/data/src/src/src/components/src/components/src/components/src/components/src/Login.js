import React, { useState } from 'react';
import { validateKey } from './utils';
import { supabase } from './supabaseClient';

export default function Login() {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const plan = validateKey(key.trim());
    if (!plan) {
      setError('Chave inválida. Verifique e tente novamente.');
      return;
    }

    let { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('chave', key.trim())
      .single();

    if (!user) {
      await supabase.from('users').insert([{ chave: key.trim(), plano: plan }]);
    }

    window.location.href = plan === 'starter' ? '/dashboard-starter' : '/dashboard-professional';
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white px-6">
      <h1 className="text-4xl font-bold mb-6">Login HyperZapp</h1>
      <input
        type="text"
        placeholder="Digite sua chave de acesso"
        value={key}
        onChange={e => setKey(e.target.value)}
        className="px-4 py-3 rounded-xl w-full max-w-md text-black mb-4"
      />
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-emerald-400 text-black rounded-xl font-bold w-full max-w-md hover:scale-105 transition-transform"
      >
        Entrar
      </button>
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
      }
