"use client";

import PageHero from "@/components/sections/PageHero";
import EditorialBlock from "@/components/sections/EditorialBlock";
import ClosingCTA from "@/components/sections/ClosingCTA";

const ACCENT = "#E25312";
const INK = "#10100F";
const CREAM = "#FCFFD5";

const COMPLIANCE = [
  { num: "01", title: "HIPAA-compliant stack", body: "Every tool in the funnel — AI, CRM, SMS, email — runs on a BAA-signed infrastructure." },
  { num: "02", title: "Patient-aware intake", body: "AI collects insurance, chief complaint, and urgency without asking for PHI in the wrong place." },
  { num: "03", title: "Reactivation sequences", body: "Lapsed patients auto-messaged on the right cadence, based on last visit + service type." },
  { num: "04", title: "Reminder flywheel", body: "Appointment reminders by preferred channel. Fewer no-shows. Fewer chased confirmations." },
];

const OUTCOMES = [
  { value: "34%", label: "Avg reactivation rate" },
  { value: "<5%", label: "No-show rate after flow" },
  { value: "24/7", label: "Scheduling coverage" },
];

export default function MedicalPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry · Medical"
        headlineLead="Fill your chair."
        headlineAccent="Keep it full."
        subhead="Dentists, chiropractors, med spas. HIPAA-compliant patient reactivation, appointment reminders, and a review flywheel — so your schedule stays booked without pulling front-desk time."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        image="/industry-medical-ai.webp"
        imageAlt="Medical spa front desk supported by an AI workflow assistant"
      />

      {/* Compliance badge block — DARK editorial */}
      <EditorialBlock
        theme="dark"
        eyebrow="Compliance first"
        headlineLead="HIPAA isn't a checkbox."
        headlineAccent="It's the foundation."
        body="Every system we ship to a medical practice is HIPAA-compliant top to bottom. BAA-signed infrastructure, encrypted-at-rest patient data, audit trails on every AI interaction. You don't buy compliance as an add-on — it's the floor we start at."
        bullets={[
          "BAA with every upstream vendor",
          "PHI segregated from marketing data",
          "Encrypted end-to-end, audit-logged",
          "Front-desk handoff flows, not replacement",
        ]}
        cta={{ label: "See how it works", href: "/how-it-works" }}
        image="/industry-medical-ai.webp"
        imageAlt="Patient management workflow supported by AI inside a medical practice"
        imagePosition="left"
      />

      {/* Capabilities grid — LIGHT */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2.5 uppercase mb-6" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 12, letterSpacing: "0.22em", color: INK, fontWeight: 500 }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              What ships with your stack
            </div>
            <h2 className="uppercase" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: "clamp(38px, 5.6vw, 68px)", lineHeight: 0.98, letterSpacing: "-0.02em", color: INK }}>
              Built for your{" "}
              <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>practice.</span>
            </h2>
          </div>
          <div className="h-px mb-14" style={{ background: "rgba(16,16,15,0.12)" }} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {COMPLIANCE.map((c) => (
              <div key={c.num}>
                <div className="mb-5" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: "-0.025em", color: ACCENT }}>{c.num}</div>
                <h3 className="uppercase mb-3" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.08, letterSpacing: "-0.01em", color: INK }}>{c.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(16,16,15,0.68)" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes strip — DARK */}
      <section className="relative w-full overflow-hidden" style={{ background: INK, color: CREAM }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05, mixBlendMode: "multiply", backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")" }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: "1px solid rgba(252,255,213,0.14)", borderBottom: "1px solid rgba(252,255,213,0.14)" }}>
            {OUTCOMES.map((s, i) => (
              <div key={s.label} className="py-12 lg:py-16 px-6 lg:px-10" style={{ borderRight: i < OUTCOMES.length - 1 ? "1px solid rgba(252,255,213,0.14)" : undefined }}>
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
