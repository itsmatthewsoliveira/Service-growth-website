"use client";

import { useState, FormEvent } from "react";

const FEATURES = [
  {
    title: "Design Limpo",
    desc: "Layout profissional e moderno que transmite credibilidade ao seu cliente.",
  },
  {
    title: "So Conversar",
    desc: "Cole o template no Claude e responda as perguntas — sem preencher nada.",
  },
  {
    title: "PDF em 1 Clique",
    desc: "Salve como PDF direto do navegador, pronto para enviar.",
  },
  {
    title: "Seu Logo",
    desc: "Coloque sua marca no orcamento — profissionalismo total.",
  },
  {
    title: "Qualquer Area",
    desc: "Pintura, construcao, limpeza, eletrica, encanamento e muito mais.",
  },
  {
    title: "100% IA",
    desc: "O Claude gera tudo automaticamente — voce so preenche e envia.",
  },
];

const BUSINESS_TYPES = [
  "Construcao / Pedreiro",
  "Pintura",
  "Eletrica",
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
      setError("Erro de conexao. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  /* Shared input classes for cream background */
  const inputCls =
    "w-full px-4 py-3 bg-white border border-[#D6D0C7] rounded-lg text-[#1A1A18] text-sm outline-none transition-colors focus:ring-2 focus:ring-[#C2703A]/40 focus:border-[#C2703A] placeholder:text-[#B8B3AA]";

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Hero — section-dark */}
      <section className="section-dark text-center px-6 pt-20 pb-16">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-block text-xs font-semibold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-6"
            style={{
              color: "#C2703A",
              background: "rgba(194,112,58,0.10)",
              border: "1px solid rgba(194,112,58,0.25)",
            }}
          >
            FERRAMENTA GRATUITA
          </div>

          <h1
            className="font-serif text-[44px] max-md:text-[32px] font-bold leading-[1.1] mb-5 tracking-[-0.02em]"
            style={{ color: "#F5F0E8" }}
          >
            Gere Orcamentos
            <br />
            <span className="italic" style={{ color: "#C2703A" }}>Profissionais</span> com IA
          </h1>

          <p className="text-base leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "#B8B3AA" }}>
            Template gratuito que transforma o Claude AI em seu gerador de
            orcamentos premium. Design glassmorphism, seu logo, pronto em 2
            minutos.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("form-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-medium text-base px-10 py-4 rounded-xl cursor-pointer border-none transition-all"
            style={{
              backgroundColor: "#C2703A",
              color: "#F2EDE5",
            }}
          >
            Baixar Gratis
          </button>
        </div>
      </section>

      {/* Features — cream */}
      <section className="px-6 py-20" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="card-embossed rounded-xl p-6"
              >
                <h3 className="text-base font-medium mb-1.5" style={{ color: "#1A1A18" }}>
                  {f.title}
                </h3>
                <p className="text-[13px] leading-relaxed m-0" style={{ color: "#7A766E" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section — cream */}
      <section
        id="form-section"
        className="px-6 pb-24"
        style={{ backgroundColor: "#F2EDE5" }}
      >
        <div className="max-w-lg mx-auto">
          <div
            className="rounded-2xl p-9"
            style={{
              backgroundColor: "white",
              border: "1px solid #E5DFD6",
              boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
            }}
          >
            {!submitted ? (
              <>
                <h2 className="font-serif text-[22px] font-bold mb-1.5 text-center" style={{ color: "#1A1A18" }}>
                  Receba Seu Gerador de Orcamento
                </h2>
                <p className="text-sm text-center mb-7" style={{ color: "#7A766E" }}>
                  Preencha abaixo e baixe na hora + receba por email.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3.5">
                    <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: "#4A4A45" }}>
                      Nome *
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className={inputCls}
                    />
                  </div>

                  <div className="mb-3.5">
                    <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: "#4A4A45" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={inputCls}
                    />
                  </div>

                  <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3.5 mb-6">
                    <div>
                      <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: "#4A4A45" }}>
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: "#4A4A45" }}>
                        Tipo de Negocio
                      </label>
                      <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className={`${inputCls} appearance-none cursor-pointer`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%237A766E'/%3E%3C/svg%3E")`,
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
                    <p className="text-red-700 text-sm text-center mb-4">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-semibold text-base py-4 rounded-xl cursor-pointer border-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "#C2703A",
                      color: "#F2EDE5",
                    }}
                  >
                    {loading ? "Enviando..." : "Receber Meu Gerador Gratis"}
                  </button>

                  <p className="text-[11px] text-center mt-3.5 leading-relaxed" style={{ color: "#7A766E" }}>
                    Seus dados estao seguros. Sem spam, prometemos.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h2 className="font-serif text-[22px] font-bold mb-2" style={{ color: "#1A1A18" }}>
                  Pronto, {name.split(" ")[0]}!
                </h2>
                <p className="text-sm mb-7 leading-relaxed" style={{ color: "#4A4A45" }}>
                  Seus arquivos estao prontos. Tambem enviamos tudo para{" "}
                  <strong style={{ color: "#1A1A18" }}>{email}</strong>.
                </p>

                <div className="flex flex-col gap-2.5">
                  <a
                    href={downloads?.pdf}
                    download
                    className="block text-center no-underline font-semibold text-sm py-3.5 px-6 rounded-xl transition-all"
                    style={{
                      backgroundColor: "#C2703A",
                      color: "#F2EDE5",
                    }}
                  >
                    Baixar Guia PDF
                  </a>
                  <a
                    href={downloads?.template_pt}
                    download
                    className="block text-center no-underline text-sm py-3.5 px-6 rounded-xl transition-all"
                    style={{
                      backgroundColor: "rgba(194,112,58,0.08)",
                      border: "1px solid rgba(194,112,58,0.20)",
                      color: "#A85C30",
                    }}
                  >
                    Baixar Template PT-BR (.zip)
                  </a>
                  <a
                    href={downloads?.template_en}
                    download
                    className="block text-center no-underline text-sm py-3.5 px-6 rounded-xl transition-all"
                    style={{
                      backgroundColor: "rgba(194,112,58,0.08)",
                      border: "1px solid rgba(194,112,58,0.20)",
                      color: "#A85C30",
                    }}
                  >
                    Baixar Template EN (.zip)
                  </a>
                </div>

                <p className="text-xs mt-5 leading-relaxed" style={{ color: "#7A766E" }}>
                  Dica: Abra o PDF primeiro para ver as instrucoes passo a
                  passo.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
