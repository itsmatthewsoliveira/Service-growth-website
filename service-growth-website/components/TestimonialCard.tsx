"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-[#0F0E10]/8 rounded-xl p-8 shadow-sm"
    >
      <div className="text-[#D45800] text-4xl mb-4">&ldquo;</div>
      <p className="text-[#0F0E10] text-lg leading-relaxed mb-6 italic">
        {quote}
      </p>
      <div>
        <div className="text-[#0F0E10] font-semibold">{author}</div>
        <div className="text-[#7A766E] text-sm">{role}</div>
      </div>
    </motion.div>
  );
}
