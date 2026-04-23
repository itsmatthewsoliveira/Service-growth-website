"use client";

import PageHero from "@/components/sections/PageHero";
import EditorialBlock from "@/components/sections/EditorialBlock";
import ClosingCTA from "@/components/sections/ClosingCTA";

const ACCENT = "#FF6A00";
const INK = "#121114";

const FEATURES = [
  { num: "01", title: "Built to convert", body: "Every section tested against a buyer journey — not just designed to look pretty." },
  { num: "02", title: "Local SEO baked in", body: "Schema, local pack signals, neighborhood pages — so you rank where your buyers are." },
  { num: "03", title: "AI intake wired", body: "Lead forms flow into your AI qualifier the moment they submit." },
  { num: "04", title: "Fast + mobile-first", body: "90+ Lighthouse scores. Loads in under a second on a 4G phone." },
];

export default function WebsitePage() {
  return (
    <>
      <PageHero
        eyebrow="Service · 01"
        headlineLead="Websites that"
        headlineAccent="convert."
        headlineTrail="Not just exist."
        subhead="Your website should be your hardest-working employee. We build fast, mobile-first, conversion-focused sites that rank on Google and turn visitors into booked estimates — not bounce stats."
        primaryCta={{ label: "See pricing", href: "/pricing" }}
        secondaryCta={{ label: "Book a demo", href: "/contact" }}
        image="/hero-climb.png"
        imageAlt="Website mockups — anime placeholder"
      />

      {/* Feature grid — LIGHT 4-up */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2.5 uppercase mb-6" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 12, letterSpacing: "0.22em", color: INK, fontWeight: 500 }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              What you get
            </div>
            <h2 className="uppercase" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: "clamp(38px, 5.6vw, 68px)", lineHeight: 0.98, letterSpacing: "-0.02em", color: INK }}>
              Four things every{" "}
              <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>premium site</span>{" "}
              must do.
            </h2>
          </div>

          <div className="h-px mb-14" style={{ background: "rgba(18,17,20,0.12)" }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {FEATURES.map((f) => (
              <div key={f.num}>
                <div className="mb-5" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: "-0.025em", color: ACCENT }}>{f.num}</div>
                <h3 className="uppercase mb-3" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.08, letterSpacing: "-0.01em", color: INK }}>{f.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(18,17,20,0.68)" }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EditorialBlock
        theme="dark"
        num="05"
        eyebrow="Our playbook"
        headlineLead="A site that"
        headlineAccent="earns its keep"
        headlineTrail="every month."
        body="We don't build vanity sites. Every page is a step in your buyer journey — from paid ad landing to service page to booking. Every click is measured, tested, and tuned."
        bullets={[
          "Wireframe + copy aligned to your offer",
          "Brand-matched design, not a generic template",
          "CMS you can edit without us",
          "Quarterly conversion reviews + tweaks",
        ]}
        cta={{ label: "See pricing", href: "/pricing" }}
        image="/growth-collab.png"
        imageAlt="Website mockup + analytics — anime placeholder"
        imagePosition="left"
      />

      <ClosingCTA />
    </>
  );
}
