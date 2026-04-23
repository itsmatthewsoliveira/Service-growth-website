"use client";

import PageHero from "@/components/sections/PageHero";
import EditorialBlock from "@/components/sections/EditorialBlock";
import ClosingCTA from "@/components/sections/ClosingCTA";

const ACCENT = "#FF6A00";
const INK = "#121114";
const CREAM = "#FCFFD5";

const WHY_DIFFERENT = [
  {
    num: "01",
    title: "We're not AI grifters",
    body: "The market is flooded with \"experts\" who took a 2-hour course and resell generic tools. We actually built and used these systems to scale our own business first.",
  },
  {
    num: "02",
    title: "We know your world",
    body: "We've been on the roof when the phone rings. We know what it's like to lose a job because you couldn't call back fast enough — because we lived it.",
  },
  {
    num: "03",
    title: "Proven before sold",
    body: "We don't offer anything we haven't tested on ourselves first. Every system, every workflow — battle-tested in our own business before it ever ships to yours.",
  },
];

const PHILOSOPHY = [
  {
    title: "Technology should make life easier",
    body: "Not more complicated. If you need a PhD to use it, we failed. Every system is designed for busy operators who have a crew to run.",
  },
  {
    title: "If it doesn't book jobs, it doesn't matter",
    body: "We don't care about vanity metrics. One question: did you book more jobs this month than last?",
  },
  {
    title: "Educate first, sell second",
    body: "We'll tell you exactly where you're losing leads before you ever pay us. No hard sell, no BS.",
  },
  {
    title: "We win when you win",
    body: "That's why we guarantee results. If you don't see more booked jobs in 60 days, we work for free.",
  },
];

const STATS = [
  { value: "$100K", label: "Profit in 90 days" },
  { value: "$30K/mo", label: "Recurring revenue" },
  { value: "$200K", label: "Invoiced" },
];

