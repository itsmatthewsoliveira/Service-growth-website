"use client";

import PageHero from "@/components/sections/PageHero";
import EditorialBlock from "@/components/sections/EditorialBlock";
import ClosingCTA from "@/components/sections/ClosingCTA";

const ACCENT = "#E25312";
const INK = "#10100F";
const CREAM = "#FCFFD5";

const PAINS = [
  { num: "01", title: "Phone rings on the roof", body: "You're on a job. Phone buzzes. By the time you call back, they went with someone else." },
  { num: "02", title: "Generic agencies don't get trades", body: "They run your ads like a dentist's ads. Wrong keywords, wrong creative, wrong leads." },
  { num: "03", title: "Photos that don't close", body: "Your work is great. Your photos look like a 2012 flip phone. Buyers scroll past." },
  { num: "04", title: "No pipeline visibility", body: "You don't know which leads are worth chasing or what's coming next month." },
];

const DELIVERABLES = [
  { value: "<60s", label: "AI response, every lead" },
  { value: "$5–$15", label: "Cost per qualified lead" },
  { value: "3D", label: "Renders to close pre-build" },
  { value: "$600", label: "Free Yelp ad credits" },
];

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry · Construction"
        headlineLead="Built for"
        headlineAccent="the trades."
        subhead="Pavers, GCs, builders, architects, remodelers. We cut our teeth growing an outdoor living company zero-to-$100K in 90 days. We know construction — and we know how to win high-ticket jobs."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        image="/industry-construction-ai.webp"
        imageAlt="Construction operator reviewing plans with an AI assistant on a job site"
      />

      {/* Pain points — LIGHT */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2.5 uppercase mb-6" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 12, letterSpacing: "0.22em", color: INK, fontWeight: 500 }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The real problem
            </div>
            <h2 className="uppercase" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: "clamp(38px, 5.6vw, 72px)", lineHeight: 0.98, letterSpacing: "-0.02em", color: INK }}>
              Why most contractors{" "}
              <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>hit a ceiling.</span>
            </h2>
          </div>
          <div className="h-px mb-14" style={{ background: "rgba(16,16,15,0.12)" }} />
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {PAINS.map((p) => (
              <div key={p.num}>
                <div className="mb-5" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 52, lineHeight: 1, letterSpacing: "-0.025em", color: ACCENT }}>{p.num}</div>
                <h3 className="uppercase mb-3" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 26, lineHeight: 1.08, letterSpacing: "-0.015em", color: INK }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 15, lineHeight: 1.55, color: "rgba(16,16,15,0.68)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EditorialBlock
        theme="dark"
        num="05"
        eyebrow="Our story"
        headlineLead="We grew an outdoor living"
        headlineAccent="company to $100K"
        headlineTrail="in 90 days."
        body="Not theory. We ran the playbook on ourselves first. Every lead-capture flow, every ad, every follow-up sequence — battle-tested on our own P&L before it ever ships to yours."
        bullets={[
          "$0 → $100K profit in 90 days on one service line",
          "$30K/month recurring from the same systems",
          "50+ qualified estimates per month at $5–$15 per lead",
          "Every system documented, tested, and transferred to clients",
        ]}
        cta={{ label: "Read the story", href: "/about" }}
        image="/industry-construction-ai.webp"
        imageAlt="Construction growth system installed around field operations"
        imagePosition="right"
      />

      {/* Deliverables strip — DARK */}
      <section className="relative w-full overflow-hidden" style={{ background: INK, color: CREAM }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05, mixBlendMode: "multiply", backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")" }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2.5 uppercase mb-6" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 12, letterSpacing: "0.22em", color: CREAM, fontWeight: 500 }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              What ships with your stack
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid rgba(252,255,213,0.14)", borderBottom: "1px solid rgba(252,255,213,0.14)" }}>
            {DELIVERABLES.map((s, i) => (
              <div key={s.label} className="py-12 lg:py-16 px-6 lg:px-8" style={{ borderRight: i < DELIVERABLES.length - 1 ? "1px solid rgba(252,255,213,0.14)" : undefined }}>
                <div style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: "clamp(40px, 4.5vw, 64px)", lineHeight: 0.95, letterSpacing: "-0.025em", color: ACCENT }}>{s.value}</div>
                <div className="mt-4 uppercase" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 11, letterSpacing: "0.18em", color: "rgba(252,255,213,0.72)", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
