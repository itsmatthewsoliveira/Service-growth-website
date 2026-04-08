"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import React from "react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  stars?: number;
}

const testimonials: Testimonial[] = [
  {
    text: "We were losing 30+ calls a week to voicemail. First month with ServiceGrowth, we booked 47 extra jobs without hiring anyone.",
    name: "Mike R.",
    role: "HVAC Company Owner",
    stars: 5,
  },
  {
    text: "The AI responds faster than any human could. Our close rate went from 22% to 41% in the first 60 days.",
    name: "Sarah T.",
    role: "Roofing Contractor",
    stars: 5,
  },
  {
    text: "I was skeptical about AI answering my phones. But honestly, customers don't even notice — they just love the instant response.",
    name: "James P.",
    role: "Plumbing Business Owner",
    stars: 5,
  },
  {
    text: "We went from 3 bookings a week to 3 a day. The missed call text-back alone paid for the entire system.",
    name: "Carlos M.",
    role: "Landscaping Company",
    stars: 5,
  },
  {
    text: "Finally, a marketing company that actually understands service businesses. These guys ran their own company first.",
    name: "David K.",
    role: "Electrician",
    stars: 5,
  },
  {
    text: "The 3D renders sold a $45K pool deck project. Client said it was the renders that convinced her husband.",
    name: "Angela W.",
    role: "Pool Contractor",
    stars: 5,
  },
  {
    text: "Month-to-month with real results. First agency I've worked with that doesn't lock you into a contract.",
    name: "Brian L.",
    role: "General Contractor",
    stars: 5,
  },
  {
    text: "Our Google reviews went from 23 to 147 in 4 months. The review automation is a game-changer.",
    name: "Lisa H.",
    role: "Dental Practice Owner",
    stars: 5,
  },
  {
    text: "I was spending $4K/month on a receptionist who missed calls. Now I spend less and never miss a lead.",
    name: "Tom G.",
    role: "HVAC Owner",
    stars: 5,
  },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <li className="p-8 rounded-2xl border border-white/10 bg-[#1E1E1C] shadow-lg shadow-black/10 max-w-xs w-full select-none">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.stars ?? 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-[#C2703A] fill-[#C2703A]" />
        ))}
      </div>
      <blockquote className="text-[#B8B3AA] leading-relaxed text-sm mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <footer className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#C2703A]/20 flex items-center justify-center text-[#C2703A] text-sm font-semibold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <cite className="not-italic font-medium text-sm text-[#F5F0E8]">
            {testimonial.name}
          </cite>
          <p className="text-xs text-[#7A766E] mt-0.5">{testimonial.role}</p>
        </div>
      </footer>
    </li>
  );
}

function MarqueeColumn({
  items,
  duration = 15,
  className = "",
}: {
  items: Testimonial[];
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[0, 1].map((copy) => (
          <React.Fragment key={copy}>
            {items.map((t, i) => (
              <TestimonialCard key={`${copy}-${i}`} testimonial={t} />
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
}

export default function TestimonialMarquee() {
  return (
    <section className="section-dark py-20 md:py-28 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-[#C2703A] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2703A] animate-pulse" />
            REAL RESULTS
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#F5F0E8] mb-4">
            Service Businesses That <span className="italic text-[#C2703A]">Grew</span>
          </h2>
          <p className="text-[#B8B3AA] text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what our clients have to say.
          </p>
        </motion.div>

        <div
          className="flex justify-center gap-6 max-h-[700px] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <MarqueeColumn items={col1} duration={18} />
          <MarqueeColumn items={col2} duration={22} className="hidden md:block" />
          <MarqueeColumn items={col3} duration={20} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
