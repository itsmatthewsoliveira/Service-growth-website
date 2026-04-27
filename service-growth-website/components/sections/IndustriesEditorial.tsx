"use client";

import Link from "next/link";

const ACCENT = "#E25312";
const INK = "#10100F";

const INDUSTRIES = [
  {
    num: "01",
    href: "/industries/construction",
    tag: "CONSTRUCTION",
    title: "Pavers, GCs, builders, architects",
    sub: "Custom growth strategies for pavers, builders, architects, and construction teams selling high-ticket work.",
    features: [
      "Speed-to-lead AI (<60s)",
      "Before/after photo magic",
      "3D renders + mood boards",
      "Yelp $600 ad credit",
    ],
    image: "/industry-construction-ai.webp",
    position: "62% center",
  },
  {
    num: "02",
    href: "/industries/home-services",
    tag: "HOME SERVICES",
    title: "Roofing, HVAC, plumbing, landscaping",
    sub: "24/7 AI answers every call and books estimates so you never lose another emergency lead to voicemail.",
    features: [
      "AI booking, 24/7",
      "Missed-call text-back",
      "Review automation",
      "Dispatch-ready CRM",
    ],
    image: "/growth-collab.webp", // placeholder — user will swap
    position: "center 30%",
  },
  {
    num: "03",
    href: "/industries/medical",
    tag: "MEDICAL",
    title: "Dentists, chiropractors, med spas",
    sub: "Fill your chair and keep it full. HIPAA-compliant patient reactivation, reminders, and review flywheel.",
    features: [
      "Appointment reminders",
      "Patient reactivation",
      "HIPAA compliant stack",
      "Insurance-aware intake",
    ],
    image: "/industry-medical-ai.webp",
    position: "center center",
  },
  {
    num: "04",
    href: "/contact",
    tag: "LEGAL",
    title: "Lawyers, firms, professional services",
    sub: "Intake, lead response, review proof, and follow-up systems for service-based expert businesses.",
    features: [
      "AI intake routing",
      "Consultation follow-up",
      "Review + referral loops",
      "Local trust campaigns",
    ],
    image: "/professional-services-ai.webp",
    position: "center center",
  },
  {
    num: "05",
    href: "/contact",
    tag: "LOCAL EXPERTS",
    title: "Tax experts, consultants, real businesses",
    sub: "For businesses where trust, speed, and clear communication turn demand into booked appointments.",
    features: [
      "Email autosenders",
      "Google + Yelp strategy",
      "Facebook + Nextdoor campaigns",
      "Custom AI workflows",
    ],
    image: "/growth-collab.webp",
    position: "center 35%",
  },
];

function ImageSlot({ src, alt, position = "center" }: { src: string; alt: string; position?: string }) {
  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        aspectRatio: "4 / 5",
        background: INK,
        border: `1px solid rgba(16,16,15,0.08)`,
        borderRadius: 6,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "contrast(1.05) brightness(0.92)", objectPosition: position }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(16,16,15,0) 40%, rgba(16,16,15,0.55) 100%)",
        }}
      />
    </div>
  );
}

export default function IndustriesEditorial() {
  return (
    <section
      className="relative w-full"
      style={{ background: "#FFFFFF", color: INK }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2.5 uppercase mb-6"
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.18em",
                color: INK,
                fontWeight: 500,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Who we build for
            </div>
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(42px, 6.8vw, 84px)",
                lineHeight: 0.96,
                letterSpacing: "-0.025em",
                color: INK,
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
              color: "rgba(16,16,15,0.62)",
            }}
          >
            We don&apos;t sell generic agency packages. Every stack is calibrated to the rhythm, channels, and sales cycle of the business it powers.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px mb-16" style={{ background: "rgba(16,16,15,0.12)" }} />

        {/* Cards — 3-up grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.num}
              href={ind.href}
              className="group flex flex-col"
            >
              <ImageSlot src={ind.image} alt={ind.title} position={ind.position} />

              <div
                className="mt-6 flex items-center justify-between"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  color: "rgba(16,16,15,0.6)",
                  fontWeight: 500,
                }}
              >
                <span>{ind.tag}</span>
                <span
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    color: INK,
                    opacity: 0.4,
                  }}
                >
                  {ind.num}
                </span>
              </div>

              <h3
                className="uppercase mt-4"
                style={{
                  fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: 28,
                  lineHeight: 1.04,
                  letterSpacing: "-0.015em",
                  color: INK,
                }}
              >
                {ind.title}
              </h3>

              <p
                className="mt-4"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "rgba(16,16,15,0.7)",
                }}
              >
                {ind.sub}
              </p>

              <ul className="mt-6 space-y-2">
                {ind.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 14,
                      lineHeight: 1.45,
                      color: "rgba(16,16,15,0.78)",
                    }}
                  >
                    <span
                      className="mt-[7px] flex-shrink-0"
                      style={{ width: 8, height: 8, background: ACCENT, borderRadius: 1 }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div
                className="mt-8 inline-flex items-center gap-2.5 self-start uppercase pb-1"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  fontWeight: 700,
                  color: INK,
                  borderBottom: `1.5px solid ${INK}`,
                  transition: "color 200ms, border-color 200ms",
                }}
              >
                Explore
                <span className="group-hover:translate-x-1 transition-transform" style={{ color: ACCENT }}>
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
