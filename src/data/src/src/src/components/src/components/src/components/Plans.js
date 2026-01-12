import React from 'react';

export default function Plans() {
  const plans = [
    {
      name: 'Starter',
      price: 'R$ 97/mês',
      features: ['1 número', '1.000 mensagens', 'Funil básico', 'Suporte padrão'],
      link: '/dashboard-starter'
    },
    {
      name: 'Professional',
      price: 'R$ 297/mês',
      features: ['3 números', '10.000 mensagens', 'Funis ilimitados', 'Voz IA', 'Relatórios completos', 'Suporte prioritário'],
      link: '/dashboard-professional'
    },
    {
      name: 'Ultimate',
      price: 'Sob consulta',
      features: ['Ilimitado', 'Treinamento personalizado', 'Integrações avançadas', 'Gerente de sucesso dedicado'],
      link: 'https://wa.me/5519995903691'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">💳 Planos HyperZapp</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-emerald-400 font-bold text-xl mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-4">
              {plan.features.map((f, i) => (
                <li key={i} className="mb-1">✔ {f}</li>
              ))}
            </ul>
            <button
              className="w-full bg-emerald-400 text-black py-2 rounded-xl font-bold"
              onClick={() => window.location.href = plan.link}
            >
              {plan.name === 'Ultimate' ? 'Falar com especialista' : `Escolher ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