export default function AboutPage() {
  return (
    <>
      {/* 1 · Hero — DARK */}
      <PageHero
        eyebrow="Our story"
        headlineLead="We built this"
        headlineAccent="for ourselves first"
        subhead="Matthews ran service businesses in Jacksonville before building ServiceGrowth. He knows what it's like to lose a job because the phone rang on a roof. The systems we sell are the ones he ran on himself."
        image="/hero-climb.png"
        imageAlt="Founder portrait — anime placeholder"
      />

      {/* 2 · The Story — LIGHT, image left */}
      <EditorialBlock
        theme="light"
        num="01"
        eyebrow="From the founder"
        headlineLead="Built on the roof,"
        headlineAccent="not the whiteboard"
        body="I'm Matthews. Before ServiceGrowth, I ran a high-end construction company and a luxury outdoor design company here in Jacksonville. I know what it's like to be on a job site, phone buzzing, losing leads because I couldn't answer. So I built systems to fix it — and they worked well enough that contractors I know started asking me to build them theirs. That's how ServiceGrowth was born."
        bullets={[
          "Scaled my own outdoor design company to $100K profit in 90 days",
          "$30K/month recurring, $200K invoiced — all from these same systems",
          "Built, ran, and stress-tested every workflow on my own P&L first",
          "Every client gets the exact playbook I used on myself",
        ]}
        cta={{ label: "See the numbers", href: "#stats" }}
        image="/growth-collab.png"
        imageAlt="Matthews working the job site — anime placeholder"
        imagePosition="left"
      />

      {/* 3 · Stats — DARK strip */}
      <section
        id="stats"
        className="relative w-full overflow-hidden"
        style={{ background: INK, color: CREAM }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            mixBlendMode: "multiply",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-20">
          <div
            className="grid grid-cols-3"
            style={{
              borderTop: "1px solid rgba(252,255,213,0.14)",
              borderBottom: "1px solid rgba(252,255,213,0.14)",
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="py-10 lg:py-14 px-4 lg:px-8"
                style={{
                  borderRight: i < STATS.length - 1 ? "1px solid rgba(252,255,213,0.14)" : undefined,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(40px, 5vw, 72px)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.025em",
                    color: ACCENT,
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-4 uppercase"
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: "rgba(252,255,213,0.65)",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Why we're different — LIGHT, 3-up numbered grid */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2.5 uppercase mb-6"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 12,
                  letterSpacing: "0.22em",
                  color: INK,
                  fontWeight: 500,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                What sets us apart
              </div>
              <h2
                className="uppercase"
                style={{
                  fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(42px, 6.4vw, 80px)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.025em",
                  color: INK,
                }}
              >
                Why we&apos;re{" "}
                <span
                  style={{
                    color: ACCENT,
                    fontStyle: "italic",
                    fontFamily: "var(--font-display), 'Instrument Serif', serif",
                  }}
                >
                  different
                </span>
              </h2>
            </div>
          </div>

          <div className="h-px mb-16" style={{ background: "rgba(18,17,20,0.12)" }} />

          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {WHY_DIFFERENT.map((item) => (
              <div key={item.num}>
                <div
                  className="mb-6"
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 64,
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                    color: ACCENT,
                  }}
                >
                  {item.num}
                </div>
                <h3
                  className="uppercase mb-4"
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 26,
                    lineHeight: 1.04,
                    letterSpacing: "-0.015em",
                    color: INK,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "rgba(18,17,20,0.7)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Philosophy — DARK, 4-card editorial */}
      <section className="relative w-full overflow-hidden" style={{ background: INK, color: CREAM }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            mixBlendMode: "multiply",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2.5 uppercase mb-6"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 12,
                  letterSpacing: "0.22em",
                  color: CREAM,
                  fontWeight: 500,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Our philosophy
              </div>
              <h2
                className="uppercase"
                style={{
                  fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(42px, 6.4vw, 80px)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.025em",
                  color: CREAM,
                }}
              >
                Four rules{" "}
                <span
                  style={{
                    color: ACCENT,
                    fontStyle: "italic",
                    fontFamily: "var(--font-display), 'Instrument Serif', serif",
                  }}
                >
                  we don&apos;t break.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {PHILOSOPHY.map((item, i) => (
              <div
                key={item.title}
                style={{
                  padding: 32,
                  background: "#0F0E10",
                  border: "1px solid rgba(252,255,213,0.08)",
                  borderRadius: 14,
                }}
              >
                <div
                  className="uppercase mb-3"
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: ACCENT,
                    fontWeight: 500,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="uppercase mb-4"
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: 1.08,
                    letterSpacing: "-0.015em",
                    color: CREAM,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "rgba(252,255,213,0.65)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · Who this is for — LIGHT, 2-col */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2.5 uppercase mb-6"
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.22em",
                color: INK,
                fontWeight: 500,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Is this a fit?
            </div>
            <h2
              className="uppercase mx-auto"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(42px, 6.4vw, 80px)",
                lineHeight: 0.96,
                letterSpacing: "-0.025em",
                color: INK,
                maxWidth: 900,
              }}
            >
              We&apos;re not for{" "}
              <span
                style={{
                  color: ACCENT,
                  fontStyle: "italic",
                  fontFamily: "var(--font-display), 'Instrument Serif', serif",
                }}
              >
                everyone
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            <div>
              <h3
                className="uppercase mb-8"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 13,
                  letterSpacing: "0.22em",
                  color: ACCENT,
                  fontWeight: 700,
                }}
              >
                ✓ A fit if…
              </h3>
              <ul className="space-y-4">
                {[
                  "You're doing $30k+/month and ready to scale",
                  "You're losing leads to missed calls and slow follow-up",
                  "You want to grow without hiring more people",
                  "You're in home services, medical, or construction",
                  "You value results over promises",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 16,
                      lineHeight: 1.5,
                      color: "rgba(18,17,20,0.8)",
                    }}
                  >
                    <span
                      className="mt-[8px] flex-shrink-0"
                      style={{ width: 8, height: 8, background: ACCENT, borderRadius: 1 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="uppercase mb-8"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 13,
                  letterSpacing: "0.22em",
                  color: "rgba(18,17,20,0.5)",
                  fontWeight: 700,
                }}
              >
                ✕ Not a fit if…
              </h3>
              <ul className="space-y-4">
                {[
                  "You're just getting started and need leads first",
                  "You're looking for a magic button",
                  "You're not willing to invest in growth",
                  "You want the cheapest option",
                  "You're not ready to change how you operate",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 16,
                      lineHeight: 1.5,
                      color: "rgba(18,17,20,0.5)",
                    }}
                  >
                    <span
                      className="mt-[8px] flex-shrink-0"
                      style={{
                        width: 8,
                        height: 8,
                        border: `1.5px solid rgba(18,17,20,0.3)`,
                        borderRadius: 1,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · Closing CTA */}
      <ClosingCTA />
    </>
  );
}
