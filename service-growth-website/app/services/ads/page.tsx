"use client";

import PageHero from "@/components/sections/PageHero";
import EditorialBlock from "@/components/sections/EditorialBlock";
import ClosingCTA from "@/components/sections/ClosingCTA";

const ACCENT = "#E25312";
const INK = "#10100F";
const CREAM = "#FCFFD5";

const PLATFORMS = [
  { num: "01", title: "Google Ads", body: "Show up the moment someone searches. These are buyers with intent — ready to pay now." },
  { num: "02", title: "Meta / Facebook", body: "Get in front of homeowners in your service area who match your ideal customer profile." },
  { num: "03", title: "Retargeting", body: "97% leave without converting. Retargeting follows them back when they're ready to buy." },
  { num: "04", title: "ROI tracking", body: "Every dollar tracked from click to closed job. You know which ads are making money." },
];

const STATS = [
  { value: "3.8×", label: "Average ROAS in 90 days" },
  { value: "$5–$15", label: "Cost per qualified lead" },
  { value: "25%+", label: "Keyword conversion rate" },
];

export default function AdsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service · 02"
        headlineLead="Ads that book"
        headlineAccent="high-end jobs"
        subhead="Stop wasting money on clicks from tire-kickers. We run Google, Meta, and Yelp campaigns tuned for buyer intent — so every dollar lands in front of someone actually ready to hire."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        image="/hero-climb.webp"
        imageAlt="Ads campaign in flight — anime placeholder"
      />

      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2.5 uppercase mb-6" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 12, letterSpacing: "0.22em", color: INK, fontWeight: 500 }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Platforms we run
            </div>
            <h2 className="uppercase" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: "clamp(38px, 5.6vw, 68px)", lineHeight: 0.98, letterSpacing: "-0.02em", color: INK }}>
              Four channels,{" "}
              <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>one funnel.</span>
            </h2>
          </div>
          <div className="h-px mb-14" style={{ background: "rgba(16,16,15,0.12)" }} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {PLATFORMS.map((p) => (
              <div key={p.num}>
                <div className="mb-5" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: "-0.025em", color: ACCENT }}>{p.num}</div>
                <h3 className="uppercase mb-3" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.08, letterSpacing: "-0.01em", color: INK }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(16,16,15,0.68)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden" style={{ background: INK, color: CREAM }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05, mixBlendMode: "multiply", backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")" }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-24">
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

      <EditorialBlock
        theme="light"
        num="05"
        eyebrow="Our process"
        headlineLead="Data-driven from"
        headlineAccent="first click"
        headlineTrail="to closed job"
        body="We don't set-and-forget campaigns. Every week we test new creative, kill underperformers, and double down on winners. Your cost-per-lead drops as the campaigns get smarter."
        bullets={[
          "Market + competitor research before a dollar is spent",
          "Campaign build with targeted copy + landing pages",
          "Launch with geo-targeting + real-time monitoring",
          "Weekly optimization — test, kill, scale",
        ]}
        cta={{ label: "See pricing", href: "/pricing" }}
        image="/growth-collab.webp"
        imageAlt="Ad performance dashboard — anime placeholder"
        imagePosition="right"
      />

      <ClosingCTA />
    </>
  );
}
