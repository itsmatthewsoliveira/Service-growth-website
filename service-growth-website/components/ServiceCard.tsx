"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  href,
  icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={href}
        className="block bg-bg-card border border-border rounded-xl p-6 card-glow group"
      >
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-text-headline mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-text-body text-sm">{description}</p>
        <div className="mt-4 text-accent text-sm font-medium flex items-center gap-2">
          Learn more
          <motion.span
            className="inline-block"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
}
