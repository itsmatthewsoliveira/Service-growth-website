"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ACCENT = "#FF6A00";
const CREAM = "#FCFFD5";
const INK = "#121114";

export interface PageHeroProps {
  eyebrow: string;
  headlineLead: string; // text before the italic accent
  headlineAccent: string; // italic orange accent text
  headlineTrail?: string; // optional text after the accent
  subhead: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string; // path to anime art placeholder — user will swap
  imageAlt?: string;
  eyebrowIcon?: "dot" | "square"; // small variation
  align?: "split" | "centered"; // split = image right; centered = no image
}

export default function PageHero({
  eyebrow,
  headlineLead,
  headlineAccent,
  headlineTrail = "",
  subhead,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "Editorial hero artwork",
  eyebrowIcon = "dot",
  align = "split",
}: PageHeroProps) {
  const hasImage = align === "split" && image;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: INK, color: CREAM, minHeight: "min(840px, 100vh)" }}
    >
      {/* Grain */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.08,
          mixBlendMode: "multiply",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 pt-28 lg:pt-32 pb-16 lg:pb-24">
        <div className={hasImage ? "grid lg:grid-cols-12 gap-8 lg:gap-8 items-start" : "flex justify-center"}>
          {/* Copy column */}
          <motion.div
            className={hasImage ? "lg:col-span-7 lg:pt-6" : "max-w-3xl text-center"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-2.5 uppercase ${align === "centered" ? "mx-auto" : ""}`}
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.18em",
                color: CREAM,
                fontWeight: 500,
              }}
            >
              {eyebrowIcon === "dot" ? (
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              ) : (
                <span className="w-2 h-2" style={{ background: ACCENT }} />
              )}
              {eyebrow}
            </div>

            {/* Headline */}
            <h1
              className="mt-6 uppercase"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(42px, 6.8vw, 80px)",
                lineHeight: 0.96,
                letterSpacing: "-0.025em",
                color: CREAM,
              }}
            >
              {headlineLead}{" "}
              <span
                style={{
                  color: ACCENT,
                  fontStyle: "italic",
                  fontFamily: "var(--font-display), 'Instrument Serif', serif",
                }}
              >
                {headlineAccent}
              </span>
              {headlineTrail && <> {headlineTrail}</>}
            </h1>

            {/* Subhead */}
            <p
              className={`mt-7 ${align === "centered" ? "mx-auto" : ""}`}
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 17,
                lineHeight: 1.55,
                color: CREAM,
                opacity: 0.78,
                maxWidth: 560,
              }}
            >
              {subhead}
            </p>

            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <div className={`mt-9 flex items-center gap-4 flex-wrap ${align === "centered" ? "justify-center" : ""}`}>
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="group inline-flex items-center gap-3 px-6 py-4 font-bold uppercase transition-colors hover:bg-[#FCFFD5]/10"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 14,
                      letterSpacing: "0.08em",
                      color: CREAM,
                      border: `1.5px solid ${CREAM}`,
                      borderRadius: 4,
                    }}
                  >
                    {primaryCta.label}
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="group inline-flex items-center gap-2.5 font-semibold"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 14,
                      color: CREAM,
                    }}
                  >
                    <span
                      className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-full border transition-colors group-hover:bg-[#FF6A00]/20"
                      style={{ borderColor: `${CREAM}E6` }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 1 L8 5 L2 9 Z" fill={CREAM} />
                      </svg>
                    </span>
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </motion.div>

          {/* Image column (split layout only) */}
          {hasImage && (
            <div className="lg:col-span-5 relative w-full">
              <div
                className="relative overflow-hidden w-full"
                style={{
                  borderRadius: "14px 0 0 14px",
                  aspectRatio: "4 / 5",
                  maxHeight: "min(680px, 75vh)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                  background: INK,
                }}
              >
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                  style={{ filter: "contrast(1.1) brightness(0.95)" }}
                />
                {/* Gradient tint */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(18,17,20,0) 55%, rgba(18,17,20,0.5) 100%)",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
