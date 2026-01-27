"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
    title: string;
    subtitle: string;
    children?: ReactNode;
    className?: string;
    contentClassName?: string;
}

export default function BentoCard({
    title,
    subtitle,
    children,
    className = "",
    contentClassName = "",
}: BentoCardProps) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-bg-card ${className}`}
        >
            {/* Content */}
            <div className={`p-6 sm:p-8 z-10 relative h-full flex flex-col ${contentClassName}`}>
                <h3 className="text-xl sm:text-2xl font-serif text-text-headline mb-2">
                    {title}
                </h3>
                <p className="text-sm font-medium text-text-muted leading-relaxed max-w-xs">
                    {subtitle}
                </p>

                {/* Render Children (Visuals) */}
                <div className="flex-grow mt-6 relative">
                    {children}
                </div>
            </div>

            {/* Background Gradient/Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            {/* Hover Border Glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-accent/20 transition-all duration-300 pointer-events-none" />
        </motion.div>
    );
}
