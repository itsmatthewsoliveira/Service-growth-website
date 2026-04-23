"use client";

import Script from "next/script";
import PageHero from "@/components/sections/PageHero";

const ACCENT = "#FF6A00";
const INK = "#121114";
const CREAM = "#FCFFD5";

const EXPECTATIONS = [
  { num: "01", title: "We listen first", body: "Tell us where you are — revenue, team size, biggest bottleneck. No pitch." },
  { num: "02", title: "Diagnose the leak", body: "We identify exactly where leads are falling through — with evidence, not guesses." },
  { num: "03", title: "Show you the fix", body: "If a system makes sense, we map out the exact build. If it doesn't, we tell you." },
  { num: "04", title: "You decide", body: "No pressure, no follow-up spam. You leave with a plan — whether you hire us or not." },
];

const STATS = [
  { value: "25 min", label: "Average call length" },
  { value: "500+", label: "Calls booked" },
  { value: "$0", label: "No pitch, no cost" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free strategy call"
        headlineLead="Let's see if"
        headlineAccent="we can help."
        subhead="25-minute call. No pitch. We'll tell you exactly where you're losing leads — whether you hire us or not."
        align="centered"
      />

      {/* What to expect — LIGHT 4-up */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
          <div className="max-w-2xl mb-14">
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
              What to expect
            </div>
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 5.6vw, 64px)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                color: INK,
              }}
            >
              Four things happen{" "}
              <span
                style={{
                  color: ACCENT,
                  fontStyle: "italic",
                  fontFamily: "var(--font-display), 'Instrument Serif', serif",
                }}
              >
                on this call.
              </span>
            </h2>
          </div>

          <div className="h-px mb-14" style={{ background: "rgba(18,17,20,0.12)" }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {EXPECTATIONS.map((item) => (
              <div key={item.num}>
                <div
                  className="mb-5"
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 56,
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                    color: ACCENT,
                  }}
                >
                  {item.num}
                </div>
                <h3
                  className="uppercase mb-3"
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    lineHeight: 1.08,
                    letterSpacing: "-0.01em",
                    color: INK,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "rgba(18,17,20,0.68)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar + Direct contact — DARK */}
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

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: calendar */}
            <div className="lg:col-span-8">
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
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
                Book your slot
              </div>
              <h2
                className="uppercase mb-8"
                style={{
                  fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(36px, 5.2vw, 60px)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.02em",
                  color: CREAM,
                }}
              >
                Pick a time that{" "}
                <span
                  style={{
                    color: ACCENT,
                    fontStyle: "italic",
                    fontFamily: "var(--font-display), 'Instrument Serif', serif",
                  }}
                >
                  actually works.
                </span>
              </h2>

              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(252,255,213,0.12)",
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/servicegrowth-info/30min?hide_gdpr_banner=1&background_color=FFFFFF&text_color=121114&primary_color=FF6A00"
                  style={{ minWidth: "320px", height: "720px" }}
                />
                <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
              </div>
            </div>

            {/* Right: direct contact + stats */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Direct lines */}
              <div
                style={{
                  background: "#0F0E10",
                  border: "1px solid rgba(252,255,213,0.12)",
                  borderRadius: 14,
                  padding: 32,
                }}
              >
                <div
                  className="uppercase mb-5"
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    color: ACCENT,
                    fontWeight: 700,
                  }}
                >
                  Prefer direct?
                </div>

                <a
                  href="mailto:hello@servicegrowth.ai"
                  className="block mb-6 group"
                >
                  <div
                    className="uppercase mb-2"
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      color: "rgba(252,255,213,0.55)",
                      fontWeight: 500,
                    }}
                  >
                    Email
                  </div>
                  <div
                    className="group-hover:text-[#FF6A00] transition-colors"
                    style={{
                      fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      letterSpacing: "-0.01em",
                      color: CREAM,
                    }}
                  >
                    hello@servicegrowth.ai
                  </div>
                </a>

                <div className="h-px mb-6" style={{ background: "rgba(252,255,213,0.12)" }} />

                <a href="tel:+19044542240" className="block group">
                  <div
                    className="uppercase mb-2"
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      color: "rgba(252,255,213,0.55)",
                      fontWeight: 500,
                    }}
                  >
                    Phone
                  </div>
                  <div
                    className="group-hover:text-[#FF6A00] transition-colors"
                    style={{
                      fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 26,
                      letterSpacing: "-0.01em",
                      color: CREAM,
                    }}
                  >
                    (904) 454-2240
                  </div>
                </a>
              </div>

              {/* Stats */}
              <div>
                <div
                  className="uppercase mb-5"
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    color: "rgba(252,255,213,0.55)",
                    fontWeight: 500,
                  }}
                >
                  The numbers
                </div>
                <div className="space-y-4">
                  {STATS.map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between py-3" style={{ borderBottom: "1px solid rgba(252,255,213,0.1)" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                          fontWeight: 700,
                          fontSize: 28,
                          lineHeight: 1,
                          letterSpacing: "-0.02em",
                          color: ACCENT,
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        className="uppercase"
                        style={{
                          fontFamily: "var(--font-mono), ui-monospace, monospace",
                          fontSize: 10,
                          letterSpacing: "0.22em",
                          color: "rgba(252,255,213,0.6)",
                          fontWeight: 500,
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: "rgba(252,255,213,0.55)",
                }}
              >
                Discovery call — not a sales call. You leave with actionable insights whether you work with us or not.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
