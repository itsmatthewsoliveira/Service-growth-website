"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface ReviewCardProps {
    category: string;
    icon: ReactNode;
    tag: string;
    description: string;
    className?: string;
}

export default function ReviewCard({
    category,
    icon,
    tag,
    description,
    className = "",
}: ReviewCardProps) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl border border-white/5 bg-bg-card p-4 sm:p-5 ${className}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="tex-xl md:text-2xl font-serif text-text-headline">
                    {category}
                </h3>
            </div>

            {/* Inset Content Box */}
            <div className="rounded-xl bg-bg-field border border-white/5 p-5 relative overflow-hidden group">
                {/* Top bar of the inset */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-text-muted">
                        {icon}
                        <span>{tag}</span>
                    </div>
                </div>

                {/* Text Area */}
                <p className="text-text-body text-sm leading-relaxed min-h-[80px]">
                    {description}
                </p>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent hover:ring-accent/20 transition-all pointer-events-none" />
        </div>
    );
}
