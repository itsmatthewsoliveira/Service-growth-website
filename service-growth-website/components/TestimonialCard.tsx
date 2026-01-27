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
      className="bg-bg-card border border-border rounded-xl p-8"
    >
      <div className="text-accent text-4xl mb-4">&ldquo;</div>
      <p className="text-text-headline text-lg leading-relaxed mb-6 italic">
        {quote}
      </p>
      <div>
        <div className="text-text-headline font-semibold">{author}</div>
        <div className="text-text-muted text-sm">{role}</div>
      </div>
    </motion.div>
  );
}
