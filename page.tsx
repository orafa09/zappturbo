"use client";

import { useState } from "react";

export default function Home() {
  const phone = "5519995903691";
  const whatsapp = `https://wa.me/${phone}`;

  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Transforme Conversas em Vendas no WhatsApp
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Chega de perder dinheiro com respostas demoradas, clientes frios e falta de estratégia.
          Nós criamos um funil de vendas automático no WhatsApp que transforma desconhecidos
          em clientes prontos para comprar — todos os dias.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={whatsapp}
            className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg"
          >
            Falar com um especialista
          </a>

          <a
            href={whatsapp}
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Quero aumentar minhas vendas
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Atendimento exclusivo • Resposta rápida • Sem enrolação
        </p>
      </header>

      {/* PROVA SOCIAL */}
      <section className="bg-zinc-900 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl font-extrabold text-green-400">+120</p>
            <p className="text-gray-300">negócios atendidos</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-green-400">+3.500</p>
            <p className="text-gray-300">conversas geradas</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-green-400">Até 5x</p>
            <p className="text-gray-300">aumento nas vendas</p>
          </div>
        </div>
      </section>

      {/* DOR DO CLIENTE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Se você se identifica com isso, nosso serviço é para você</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            🔴 Recebe mensagem no WhatsApp e não sabe o que responder
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            🔴 Tem visualizações mas quase ninguém compra
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            🔴 Fica horas atendendo pessoas que não fecham
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            🔴 Não tem um processo claro de vendas
          </div>
        </div>

        <p className="text-center mt-8 text-xl text-green-400 font-semibold">
          A verdade é simples: não é falta de clientes, é falta de estratégia.
        </p>

        <div className="text-center mt-6">
          <a href={whatsapp} className="bg-green-500 text-black px-6 py-3 rounded-lg font-bold">
            Quero uma estratégia pronta
          </a>
        </div>
      </section>

      {/* PLANOS */}
      <section className="bg-zinc-950 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Escolha seu plano</h2>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {/* PLANO 1 */}
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-2">Plano Inicial</h3>
            <p className="text-gray-400 mb-4">Para quem está começando e quer validar vendas.</p>

            <ul className="space-y-3 text-gray-300">
              <li>✔️ Copy pronta para WhatsApp</li>
              <li>✔️ Mensagens persuasivas que quebram objeções</li>
              <li>✔️ Estrutura básica de atendimento</li>
              <li>✔️ Orientação de fechamento</li>
            </ul>

            <div className="mt-6">
              <a href={whatsapp} className="bg-green-500 text-black font-bold px-6 py-3 rounded-lg w-full block text-center">
                Quero esse plano
              </a>
            </div>
          </div>

          {/* PLANO 2 */}
          <div className="bg-green-600 p-6 rounded-2xl text-black shadow-xl border border-green-400">
            <h3 className="text-2xl font-extrabold mb-2">Plano Profissional ⭐</h3>
            <p className="mb-4 font-medium">Mais vendido — ideal para quem quer resultado rápido.</p>

            <ul className="space-y-3">
              <li>🔥 Funil pronto de vendas no WhatsApp</li>
              <li>🔥 Templates prontos e editáveis</li>
              <li>🔥 Scripts para fechar no PIX/cartão</li>
              <li>🔥 Estratégia anti objeção</li>
              <li>🔥 Mentoria básica de vendas</li>
            </ul>

            <div className="mt-6">
              <a href={whatsapp} className="bg-black text-white font-bold px-6 py-3 rounded-lg w-full block text-center">
                Quero o mais completo
              </a>
            </div>
          </div>

          {/* PLANO 3 */}
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-2">Plano Empresarial</h3>
            <p className="text-gray-400 mb-4">Para quem quer escala e automação total.</p>

            <ul className="space-y-3 text-gray-300">
              <li>✔️ Automação avançada</li>
              <li>✔️ Consultoria 1 a 1</li>
              <li>✔️ Scripts exclusivos</li>
              <li>✔️ Acompanhamento profissional</li>
              <li>✔️ Foco em alto faturamento</li>
            </ul>

            <div className="mt-6">
              <a href={whatsapp} className="bg-green-500 text-black font-bold px-6 py-3 rounded-lg w-full block text-center">
                Falar com especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">
          Você pode continuar tentando sozinho… ou acelerar seu resultado hoje
        </h2>

        <p className="mt-6 text-lg text-gray-300">
          Todos os dias alguém está faturando com WhatsApp.
          A pergunta é: você vai assistir… ou participar?
        </p>

        <div className="mt-8">
          <a href={whatsapp} className="bg-green-500 text-black px-8 py-4 rounded-xl font-bold text-xl">
            Falar com um especialista agora
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Resposta rápida • Vagas limitadas
        </p>
      </section>
    </div>
  );
}
