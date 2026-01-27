"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface GlowCardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  delay?: number;
}

export default function GlowCard({
  children,
  href,
  className = "",
  delay = 0,
}: GlowCardProps) {
  const cardClasses = `bg-bg-card rounded-xl p-6 card-glow ${className}`;

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
