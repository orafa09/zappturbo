import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, Arial", background: "#0B0F1A", color: "white", minHeight: "100vh" }}>
      
      {/* HERO */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 24, textAlign: "center" }}>
        <h1 style={{ fontSize: 34, fontWeight: 800 }}>HyperSales AI</h1>
        <p style={{ fontSize: 18, opacity: 0.8, marginTop: 8 }}>
          Aumente vendas, atendimento e follow-ups com IA treinada em empresas dos EUA.
        </p>

        <div style={{ marginTop: 18, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/5519995903691" style={{ background: "#22c55e", padding: "10px 18px", borderRadius: 8, textDecoration: "none", color: "black", fontWeight: 700 }}>
            Falar com especialista
          </a>

          <a href="#planos" style={{ background: "#111827", padding: "10px 18px", borderRadius: 8, textDecoration: "none", color: "white", border: "1px solid #22c55e" }}>
            Ver planos
          </a>
        </div>
      </div>

      {/* BENEFÍCIOS */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 800 }}>O que o HyperSales AI faz</h2>

        <ul style={{ marginTop: 12, lineHeight: 1.8 }}>
          <li>📨 Respostas automáticas 24h sem você precisar tocar no WhatsApp</li>
          <li>🤖 Quebra de objeções igual equipes profissionais de vendas</li>
          <li>📊 Relatórios de desempenho, taxa de conversão e origem dos leads</li>
          <li>🔁 Follow-up automático com quem não respondeu</li>
          <li>🧲 Organização de leads por funil (quente, morno, frio)</li>
          <li>⚡ Integração com API oficial do WhatsApp</li>
          <li>🛍️ Vendas com boleto, Pix e cartão</li>
          <li>💬 Respostas humanizadas treinadas para vender mais</li>
          <li>👨‍💼 Reduz custo de equipe em até 90%</li>
          <li>📥 Captação automática de contatos em anúncios</li>
        </ul>
      </div>

      {/* PLANOS */}
      <div id="planos" style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, textAlign: "center" }}>Planos</h2>

        <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
          
          {/* STARTER */}
          <div style={{ background: "#111827", padding: 18, borderRadius: 14 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700 }}>Starter</h3>
            <p style={{ fontSize: 14, opacity: 0.7 }}>Para quem está começando</p>
            <h1>R$ 97/mês</h1>

            <ul>
              <li>1 número</li>
              <li>3.000 mensagens</li>
              <li>1 funil pronto</li>
              <li>Respostas automáticas básicas</li>
              <li>Treinamento inicial</li>
            </ul>

            <a href="https://wa.me/5519995903691" style={{ background: "#22c55e", padding: 10, borderRadius: 8, textDecoration: "none", color: "black", fontWeight: 700, display: "inline-block", marginTop: 8 }}>
              Contratar Starter
            </a>
          </div>

          {/* PRO */}
          <div style={{ background: "#16a34a", padding: 18, borderRadius: 14 }}>
            <h3 style={{ fontSize: 20, fontWeight: 900 }}>Professional ⭐</h3>
            <p>Para quem já vende todos os dias</p>
            <h1>R$ 297/mês</h1>

            <ul>
              <li>3 números</li>
              <li>10.000 mensagens</li>
              <li>Funis ilimitados</li>
              <li>Quebra de objeções avançada</li>
              <li>Follow-up automático</li>
              <li>Painel de relatórios</li>
              <li>Treinamento + suporte VIP</li>
            </ul>

            <a href="https://wa.me/5519995903691" style={{ background: "black", padding: 10, borderRadius: 8, textDecoration: "none", color: "white", fontWeight: 700, display: "inline-block", marginTop: 8 }}>
              Escolher plano Professional
            </a>
          </div>

          {/* ENTERPRISE */}
          <div style={{ background: "#111827", padding: 18, borderRadius: 14 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700 }}>Enterprise</h3>
            <p>Grandes operações</p>
            <h1>Sob consulta</h1>

            <ul>
              <li>Números ilimitados</li>
              <li>Mensagens ilimitadas</li>
              <li>CRM integrado</li>
              <li>Time de onboard dedicado</li>
              <li>Automação completa</li>
              <li>APIs personalizadas</li>
            </ul>

            <a href="https://wa.me/5519995903691" style={{ background: "#22c55e", padding: 10, borderRadius: 8, textDecoration: "none", color: "black", fontWeight: 700, display: "inline-block", marginTop: 8 }}>
              Falar com especialista
            </a>
          </div>
        </div>
      </div>

      <p style={{ textAlign: "center", opacity: 0.6, padding: 18 }}>
        © 2026 HyperSales AI — Inteligência Artificial para Vendas no WhatsApp
      </p>
    </div>
  );
}
