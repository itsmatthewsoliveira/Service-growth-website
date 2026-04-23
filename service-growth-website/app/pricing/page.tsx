"use client";

import Link from "next/link";
import { useState } from "react";
import PageHero from "@/components/sections/PageHero";
import ClosingCTA from "@/components/sections/ClosingCTA";

const ACCENT = "#FF6A00";
const INK = "#121114";
const CREAM = "#FCFFD5";

const PLANS = [
  {
    num: "01",
    name: "Launchpad",
    tagline: "Stop losing leads",
    price: "$1,497",
    period: "/mo",
    ideal: "Solo operators or small teams · $30k–$75k/mo",
    features: [
      "Missed-call text-back",
      "5 email/SMS automation sequences",
      "Lead capture forms",
      "CRM setup + integration",
      "Monthly performance report",
    ],
    featured: false,
  },
  {
    num: "02",
    name: "Growth Engine",
    tagline: "Scale without hiring",
    price: "$2,997",
    period: "/mo",
    ideal: "Businesses doing $75k–$250k/mo · ready to grow 30-50%",
    features: [
      "Everything in Launchpad",
      "AI lead automation — 24/7 capture, qualify, follow-up",
      "Voice chat bot — AI answers calls 24/7",
      "Unlimited email/SMS sequences",
      "Review automation",
      "Website included (or optimization)",
      "Bi-weekly strategy calls",
      "Priority support",
    ],
    featured: true,
    badge: "Most popular",
  },
  {
    num: "03",
    name: "Market Dominator",
    tagline: "Own your market",
    price: "$5,997",
    period: "/mo",
    ideal: "Businesses doing $250k+/mo · competing for premium jobs",
    features: [
      "Everything in Growth Engine",
      "Unlimited photo transformation",
      "2 × 3D renders per month",
      "Image animation for social",
      "Custom AI workflows",
      "Dedicated account manager",
      "Weekly strategy calls",
      "Competitor intelligence reports",
    ],
    featured: false,
  },
];

const FAQ = [
  {
    q: "Why is this more expensive than other AI agencies?",
    a: "Because we're not other AI agencies. We're not kids who watched a YouTube course — we scaled our own service business to $100k/month using these exact systems. You're paying for proven expertise, not experiments.",
  },
  {
    q: "What if it doesn't work for my business?",
    a: "If you don't see at least 15% more booked jobs within 60 days of going live, we work for free until you do — or refund your setup fee. We only win when you win.",
  },
  {
    q: "Can I start small and upgrade later?",
    a: "Absolutely. Most clients start with Launchpad to stop losing leads, then upgrade to Growth Engine once they see results. No long-term contracts — upgrade or cancel anytime.",
  },
  {
    q: "What's the setup process?",
    a: "We handle everything. You fill out a short questionnaire, we build and configure your systems, and you're live within 14 days. Total time from you: about 2 hours.",
  },
  {
    q: "Do I need to hire someone to manage this?",
    a: "No. That's the point. The AI handles the work, we handle the strategy. You focus on doing what you do best.",
  },
];

