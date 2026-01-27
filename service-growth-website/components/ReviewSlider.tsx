"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import ReviewCard from "./ReviewCard";

const reviews = [
    {
        category: "Customer Support",
        icon: (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
        ),
        tag: "Zendesk",
        description: "Issue on checkout, repro on Chrome attached, escalated to tier two.",
    },
    {
        category: "Designers",
        icon: (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
        ),
        tag: "Figma",
        description: "Participant hesitated at shipping options; copy unclear. Next step: Add tooltip task for the rates explanation.",
    },
    {
        category: "Educators",
        icon: (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z" />
            </svg>
        ),
        tag: "Notion",
        description: "Let's compare photosynthesis and respiration with a Venn diagram for shared and distinct inputs and outputs.",
    },
    {
        category: "Marketing",
        icon: (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.41 11.58l-9-5c-.75-.42-1.65-.42-2.4 0l-9 5c-.75.42-.75 1.58 0 2l9 5c.75.42 1.65.42 2.4 0l9-5c.75-.42.75-1.58 0-2zM12 16.14l-5.68-3.15 5.68-3.15 5.68 3.15L12 16.14z" />
            </svg>
        ),
        tag: "ClickUp",
        description: "Q3 campaign launch pushed to next Tuesday. Confirm final creative assets by EOD Friday.",
    }
];

export default function ReviewSlider() {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <div className="w-full relative group">
            {/* Gradient fade on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-bg-primary to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-bg-primary to-transparent pointer-events-none" />

            <motion.div
                ref={carousel}
                className="cursor-grab overflow-hidden"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-6 px-6"
                >
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            className="min-w-[300px] md:min-w-[350px]"
                        >
                            <ReviewCard {...review} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Navigation arrows (visual only, slider is draggable) */}
            <div className="flex justify-center mt-8 gap-3">
                <button className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-text-muted hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-text-muted hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
}
