"use client";

const ACCENT = "#E25312";
const INK = "#10100F";
const CREAM = "#FCFFD5";
const FG_RGB = "252,255,213";
const tone = (a: number) => `rgba(${FG_RGB}, ${a})`;

const STATS = [
  { value: "200+", label: "Service businesses scaled" },
  { value: "$5M+", label: "Client revenue generated" },
  { value: "142K", label: "Leads answered in <8s" },
  { value: "60s", label: "Avg. response time, 24/7" },
];

const QUOTES = [
  {
    quote: "Booked out six weeks in advance. The AI books while I'm on a roof.",
    name: "Daniel K.",
    role: "Owner · Summit Roofing",
  },
  {
    quote: "Quadrupled our estimate calls in the first month. No exaggeration.",
    name: "Maria S.",
    role: "Founder · Sierra Landscapes",
  },
  {
    quote: "Finally an agency that runs its own playbook before selling it.",
    name: "Jordan P.",
    role: "GM · Peak HVAC",
  },
  {
    quote: "The reviews flywheel alone paid for the whole system in 3 weeks.",
    name: "Chris R.",
    role: "Owner · Reliable Paver Co.",
  },
];

function QuoteTrack() {
  const items = [...QUOTES, ...QUOTES]; // duplicate for seamless loop
  return (
    <div
      className="flex shrink-0"
      style={{ animation: "sg-proof-marquee 48s linear infinite", width: "max-content" }}
    >
      {items.map((q, i) => (
        <div
          key={i}
          className="flex flex-col justify-between mr-8"
          style={{
            width: 380,
            padding: "28px 28px 24px",
            border: `1px solid ${tone(0.1)}`,
            background: tone(0.02),
            borderRadius: 10,
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display), 'Instrument Serif', serif",
              fontSize: 22,
              lineHeight: 1.3,
              color: CREAM,
              margin: 0,
              fontStyle: "italic",
              letterSpacing: "-0.005em",
            }}
          >
            &ldquo;{q.quote}&rdquo;
          </p>
          <div
            className="mt-6 flex items-center gap-3"
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ width: 6, height: 6, background: ACCENT, borderRadius: 1 }} />
            <span style={{ color: CREAM, fontWeight: 600 }}>{q.name}</span>
            <span style={{ color: tone(0.45) }}>·</span>
            <span style={{ color: tone(0.6) }}>{q.role}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProofStrip() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: INK, color: CREAM }}
    >
      {/* Grain */}
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

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 pt-24 lg:pt-28 pb-20 lg:pb-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2.5 uppercase mb-6"
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.18em",
                color: CREAM,
                fontWeight: 500,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              The numbers
            </div>
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(42px, 6.8vw, 84px)",
                lineHeight: 0.96,
                letterSpacing: "-0.025em",
                color: CREAM,
              }}
            >
              Real businesses.{" "}
              <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
                Real growth.
              </span>
            </h2>
          </div>
          <p
            className="max-w-md"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 16,
              lineHeight: 1.55,
              color: tone(0.65),
            }}
          >
            Not case-study theatre. These are the week-over-week numbers our clients pull out of the same systems we&apos;re selling you.
          </p>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-0"
          style={{
            borderTop: `1px solid ${tone(0.14)}`,
            borderBottom: `1px solid ${tone(0.14)}`,
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="py-10 lg:py-14 px-6"
              style={{
                borderRight: i < STATS.length - 1 ? `1px solid ${tone(0.14)}` : undefined,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(48px, 5.4vw, 72px)",
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
                  color: tone(0.65),
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials marquee */}
        <div className="mt-16 lg:mt-20 overflow-hidden sg-proof-marquee-wrap">
          <QuoteTrack />
        </div>

        <style>{`
          @keyframes sg-proof-marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .sg-proof-marquee-wrap:hover > div { animation-play-state: paused; }
          @media (prefers-reduced-motion: reduce) {
            .sg-proof-marquee-wrap > div { animation: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
