"use client";

import { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

export default function SectionWrapper({
  children,
  className = "",
  delay = 0,
  style,
}: SectionWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}
