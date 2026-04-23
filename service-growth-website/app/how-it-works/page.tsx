"use client";

import PageHero from "@/components/sections/PageHero";
import EditorialBlock from "@/components/sections/EditorialBlock";
import ClosingCTA from "@/components/sections/ClosingCTA";

const ACCENT = "#FF6A00";
const INK = "#121114";
const CREAM = "#FCFFD5";

const STEPS = [
  { num: "01", badge: "25 minutes", title: "Discovery call", body: "We learn your business and identify exactly where you're leaking leads today." },
  { num: "02", badge: "Day 1–3", title: "Custom plan", body: "We map out the stack — which AI, which integrations, which workflows — and price it." },
  { num: "03", badge: "Day 4–10", title: "Build + configure", body: "We build everything in our own environment. You keep running your business." },
  { num: "04", badge: "Day 11–13", title: "Test + train", body: "End-to-end testing, plus a short training call if your team needs one." },
  { num: "05", badge: "Day 14", title: "Go live", body: "Systems flip on. First AI-booked estimate usually lands within 48 hours." },
  { num: "06", badge: "Ongoing", title: "Optimize", body: "Weekly reviews of what's converting. We tune copy, offers, and routing based on real data." },
];

const OUTCOMES = [
  { value: "24/7", label: "Lead response — even at 2 AM Sunday" },
  { value: "<60s", label: "Every inquiry gets a real reply" },
  { value: "0", label: "Missed calls fall through the cracks" },
];

const YOU = [
  { time: "25 min", task: "Discovery call" },
  { time: "30 min", task: "Fill out onboarding questionnaire" },
  { time: "30 min", task: "Review & approve the build" },
  { time: "30 min", task: "Team training (optional)" },
];

const US = [
  "Map your customer journey",
  "Build AI lead capture + qualification",
  "Configure voice bot + missed-call text-back",
  "Write email/SMS follow-up sequences",
  "Set up review automation",
  "Integrate with your CRM",
  "Test everything end-to-end",
  "Ongoing optimization + support",
];

