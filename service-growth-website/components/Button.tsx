"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "glass" | "glass-dark";
  size?: "default" | "lg" | "sm";
  className?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  fullWidth = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full";

  const variantStyles = {
    primary:
      "bg-[#E25312] text-[#FCFFD5] hover:bg-[#F0712E] btn-glow font-semibold",
    secondary:
      "bg-white/50 text-[#1D1C1A] border border-black/10 hover:border-[#E25312]/50 hover:bg-white/70 backdrop-blur-sm",
    ghost:
      "text-[#E25312] hover:text-[#F0712E] bg-transparent",
    glass:
      "btn-glass",
    "glass-dark":
      "btn-glass-dark",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  const MotionComponent = href ? motion.create(Link) : motion.button;

  return (
    <MotionComponent
      href={href as string}
      type={href ? undefined : type}
      className={classes}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
