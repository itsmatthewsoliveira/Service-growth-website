"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface GlowCardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  delay?: number;
  dark?: boolean;
}

export default function GlowCard({
  children,
  href,
  className = "",
  delay = 0,
  dark = false,
}: GlowCardProps) {
  const cardClasses = dark
    ? `bg-[rgba(245,240,232,0.02)] border border-[rgba(245,240,232,0.06)] rounded-xl p-6 card-glow-dark ${className}`
    : `bg-white border border-[#1A1A18]/8 rounded-xl p-6 shadow-sm card-glow ${className}`;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cardClasses}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
