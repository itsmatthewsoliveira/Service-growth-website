"use client";

import PageHero from "@/components/sections/PageHero";
import EditorialBlock from "@/components/sections/EditorialBlock";
import ClosingCTA from "@/components/sections/ClosingCTA";

const ACCENT = "#E25312";
const INK = "#10100F";

const GALLERY = [
  { label: "Before / After", src: "/hero-climb.webp", caption: "Editorial-grade photo transformation" },
  { label: "3D Rendering", src: "/growth-collab.webp", caption: "Pre-build visuals that close jobs" },
  { label: "Social Animation", src: "/hero-climb.webp", caption: "iPhone shots → scroll-stopping clips" },
  { label: "Mood Boards", src: "/growth-collab.webp", caption: "Design direction in one page" },
];

export default function ContentPage() {
  return (
    <>
      <PageHero
        eyebrow="Service · 03"
        headlineLead="Photos that"
        headlineAccent="close the deal."
        subhead="Your competitors with worse work are winning jobs because their photos look better. We fix that — iPhone shots to editorial, before/after magic, and 3D renders that sell the vision before the work starts."
        primaryCta={{ label: "See pricing", href: "/pricing" }}
        secondaryCta={{ label: "Book a demo", href: "/contact" }}
        image="/growth-collab.webp"
        imageAlt="Content + visual pipeline — anime placeholder"
      />

      {/* Gallery grid — WHITE, image-forward */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 uppercase mb-6" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 12, letterSpacing: "0.22em", color: INK, fontWeight: 500 }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                What we make
              </div>
              <h2 className="uppercase" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: "clamp(38px, 5.6vw, 68px)", lineHeight: 0.98, letterSpacing: "-0.02em", color: INK }}>
                Four kinds of{" "}
                <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>magic.</span>
              </h2>
            </div>
            <p className="max-w-xs" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 15, lineHeight: 1.55, color: "rgba(16,16,15,0.6)" }}>
              Every deliverable ships inside 7 days. Rights stay with you forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {GALLERY.map((g) => (
              <figure key={g.label} className="group">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3", background: INK, borderRadius: 6, border: "1px solid rgba(16,16,15,0.08)" }}>
                  <img src={g.src} alt={g.caption} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" style={{ filter: "contrast(1.05) brightness(0.92)" }} />
                  <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(16,16,15,0) 55%, rgba(16,16,15,0.55) 100%)" }} />
                  <div className="absolute top-4 left-4 uppercase" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 10, letterSpacing: "0.22em", fontWeight: 700, color: "#FFFFFF", background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", padding: "6px 10px", borderRadius: 999 }}>
                    {g.label}
                  </div>
                </div>
                <figcaption className="mt-5 uppercase" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 18, lineHeight: 1.2, letterSpacing: "-0.01em", color: INK }}>
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <EditorialBlock
        theme="dark"
        num="05"
        eyebrow="The process"
        headlineLead="Send us"
        headlineAccent="the raw shots."
        headlineTrail="We do the rest."
        body="Your crew snaps on-site with an iPhone. We turn that into the portfolio content that wins you high-end jobs — shipped inside a week, edited in your brand look."
        bullets={[
          "Weekly upload link + brief form (5 min)",
          "Editorial-grade before/after pairs",
          "3D renders for pre-build pitches",
          "Short-form video for Instagram + TikTok",
        ]}
        cta={{ label: "See pricing", href: "/pricing" }}
        image="/hero-climb.webp"
        imageAlt="Content pipeline — anime placeholder"
        imagePosition="right"
      />

      <ClosingCTA />
    </>
  );
}
