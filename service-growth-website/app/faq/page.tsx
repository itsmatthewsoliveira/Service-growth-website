"use client";

import { useState } from "react";
import PageHero from "@/components/sections/PageHero";
import ClosingCTA from "@/components/sections/ClosingCTA";

const ACCENT = "#FF6A00";
const INK = "#121114";

const SECTIONS = [
  {
    title: "General",
    items: [
      {
        q: 'What exactly does "AI automation" do for my business?',
        a: "It responds to leads instantly, follows up automatically, books appointments, and handles repetitive tasks — 24/7, without hiring anyone. Think of it as a tireless employee that handles all the communication grunt work so your team can focus on closing deals.",
      },
      {
        q: "Is this going to replace my staff?",
        a: "No. It handles the grunt work so your team can focus on closing deals and doing great work. Most clients don't fire anyone — they just stop needing to hire the next person.",
      },
      {
        q: "How is this different from other AI companies?",
        a: "We built this for ourselves first. We scaled our own service business to $100k/month using these systems before we ever offered them to clients. Most \"AI agencies\" just resell white-label tools. We know what works because we've done it.",
      },
      {
        q: "What if my customers don't want to talk to a bot?",
        a: "Most don't even notice. Our AI is conversational and natural. Customers prefer an instant response over waiting 3 hours for a human to call back. Speed beats everything. The bot books the appointment, then your human team takes over.",
      },
    ],
  },
  {
    title: "Setup + process",
    items: [
      {
        q: "How long does it take to set up?",
        a: "14 days from signed agreement to live. We handle everything — you just fill out a questionnaire (30 min) and show up for a couple of calls. Total time investment from you: about 2 hours.",
      },
      {
        q: "Do I need to change my CRM or phone system?",
        a: "Usually not. We integrate with most major systems (GHL, HubSpot, Jobber, ServiceTitan, Housecall Pro, etc.). If you don't have a CRM, we'll set one up for you.",
      },
      {
        q: "Do I need to hire someone to manage this?",
        a: "No. That's the point. The AI handles the work, we handle the strategy. You just focus on doing what you do best.",
      },
    ],
  },
  {
    title: "Pricing + results",
    items: [
      {
        q: "How much does it cost?",
        a: "Our solutions typically range from $1,497 to $6,000+/month depending on your size, goals, and what you need built. Every system is custom — book a call to get your specific quote.",
      },
      {
        q: "What if it doesn't work for my business?",
        a: "We guarantee results. If you don't see at least 15% more booked jobs within 60 days, we work for free until you do — or refund your setup fee.",
      },
      {
        q: "Are there any long-term contracts?",
        a: "No. Month-to-month. We earn your business every month. If you're not seeing results, you can cancel anytime.",
      },
    ],
  },
  {
    title: "Industry-specific",
    items: [
      {
        q: "Do you work with businesses in my area?",
        a: "We work with service businesses across the US. Everything is done remotely. As long as you're in home services, medical, or construction, we can help.",
      },
      {
        q: "Is this HIPAA compliant? (For medical businesses)",
        a: "Yes. We use HIPAA-compliant systems and sign BAAs. Your patient data is protected top to bottom.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(18,17,20,0.1)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left"
      >
        <span
          className="uppercase"
          style={{
            fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: INK,
          }}
        >
          {q}
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
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        headlineLead="Questions we hear"
        headlineAccent="every week."
        subhead="Straight answers. No fine print. If yours isn't here, book a 15-minute call and we'll answer directly."
        primaryCta={{ label: "Book a call", href: "/growth-blueprint" }}
        align="centered"
      />

      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[960px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
          {SECTIONS.map((section, si) => (
            <div key={section.title} className={si > 0 ? "mt-20" : ""}>
              <h2
                className="uppercase mb-6"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 13,
                  letterSpacing: "0.22em",
                  fontWeight: 700,
                  color: ACCENT,
                }}
              >
                <span className="mr-3" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 20, color: INK, opacity: 0.4 }}>
                  {String(si + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              <div>
                {section.items.map((item, i) => (
                  <AccordionItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
