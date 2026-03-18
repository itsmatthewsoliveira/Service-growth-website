"use client";

import { useState, FormEvent } from "react";

const FEATURES = [
  {
    icon: "✨",
    title: "Design Limpo",
    desc: "Layout profissional e moderno que transmite credibilidade ao seu cliente.",
  },
  {
    icon: "💬",
    title: "Só Conversar",
    desc: "Cole o template no Claude e responda as perguntas — sem preencher nada.",
  },
  {
    icon: "📄",
    title: "PDF em 1 Clique",
    desc: "Salve como PDF direto do navegador, pronto para enviar.",
  },
  {
    icon: "🎨",
    title: "Seu Logo",
    desc: "Coloque sua marca no orçamento — profissionalismo total.",
  },
  {
    icon: "🔧",
    title: "Qualquer Área",
    desc: "Pintura, construção, limpeza, elétrica, encanamento e muito mais.",
  },
  {
    icon: "🤖",
    title: "100% IA",
    desc: "O Claude gera tudo automaticamente — você só preenche e envia.",
  },
];

const BUSINESS_TYPES = [
  "Construção / Pedreiro",
  "Pintura",
  "Elétrica",
  "Encanamento",
  "Limpeza",
  "Paisagismo",
  "Ar-Condicionado / HVAC",
  "Marcenaria",
  "Telhados / Roofing",
  "Auto Detailing",
  "Outro",
];

interface Downloads {
  pdf: string;
  template_pt: string;
  template_en: string;
}

export default function OrcamentoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [downloads, setDownloads] = useState<Downloads | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || null,
          business_type: businessType || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao enviar. Tente novamente.");
        return;
      }

      setDownloads(data.downloads);
      setSubmitted(true);
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(40,232,253,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(40,232,253,0.02) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "rgba(40, 232, 253, 0.08)",
          filter: "blur(120px)",
          top: "-10%",
          left: "-10%",
          animation: "orbDrift 20s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: "rgba(40, 232, 253, 0.06)",
          filter: "blur(120px)",
          top: "50%",
          right: "-8%",
          animation: "orbDrift 20s ease-in-out infinite alternate",
          animationDelay: "-7s",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 350,
          height: 350,
          background: "rgba(40, 232, 253, 0.07)",
          filter: "blur(120px)",
          bottom: "-5%",
          left: "30%",
          animation: "orbDrift 20s ease-in-out infinite alternate",
          animationDelay: "-14s",
        }}
      />

      <style>{`
        @keyframes orbDrift {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 30px) scale(0.95); }
          100% { transform: translate(10px, -10px) scale(1); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .orc-glass-form {
          position: relative;
          overflow: hidden;
        }
        .orc-glass-form::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(40, 232, 253, 0.4), transparent);
        }
        .orc-glass-form::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent);
          animation: shimmer 6s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="text-center px-6 pt-20 pb-16 max-w-3xl mx-auto">
          <div
            className="inline-block text-accent text-[11px] font-semibold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(40, 232, 253, 0.08)",
              border: "1px solid rgba(40, 232, 253, 0.2)",
            }}
          >
            FERRAMENTA GRATUITA
          </div>

          <h1 className="font-serif text-[44px] max-md:text-[32px] font-normal leading-[1.1] text-white mb-5 tracking-[-0.02em]">
            Gere Orçamentos
            <br />
            <span className="italic text-accent">Profissionais</span> com IA
          </h1>

          <p className="text-text-body text-base leading-relaxed max-w-xl mx-auto mb-8">
            Template gratuito que transforma o Claude AI em seu gerador de
            orçamentos premium. Design glassmorphism, seu logo, pronto em 2
            minutos.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("form-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-glow bg-accent text-black font-medium text-base px-10 py-4 rounded-xl cursor-pointer border-none transition-all hover:bg-accent-hover"
          >
            Baixar Grátis
          </button>
        </section>

        {/* Features */}
        <section className="px-6 pb-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="card-glow rounded-xl p-6 bg-bg-card"
              >
                <div className="text-[28px] mb-3">{f.icon}</div>
                <h3 className="text-base font-medium text-white mb-1.5">
                  {f.title}
                </h3>
                <p className="text-[13px] text-text-muted leading-relaxed m-0">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section
          id="form-section"
          className="px-6 pb-24 max-w-lg mx-auto"
        >
          <div className="orc-glass-form glass-card rounded-2xl p-9">
            {!submitted ? (
              <>
                <h2 className="font-serif text-[22px] text-white mb-1.5 text-center">
                  Receba Seu Gerador de Orçamento
                </h2>
                <p className="text-sm text-text-muted text-center mb-7">
                  Preencha abaixo e baixe na hora + receba por email.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3.5">
                    <label className="block text-xs font-medium text-text-body mb-1.5 uppercase tracking-wider">
                      Nome *
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-bg-field border border-border rounded-lg text-white text-sm outline-none transition-colors focus:border-accent placeholder:text-text-muted"
                    />
                  </div>

                  <div className="mb-3.5">
                    <label className="block text-xs font-medium text-text-body mb-1.5 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-bg-field border border-border rounded-lg text-white text-sm outline-none transition-colors focus:border-accent placeholder:text-text-muted"
                    />
                  </div>

                  <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3.5 mb-6">
                    <div>
                      <label className="block text-xs font-medium text-text-body mb-1.5 uppercase tracking-wider">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-bg-field border border-border rounded-lg text-white text-sm outline-none transition-colors focus:border-accent placeholder:text-text-muted"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-text-body mb-1.5 uppercase tracking-wider">
                        Tipo de Negócio
                      </label>
                      <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full px-4 py-3 bg-bg-field border border-border rounded-lg text-white text-sm outline-none transition-colors focus:border-accent appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%23737373'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                        }}
                      >
                        <option value="">Selecione...</option>
                        {BUSINESS_TYPES.map((bt) => (
                          <option key={bt} value={bt}>
                            {bt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center mb-4">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-glow w-full bg-accent text-black font-semibold text-base py-4 rounded-xl cursor-pointer border-none transition-all hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? "Enviando..." : "Receber Meu Gerador Grátis"}
                  </button>

                  <p className="text-[11px] text-text-muted text-center mt-3.5 leading-relaxed">
                    Seus dados estão seguros. Sem spam, prometemos.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="font-serif text-[22px] text-white mb-2">
                  Pronto, {name.split(" ")[0]}!
                </h2>
                <p className="text-sm text-text-body mb-7 leading-relaxed">
                  Seus arquivos estão prontos. Também enviamos tudo para{" "}
                  <strong className="text-white">{email}</strong>.
                </p>

                <div className="flex flex-col gap-2.5">
                  <a
                    href={downloads?.pdf}
                    download
                    className="btn-glow block text-center no-underline bg-accent text-black font-semibold text-sm py-3.5 px-6 rounded-xl transition-all hover:bg-accent-hover"
                  >
                    Baixar Guia PDF
                  </a>
                  <a
                    href={downloads?.template_pt}
                    download
                    className="btn-glass-dark block text-center no-underline text-sm py-3.5 px-6 rounded-xl"
                  >
                    Baixar Template PT-BR (.zip)
                  </a>
                  <a
                    href={downloads?.template_en}
                    download
                    className="btn-glass-dark block text-center no-underline text-sm py-3.5 px-6 rounded-xl"
                  >
                    Baixar Template EN (.zip)
                  </a>
                </div>

                <p className="text-xs text-text-muted mt-5 leading-relaxed">
                  Dica: Abra o PDF primeiro para ver as instruções passo a
                  passo.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
