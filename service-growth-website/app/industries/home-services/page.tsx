"use client";

import PageHero from "@/components/sections/PageHero";
import EditorialBlock from "@/components/sections/EditorialBlock";
import ClosingCTA from "@/components/sections/ClosingCTA";

const ACCENT = "#E25312";
const INK = "#10100F";
const CREAM = "#FCFFD5";

const EMERGENCIES = [
  { time: "2:14 AM", title: "Burst pipe · Flushing" },
  { time: "3:47 AM", title: "AC down · Midwood" },
  { time: "4:22 AM", title: "Roof leak · Park Slope" },
  { time: "5:55 AM", title: "Water heater · Jackson Heights" },
];

const STACK = [
  { num: "01", title: "24/7 AI booking", body: "Answers every call, qualifies, and drops a calendar slot — even at 3 AM." },
  { num: "02", title: "Missed-call text-back", body: "If they hang up, we text within 60 seconds. You win the callback race." },
  { num: "03", title: "Review automation", body: "After every job, an automated ask. Your Google rating climbs without you lifting a finger." },
  { num: "04", title: "Dispatch-ready CRM", body: "Every lead auto-routed to the right tech or van. Zero hand-offs dropped." },
];

export default function HomeServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry · Home services"
        headlineLead="The 2 AM call"
        headlineAccent="is your biggest opportunity."
        subhead="Roofing, HVAC, plumbing, landscaping — the jobs that pay most are the ones that come in after hours. Our AI answers every call, books every estimate, and never sleeps."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        image="/hero-climb.webp"
        imageAlt="Emergency dispatch — anime placeholder"
      />

      {/* "Last night's calls" — DARK editorial */}
      <section className="relative w-full overflow-hidden" style={{ background: INK, color: CREAM }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05, mixBlendMode: "multiply", backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")" }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 uppercase mb-6" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 12, letterSpacing: "0.22em", color: CREAM, fontWeight: 500 }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
                Last night while you slept
              </div>
              <h2 className="uppercase" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: "clamp(38px, 5.6vw, 72px)", lineHeight: 0.98, letterSpacing: "-0.02em", color: CREAM }}>
                Four emergencies.{" "}
                <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>Four bookings.</span>
              </h2>
            </div>
            <p className="max-w-xs" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 15, lineHeight: 1.55, color: "rgba(252,255,213,0.6)" }}>
              Your competitor's voicemail caught zero. Ours booked them all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {EMERGENCIES.map((e, i) => (
              <div key={i} className="flex items-center gap-5 py-5" style={{ borderBottom: "1px solid rgba(252,255,213,0.12)" }}>
                <div className="uppercase flex-shrink-0" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", color: ACCENT, minWidth: 90 }}>{e.time}</div>
                <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 16, color: CREAM }}>{e.title}</div>
                <div className="ml-auto uppercase" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: INK, background: ACCENT, padding: "4px 9px", borderRadius: 3 }}>Booked</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack — LIGHT 4-up */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2.5 uppercase mb-6" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 12, letterSpacing: "0.22em", color: INK, fontWeight: 500 }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              What your stack does
            </div>
            <h2 className="uppercase" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: "clamp(38px, 5.6vw, 68px)", lineHeight: 0.98, letterSpacing: "-0.02em", color: INK }}>
              Four systems.{" "}
              <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>Zero dropped calls.</span>
            </h2>
          </div>
          <div className="h-px mb-14" style={{ background: "rgba(16,16,15,0.12)" }} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {STACK.map((s) => (
              <div key={s.num}>
                <div className="mb-5" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: "-0.025em", color: ACCENT }}>{s.num}</div>
                <h3 className="uppercase mb-3" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.08, letterSpacing: "-0.01em", color: INK }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(16,16,15,0.68)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
