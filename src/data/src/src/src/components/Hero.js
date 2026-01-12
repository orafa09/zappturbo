import React from 'react';

export default function Hero() {
  return (
    <div className="text-center py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-5xl font-bold mb-4">
        IA que <span className="text-emerald-400">vende por você</span> no WhatsApp
      </h1>
      <p className="max-w-xl mx-auto opacity-80 mb-6">
        O HyperZapp conversa, argumenta, quebra objeções e fecha vendas sozinho — 24h por dia, 7 dias por semana.
      </p>
      <button
        className="bg-emerald-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
        onClick={() => window.location.href='https://wa.me/5519995903691'}
      >
        Quero minha IA agora
      </button>
    </div>
  );
}
