"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ACCENT = "#E25312";
const INK = "#10100F";
const CREAM = "#FCFFD5";

const STATS = [
  { value: "CALLS", label: "ANSWERED BEFORE THEY GO COLD", icon: "phone" },
  { value: "LEADS", label: "CAPTURED AND QUALIFIED", icon: "spark" },
  { value: "JOBS", label: "BOOKED ON THE CALENDAR", icon: "check" },
  { value: "REVIEWS", label: "TURNED INTO TRUST SIGNALS", icon: "star" },
  { value: "$5M+", label: "IN CLIENT REVENUE GENERATED", icon: "chart" },
  { value: "24/7", label: "HUMAN TEAM + AI ASSISTANCE", icon: "bolt" },
];

const SUBHEAD =
  "We install AI agents across sales, communication, and marketing so your business answers faster, follows up better, and turns more local demand into booked work.";

function IconMark({ name }: { name: string }) {
  const common = {
    width: 17,
    height: 17,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: CREAM,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <span
      aria-hidden
      className="inline-flex shrink-0 items-center justify-center"
      style={{
        position: "relative",
        width: 34,
        height: 34,
        borderRadius: 13,
        color: CREAM,
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(29,28,26,0.92) 48%, rgba(226,83,18,0.22))",
        border: "1px solid rgba(252,255,213,0.14)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 12px 28px rgba(0,0,0,0.35)",
      }}
    >
      <svg {...common}>
        {name === "phone" && <path d="M6.5 4h3l1.2 4-2 1.2a10 10 0 0 0 6.1 6.1l1.2-2 4 1.2v3a2 2 0 0 1-2.2 2C11.5 18.8 5.2 12.5 4.5 6.2A2 2 0 0 1 6.5 4z" />}
        {name === "spark" && <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />}
        {name === "check" && (
          <>
            <rect x="4" y="5" width="16" height="15" rx="2" />
            <path d="M8 3v4M16 3v4M8 12l2.3 2.3L16 9" />
          </>
        )}
        {name === "star" && <path d="M12 3.5l2.4 5 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 3.5z" />}
        {name === "chart" && <path d="M4 18h16M6 15l4-4 3 2 5-7M18 6h-4M18 6v4" />}
        {name === "bolt" && <path d="M13 2L5 13h6l-1 9 9-13h-6l0-7z" />}
      </svg>
      <span
        style={{
          position: "absolute",
          width: 6,
          height: 6,
          borderRadius: 999,
          background: ACCENT,
          boxShadow: "0 0 14px rgba(226,83,18,0.65)",
          transform: "translate(12px, -12px)",
        }}
      />
    </span>
  );
}

function MarqueeStrip() {
  return (
    <div className="flex items-center gap-8 pr-8 shrink-0 whitespace-nowrap">
      {STATS.map((s) => (
        <div key={s.label} className="flex items-center gap-3 whitespace-nowrap">
          <IconMark name={s.icon} />
          <span
            className="text-[14px] font-bold"
            style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", letterSpacing: "0.02em", color: ACCENT }}
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
        </div>
      ))}
    </div>
  );
}

function StatsMarquee() {
  return (
    <div
      className="sgai-marquee-wrap w-full overflow-hidden py-2"
      style={{
        background: "rgba(16,16,15,0.72)",
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
        <MarqueeStrip />
        <MarqueeStrip />
        <MarqueeStrip />
        <MarqueeStrip />
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
      style={{ background: INK, minHeight: "min(900px, 100dvh)" }}
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
                color: CREAM,
                fontWeight: 500,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              AI systems for service businesses
            </div>

            <h1
              className="mt-6 uppercase"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', 'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(48px, 7.4vw, 82px)",
                lineHeight: 0.95,
                letterSpacing: "0",
                maxWidth: 720,
                textWrap: "balance",
                color: CREAM,
              }}
            >
              AI systems for
              <br />
              <span style={{ color: ACCENT }}>service growth</span>
            </h1>

            {/* Subhead */}
            <p
              className="mt-7 max-w-[520px]"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 17,
                lineHeight: 1.55,
                color: CREAM,
                opacity: 0.78,
              }}
            >
              {SUBHEAD}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex items-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 py-4 text-[14px] font-bold uppercase border transition-colors hover:bg-[#FCFFD5]/10"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  letterSpacing: "0.08em",
                  borderColor: CREAM,
                  borderWidth: "1.5px",
                  borderRadius: 4,
                  color: CREAM,
                }}
              >
                Get my AI audit
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>

              <Link
                href="/how-it-works"
                className="group inline-flex items-center gap-2.5 text-[14px] font-semibold"
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: CREAM }}
              >
                <span
                  className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-full border transition-colors group-hover:bg-[#E25312]/20"
                  style={{ borderColor: "rgba(252,255,213,0.9)" }}
                  aria-hidden
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 1 L8 5 L2 9 Z" fill="#FCFFD5" />
                  </svg>
                </span>
                See the system
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
              className="relative overflow-hidden w-full"
              style={{
                borderRadius: "14px 0 0 14px",
                aspectRatio: "610 / 724",
                maxHeight: "min(724px, 80vh)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                background: INK,
              }}
            >
              <img
                src="/hero-climb.webp"
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
          background: "rgba(16,16,15,0.6)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: 11,
          color: CREAM,
          opacity: 0.65,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll · See the install</span>
        <span className="hidden md:inline">Calls · Texts · Reviews · Ads · Website</span>
        <span>↓</span>
      </div>
    </section>
  );
}
