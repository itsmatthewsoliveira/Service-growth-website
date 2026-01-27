"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface IndustryCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  features: string[];
  delay?: number;
}

export default function IndustryCard({
  href,
  icon,
  title,
  subtitle,
  features,
  delay = 0,
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={href}
        className="block bg-bg-card border border-border rounded-xl p-8 card-glow group h-full"
      >
        <div className="text-4xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-text-headline mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-text-muted text-sm mb-4">{subtitle}</p>
        <ul className="text-sm text-text-body space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-accent">•</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="text-accent font-medium flex items-center gap-2 text-sm">
          Explore Solutions
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