export default function HowItWorksPage() {
  return (
    <>
      {/* 1 · Hero — DARK with image slot */}
      <PageHero
        eyebrow="How it works"
        headlineLead="From signed to"
        headlineAccent="live in 14 days"
        subhead="We handle everything. You fill out a questionnaire, we build your systems, and you're live in two weeks. Total time from you: about two hours."
        primaryCta={{ label: "Book discovery call", href: "/growth-blueprint" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        image="/hero-climb.png"
        imageAlt="Team building the AI stack — anime placeholder"
      />

      {/* 2 · Process timeline — LIGHT, 6-step numbered grid */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
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
                The process
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
                Six steps,{" "}
                <span
                  style={{
                    color: ACCENT,
                    fontStyle: "italic",
                    fontFamily: "var(--font-display), 'Instrument Serif', serif",
                  }}
                >
                  zero chaos.
                </span>
              </h2>
            </div>
            <p
              className="max-w-md"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 16,
                lineHeight: 1.55,
                color: "rgba(18,17,20,0.62)",
              }}
            >
              Every step is timeboxed. No three-month &ldquo;discovery phase&rdquo; that burns a quarter before you see value.
            </p>
          </div>

          <div className="h-px mb-16" style={{ background: "rgba(18,17,20,0.12)" }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {STEPS.map((s) => (
              <div key={s.num}>
                <div
                  className="flex items-baseline justify-between mb-4"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 56,
                      lineHeight: 1,
                      letterSpacing: "-0.025em",
                      color: ACCENT,
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="uppercase"
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: 11,
                      letterSpacing: "0.22em",
                      color: "rgba(18,17,20,0.55)",
                      fontWeight: 500,
                    }}
                  >
                    {s.badge}
                  </span>
                </div>
                <h3
                  className="uppercase mb-3"
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: 1.08,
                    letterSpacing: "-0.015em",
                    color: INK,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "rgba(18,17,20,0.68)",
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Featured build block — DARK with image */}
      <EditorialBlock
        theme="dark"
        eyebrow="The build"
        headlineLead="Your AI team,"
        headlineAccent="building while you work."
        body="You don't watch this part. We configure every workflow, write every sequence, and wire it into your CRM while you keep running jobs. Most of your time investment happens in two short calls bookending the build."
        bullets={[
          "Custom AI lead qualification trained on your offer",
          "Voice bot configured on your actual phone flows",
          "SMS/email sequences written in your voice",
          "Full CRM integration + testing",
        ]}
        cta={{ label: "See what's included", href: "/pricing" }}
        image="/growth-collab.png"
        imageAlt="Operators building the AI stack — anime placeholder"
        imagePosition="right"
      />

      {/* 4 · Time investment — LIGHT split */}
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
              Your time investment
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
              About two hours.{" "}
              <span
                style={{
                  color: ACCENT,
                  fontStyle: "italic",
                  fontFamily: "var(--font-display), 'Instrument Serif', serif",
                }}
              >
                Total.
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
                What you do
              </h3>
              <ul className="space-y-4 mb-8">
                {YOU.map((item) => (
                  <li
                    key={item.task}
                    className="flex items-baseline gap-4"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 16,
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      className="flex-shrink-0"
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: 13,
                        letterSpacing: "0.08em",
                        color: ACCENT,
                        fontWeight: 700,
                        minWidth: 80,
                      }}
                    >
                      {item.time}
                    </span>
                    <span style={{ color: "rgba(18,17,20,0.8)" }}>{item.task}</span>
                  </li>
                ))}
              </ul>
              <div
                className="pt-6 border-t"
                style={{ borderColor: "rgba(18,17,20,0.12)" }}
              >
                <div
                  className="uppercase mb-2"
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    color: "rgba(18,17,20,0.55)",
                    fontWeight: 500,
                  }}
                >
                  Total from you
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 56,
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                    color: ACCENT,
                  }}
                >
                  ~2 hours
                </div>
              </div>
            </div>

            <div>
              <h3
                className="uppercase mb-8"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 13,
                  letterSpacing: "0.22em",
                  color: INK,
                  fontWeight: 700,
                }}
              >
                What we do
              </h3>
              <ul className="space-y-3">
                {US.map((task) => (
                  <li
                    key={task}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: "rgba(18,17,20,0.82)",
                    }}
                  >
                    <span
                      className="mt-[7px] flex-shrink-0"
                      style={{ width: 8, height: 8, background: ACCENT, borderRadius: 1 }}
                    />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · Outcomes — DARK stat strip */}
      <section
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
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-28">
          <div className="text-center mb-14">
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
              What you get
            </div>
            <h2
              className="uppercase mx-auto"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(42px, 6.4vw, 80px)",
                lineHeight: 0.96,
                letterSpacing: "-0.025em",
                color: CREAM,
                maxWidth: 900,
              }}
            >
              The outcomes{" "}
              <span
                style={{
                  color: ACCENT,
                  fontStyle: "italic",
                  fontFamily: "var(--font-display), 'Instrument Serif', serif",
                }}
              >
                that actually matter.
              </span>
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{
              borderTop: "1px solid rgba(252,255,213,0.14)",
              borderBottom: "1px solid rgba(252,255,213,0.14)",
            }}
          >
            {OUTCOMES.map((s, i) => (
              <div
                key={s.label}
                className="py-12 lg:py-16 px-6 lg:px-10"
                style={{
                  borderRight: i < OUTCOMES.length - 1 ? "1px solid rgba(252,255,213,0.14)" : undefined,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(56px, 5.8vw, 84px)",
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
                    fontSize: 12,
                    letterSpacing: "0.18em",
                    color: "rgba(252,255,213,0.72)",
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

      {/* 6 · Closing CTA */}
      <ClosingCTA />
    </>
  );
}
