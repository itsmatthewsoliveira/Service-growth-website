"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const STATS = [
  { value: "PARTNERED WITH AI AGENTS", label: "THE BEST STRATEGIES FOR BUSINESS GROWTH", emoji: "🤖" },
  { value: "$5M+", label: "IN CLIENT REVENUE GENERATED", emoji: "🚀" },
  { value: "500K+", label: "SAVED IN OPERATIONAL COSTS", emoji: "💰" },
  { value: "142,000+", label: "LEADS ANSWERED IN UNDER 8s", emoji: "⚡" },
  { value: "200+", label: "SERVICE BUSINESSES SCALED", emoji: "📈" },
  { value: "24/7", label: "HUMAN OPERATORS + AI · ALWAYS ON", emoji: "🧠" },
];

const SUBHEAD =
  "Human operators and AI agents working side-by-side — answering every call, qualifying every lead, and filling your calendar so you climb faster than you ever could alone.";

function StatsMarquee() {
  const Strip = () => (
    <div className="flex items-center gap-8 pr-8 shrink-0 whitespace-nowrap">
      {STATS.map((s) => (
        <div key={s.label} className="flex items-center gap-3 whitespace-nowrap">
          <span
            className="text-[14px] font-bold text-[#FF6A00]"
            style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", letterSpacing: "0.02em" }}
          >
            {s.value}
          </span>
          <span
            className="text-[14px] uppercase"
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 500,
            }}
          >
            {s.label}
          </span>
          <span className="text-[16px]">{s.emoji}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="sgai-marquee-wrap w-full overflow-hidden py-2"
      style={{
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="sgai-marquee-track flex"
        style={{ width: "max-content", animation: "sgai-marquee 30s linear infinite" }}
      >
        <Strip />
        <Strip />
        <Strip />
        <Strip />
      </div>
      <style>{`
        @keyframes sgai-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
        .sgai-marquee-wrap:hover .sgai-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .sgai-marquee-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

export default function HeroSplit() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#121114", minHeight: "min(900px, 100vh)" }}
    >
      {/* Grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.08,
          mixBlendMode: "multiply",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Main split — stacks under lg, splits at lg+ */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-20 pt-36 lg:pt-44 pb-14 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* ── Left column: copy (cols 1–6) ── */}
          <motion.div
            className="lg:col-span-6 lg:pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2.5 uppercase"
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.18em",
                color: "#FCFFD5",
                fontWeight: 500,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
              For service operators
            </div>

            {/* Headline */}
            <h1
              className="mt-6 uppercase text-[#FCFFD5]"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', 'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(44px, 7.2vw, 76px)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
              }}
            >
              Built to scale service businesses in the
              <br />
              <span style={{ color: "#FF6A00" }}>Age of AI</span>
            </h1>

            {/* Subhead */}
            <p
              className="mt-7 max-w-[520px]"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 17,
                lineHeight: 1.55,
                color: "#FCFFD5",
                opacity: 0.78,
              }}
            >
              {SUBHEAD}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex items-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 py-4 text-[14px] font-bold uppercase border text-[#FCFFD5] transition-colors hover:bg-[#FCFFD5]/10"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  letterSpacing: "0.08em",
                  borderColor: "#FCFFD5",
                  borderWidth: "1.5px",
                  borderRadius: 4,
                }}
              >
                Book a demo
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>

              <Link
                href="/how-it-works"
                className="group inline-flex items-center gap-2.5 text-[14px] font-semibold text-[#FCFFD5]"
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                <span
                  className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-full border border-[#FCFFD5]/90 transition-colors group-hover:bg-[#FF6A00]/20"
                  aria-hidden
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 1 L8 5 L2 9 Z" fill="#FCFFD5" />
                  </svg>
                </span>
                How it works
              </Link>
            </div>
          </motion.div>

          {/* ── Right column: image panel (cols 7–12) ── */}
          <motion.div
            className="lg:col-span-6 relative w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="relative overflow-hidden bg-[#121114] w-full"
              style={{
                borderRadius: "14px 0 0 14px",
                aspectRatio: "610 / 724",
                maxHeight: "min(724px, 80vh)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
              }}
            >
              <img
                src="/hero-climb.png"
                alt="Climbers ascending a mountain together — a metaphor for service growth"
                className="w-full h-full object-cover"
                style={{ filter: "contrast(1.1) brightness(0.95)" }}
              />

              {/* Stats marquee — absolute inside image */}
              <div className="absolute bottom-6 left-6 right-6 overflow-hidden" style={{ borderRadius: 12 }}>
                <StatsMarquee />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hint bar */}
      <div
        className="relative z-10 border-t flex items-center justify-between px-6 lg:px-20 h-14"
        style={{
          borderColor: "rgba(252,255,213,0.14)",
          background: "rgba(18,17,20,0.6)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: 11,
          color: "#FCFFD5",
          opacity: 0.65,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll · The 8-second rule</span>
        <span className="hidden md:inline">Featured in — HomeAdvisor · Angi · ServiceTitan</span>
        <span>↓</span>
      </div>
    </section>
  );
}
