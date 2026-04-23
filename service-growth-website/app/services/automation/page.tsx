"use client";

import PageHero from "@/components/sections/PageHero";
import EditorialBlock from "@/components/sections/EditorialBlock";
import ClosingCTA from "@/components/sections/ClosingCTA";

const ACCENT = "#FF6A00";
const INK = "#121114";
const CREAM = "#FCFFD5";

const FLOW = [
  { step: "T+0s", title: "Lead arrives", body: "Call, text, or form — from any channel." },
  { step: "T+8s", title: "AI responds", body: "Qualifies intent, urgency, and budget in real conversation." },
  { step: "T+30s", title: "Calendar slot offered", body: "Routes to your actual availability. Confirms by SMS." },
  { step: "T+60s", title: "Booked", body: "Synced to your CRM + calendar. You get a heads-up ping." },
];

const STATS = [
  { value: "<60s", label: "Avg response, every channel" },
  { value: "24/7", label: "Human + AI coverage" },
  { value: "0", label: "Missed-call leaks" },
];

export default function AutomationPage() {
  return (
    <>
      <PageHero
        eyebrow="Service · 04"
        headlineLead="AI that never"
        headlineAccent="misses a lead."
        subhead="60-second response on every call, text, and form. Qualifies intent, books estimates, and syncs to your calendar while you're on a jobsite. Human operators pick up the warm ones."
        primaryCta={{ label: "Book a demo", href: "/growth-blueprint" }}
        secondaryCta={{ label: "How it works", href: "/how-it-works" }}
        image="/growth-collab.png"
        imageAlt="AI agent in action — anime placeholder"
      />

      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2.5 uppercase mb-6" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 12, letterSpacing: "0.22em", color: INK, fontWeight: 500 }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The 60-second flow
            </div>
            <h2 className="uppercase" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: "clamp(38px, 5.6vw, 68px)", lineHeight: 0.98, letterSpacing: "-0.02em", color: INK }}>
              From lead to{" "}
              <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>booked</span>{" "}
              in under a minute.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {FLOW.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="relative flex items-center justify-center w-14 h-14 mb-6" style={{ background: i === FLOW.length - 1 ? ACCENT : "#FFFFFF", color: i === FLOW.length - 1 ? INK : ACCENT, border: `2px solid ${ACCENT}`, borderRadius: 999, fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>{s.step}</div>
                <h3 className="uppercase mb-2" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.01em", color: INK }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(18,17,20,0.68)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EditorialBlock
        theme="dark"
        num="05"
        eyebrow="The stack"
        headlineLead="AI + humans."
        headlineAccent="Both on the line."
        body="Our system isn't a generic chatbot. It's a stack of models tuned to your business — with human operators behind it ready to take over the moment a lead goes warm. Nothing gets dropped."
        bullets={[
          "Voice bot on your real phone flows",
          "SMS + email sequences in your voice",
          "Calendar + CRM integrated to your tools",
          "Human operators trained on your offer",
        ]}
        cta={{ label: "See how it works", href: "/how-it-works" }}
        image="/hero-climb.png"
        imageAlt="AI + human operator stack — anime placeholder"
        imagePosition="left"
      />

      <section className="relative w-full overflow-hidden" style={{ background: INK, color: CREAM }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05, mixBlendMode: "multiply", backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")" }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: "1px solid rgba(252,255,213,0.14)", borderBottom: "1px solid rgba(252,255,213,0.14)" }}>
            {STATS.map((s, i) => (
              <div key={s.label} className="py-12 lg:py-16 px-6 lg:px-10" style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(252,255,213,0.14)" : undefined }}>
                <div style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: "clamp(52px, 5.5vw, 80px)", lineHeight: 0.95, letterSpacing: "-0.025em", color: ACCENT }}>{s.value}</div>
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
