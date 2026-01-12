import React from 'react';

export default function Benefits() {
  const benefits = [
    { icon: '🤖', text: 'IA com conversa natural e humana' },
    { icon: '💬', text: 'Respostas em menos de 1 segundo' },
    { icon: '🎯', text: 'Foco em fechar vendas' },
    { icon: '📊', text: 'Relatórios automáticos' },
    { icon: '🔌', text: 'API Oficial do WhatsApp' },
    { icon: '🧠', text: 'Quebra de objeções automática' },
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">✅ O que o HyperZapp faz por você</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((b, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
            <p className="text-3xl mb-2">{b.icon}</p>
            <p>{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
