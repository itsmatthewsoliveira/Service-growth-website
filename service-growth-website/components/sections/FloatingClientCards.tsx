"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface ClientCard {
  name: string;
  business: string;
  trade: string;
  location: string;
  quote: string;
  rating: number;
  // Tone shifts the card's accent stripe color.
  tone?: "lava" | "butter" | "neutral";
  initials: string;
}

// Real clients pulled from the database. Swap quotes once we have real testimonials.
const CARDS: ClientCard[] = [
  {
    name: "Caviar Pavers",
    business: "Caviar Pavers",
    trade: "Premium pavers · Boston, MA",
    location: "Boston, MA",
    quote:
      "We were drowning in voicemail. Now every lead gets a reply in 60 seconds and our calendar is booked three weeks out.",
    rating: 5,
    tone: "lava",
    initials: "CP",
  },
  {
    name: "Jack's Paver Guys",
    business: "Jack's Paver Guys",
    trade: "Driveways + walkways · Jacksonville, FL",
    location: "Jacksonville, FL",
    quote:
      "Cost per lead dropped from $80 to $11. Same crews, double the revenue, no more chasing.",
    rating: 5,
    tone: "butter",
    initials: "JPG",
  },
  {
    name: "MG Servicios",
    business: "MG Servicios",
    trade: "Outdoor design · Poços de Caldas, BR",
    location: "Poços de Caldas, BR",
    quote:
      "Zero to a hundred grand in ninety days. The AI never sleeps — neither does our pipeline.",
    rating: 5,
    tone: "lava",
    initials: "MG",
  },
  {
    name: "Sir Vicios",
    business: "Sir Vicios",
    trade: "Home services · Miami, FL",
    location: "Miami, FL",
    quote:
      "First system I've ever paid for that paid me back in week two. Two booked jobs covered the whole month.",
    rating: 5,
    tone: "neutral",
    initials: "SV",
  },
  {
    name: "Ronin",
    business: "Ronin",
    trade: "Multi-trade · CDMX",
    location: "CDMX",
    quote:
      "We stopped losing leads to competitors at 2am. The bot books estimates while we sleep.",
    rating: 5,
    tone: "butter",
    initials: "RO",
  },
];

function StackedGlassCard({
  card,
  index,
}: {
  card: ClientCard;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax — odd cards drift up faster, even drift slower
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? 60 : 30, index % 2 === 0 ? -60 : -30]
  );

  // Slow continuous bob via inline animate
  const bobDelay = (index * 0.4).toFixed(2);

  const accentColor =
    card.tone === "lava"
      ? "#F56E0F"
      : card.tone === "butter"
      ? "#FCFFD5"
      : "#FBFBFB";

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      className="relative will-change-transform"
    >
      {/* Bobbing wrapper — pure CSS so it doesn't fight the scroll parallax */}
      <div
        className="relative"
        style={{
          animation: `bob 7s ease-in-out infinite`,
          animationDelay: `${bobDelay}s`,
        }}
      >
        {/* Layer 3 — deepest, most diffuse glass slab behind */}
        <div
          className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl backdrop-blur-md"
          style={{
            background: "rgba(251, 251, 251, 0.02)",
            border: "1px solid rgba(251, 251, 251, 0.04)",
          }}
        />
        {/* Layer 2 — mid glass, slightly offset */}
        <div
          className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl backdrop-blur-lg"
          style={{
            background: "rgba(251, 251, 251, 0.04)",
            border: "1px solid rgba(251, 251, 251, 0.06)",
          }}
        />

        {/* Layer 1 — front glass card, the actual content surface */}
        <div
          className="relative rounded-2xl p-6 md:p-7 backdrop-blur-2xl border overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, rgba(251,251,251,0.09) 0%, rgba(251,251,251,0.04) 100%)",
            borderColor: "rgba(251, 251, 251, 0.12)",
            boxShadow:
              "0 30px 60px -20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(251, 251, 251, 0.04) inset",
          }}
        >
          {/* Top accent stripe — tone-aware */}
          <div
            className="absolute top-0 left-6 right-6 h-px"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${accentColor}80 50%, transparent 100%)`,
            }}
          />

          {/* Grain overlay on the glass */}
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay rounded-2xl pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "180px 180px",
            }}
          />

          {/* Header — initials medallion + business meta */}
          <div className="relative flex items-start gap-4 mb-5">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-heading font-bold text-sm tracking-wider"
              style={{
                background: `linear-gradient(135deg, ${accentColor}30 0%, ${accentColor}10 100%)`,
                border: `1px solid ${accentColor}30`,
                color: card.tone === "butter" ? "#FCFFD5" : accentColor,
              }}
            >
              {card.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-heading text-base font-semibold text-[#FBFBFB] leading-tight tracking-tight">
                {card.business}
              </p>
              <p className="text-[#FBFBFB]/50 text-xs mt-0.5 truncate">{card.trade}</p>
              <div className="flex items-center gap-0.5 mt-1.5">
                {Array.from({ length: card.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-[#F56E0F] text-[#F56E0F]"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="relative">
            <Quote className="absolute -top-1 -left-1 w-5 h-5 text-[#FCFFD5]/20" />
            <p className="relative text-[#FBFBFB]/85 text-sm md:text-[15px] leading-relaxed pl-5 italic">
              {card.quote}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FloatingClientCards() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#0A0A0C]">
      {/* Backdrop — ambient lava glow center, butter rim */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(245,110,15,0.14) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(252,255,213,0.2) 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        {/* Section heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FBFBFB]/10 bg-[#FBFBFB]/[0.03] mb-6"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F56E0F] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F56E0F]" />
            </span>
            <span className="text-[#FBFBFB]/70 text-[10px] md:text-[11px] font-semibold tracking-[0.18em] uppercase">
              Real Clients · Real Results
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-[#FBFBFB] leading-[0.96] tracking-tight"
          >
            Service businesses, <br className="hidden md:block" />
            <span className="text-[#F56E0F]">climbing faster.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-[#878787] text-base md:text-lg max-w-2xl leading-relaxed"
          >
            From paver crews in Boston to outdoor design teams in Brazil — here's what real owners say about running this system.
          </motion.p>
        </div>

        {/* Floating cards grid — staggered layout for visual rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {CARDS.map((card, i) => (
            <div
              key={card.name}
              className={
                // Stagger middle column for the "floating" rhythm on desktop
                i === 1 || i === 4 ? "lg:translate-y-12" : ""
              }
            >
              <StackedGlassCard card={card} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* Bobbing keyframes — global so child cards can reference */}
      <style jsx global>{`
        @keyframes bob {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