export default function PricingPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      {/* 1 · Hero — DARK, centered, no image (price pages benefit from center gravity) */}
      <PageHero
        eyebrow="Pricing"
        headlineLead="Straight talk"
        headlineAccent="on pricing."
        subhead="We're not the cheapest. We're the ones that actually work. Most clients invest $1,497–$6,000+/mo — typically 2–3 booked jobs pay for the whole system. No hidden fees. No lock-in."
        align="centered"
      />

      {/* 2 · Pricing tiers — WHITE, editorial 3-up */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {PLANS.map((p) => {
              const isDark = p.featured;
              return (
                <div
                  key={p.name}
                  className="relative flex flex-col"
                  style={{
                    padding: 36,
                    border: `1px solid ${isDark ? "rgba(252,255,213,0.12)" : "rgba(18,17,20,0.1)"}`,
                    background: isDark ? INK : "#FFFFFF",
                    color: isDark ? CREAM : INK,
                    borderRadius: 14,
                    transition: "transform 320ms cubic-bezier(.2,.7,.2,1), box-shadow 320ms",
                  }}
                >
                  {p.badge && (
                    <div
                      className="absolute -top-3 left-8 uppercase"
                      style={{
                        background: ACCENT,
                        color: INK,
                        padding: "4px 10px",
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        fontWeight: 700,
                        borderRadius: 4,
                      }}
                    >
                      {p.badge}
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="uppercase"
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: 11,
                        letterSpacing: "0.22em",
                        color: isDark ? "rgba(252,255,213,0.55)" : "rgba(18,17,20,0.5)",
                        fontWeight: 500,
                      }}
                    >
                      {p.num}
                    </span>
                    <span
                      className="uppercase"
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: 11,
                        letterSpacing: "0.22em",
                        color: ACCENT,
                        fontWeight: 700,
                      }}
                    >
                      {p.tagline}
                    </span>
                  </div>

                  <h3
                    className="uppercase mb-2"
                    style={{
                      fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 36,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      color: isDark ? CREAM : INK,
                    }}
                  >
                    {p.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mt-5 mb-3">
                    <span
                      style={{
                        fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                        fontWeight: 700,
                        fontSize: 52,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                        color: isDark ? CREAM : INK,
                      }}
                    >
                      {p.price}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontSize: 15,
                        color: isDark ? "rgba(252,255,213,0.6)" : "rgba(18,17,20,0.5)",
                      }}
                    >
                      {p.period}
                    </span>
                  </div>

                  <p
                    className="pb-6 mb-6"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: isDark ? "rgba(252,255,213,0.6)" : "rgba(18,17,20,0.55)",
                      borderBottom: `1px solid ${isDark ? "rgba(252,255,213,0.1)" : "rgba(18,17,20,0.1)"}`,
                    }}
                  >
                    {p.ideal}
                  </p>

                  <ul className="space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3"
                        style={{
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                          fontSize: 14,
                          lineHeight: 1.5,
                          color: isDark ? "rgba(252,255,213,0.85)" : "rgba(18,17,20,0.82)",
                        }}
                      >
                        <span
                          className="mt-[7px] flex-shrink-0"
                          style={{ width: 6, height: 6, background: ACCENT, borderRadius: 1 }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center justify-center gap-2 px-5 py-3.5 uppercase transition-colors"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 13,
                      letterSpacing: "0.08em",
                      fontWeight: 700,
                      background: isDark ? ACCENT : "transparent",
                      color: isDark ? INK : INK,
                      border: isDark ? "none" : `1.5px solid ${INK}`,
                      borderRadius: 4,
                    }}
                  >
                    Get started →
                  </Link>
                </div>
              );
            })}
          </div>

          <p
            className="mt-10 text-center"
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(18,17,20,0.5)",
              fontWeight: 500,
            }}
          >
            <span style={{ color: ACCENT }}>●</span>&nbsp;&nbsp;Setup fee waived on annual plans · No hidden
            fees
          </p>
        </div>
      </section>

      {/* 3 · Guarantee — DARK editorial strip */}
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
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-20 py-20 lg:py-24 text-center">
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
            Our guarantee
          </div>
          <h2
            className="uppercase mx-auto mb-6"
            style={{
              fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(42px, 6.2vw, 76px)",
              lineHeight: 0.96,
              letterSpacing: "-0.025em",
              color: CREAM,
              maxWidth: 900,
            }}
          >
            If it doesn&apos;t book jobs,{" "}
            <span
              style={{
                color: ACCENT,
                fontStyle: "italic",
                fontFamily: "var(--font-display), 'Instrument Serif', serif",
              }}
            >
              you don&apos;t pay.
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 17,
              lineHeight: 1.55,
              color: "rgba(252,255,213,0.72)",
            }}
          >
            15%+ more booked jobs in 60 days or we work free until you hit it. Simple.
          </p>
        </div>
      </section>

      {/* 4 · FAQ — LIGHT, accordion editorial */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[960px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
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
                Questions
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
                Good ones.{" "}
                <span
                  style={{
                    color: ACCENT,
                    fontStyle: "italic",
                    fontFamily: "var(--font-display), 'Instrument Serif', serif",
                  }}
                >
                  Real answers.
                </span>
              </h2>
            </div>
          </div>

          <div className="divide-y" style={{ borderColor: "rgba(18,17,20,0.1)" }}>
            {FAQ.map((item, i) => {
              const open = openIdx === i;
              return (
                <div key={item.q} style={{ borderBottom: "1px solid rgba(18,17,20,0.1)" }}>
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-7 text-left"
                  >
                    <span
                      className="uppercase"
                      style={{
                        fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                        fontWeight: 700,
                        fontSize: 22,
                        lineHeight: 1.15,
                        letterSpacing: "-0.01em",
                        color: INK,
                      }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="flex-shrink-0 transition-transform"
                      style={{
                        fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                        fontSize: 32,
                        lineHeight: 1,
                        color: ACCENT,
                        transform: open ? "rotate(45deg)" : "rotate(0)",
                        transition: "transform 220ms cubic-bezier(.2,.7,.2,1)",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {open && (
                    <p
                      className="pb-7 pr-10"
                      style={{
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontSize: 16,
                        lineHeight: 1.6,
                        color: "rgba(18,17,20,0.72)",
                        maxWidth: 720,
                      }}
                    >
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5 · Closing CTA */}
      <ClosingCTA />
    </>
  );
}
