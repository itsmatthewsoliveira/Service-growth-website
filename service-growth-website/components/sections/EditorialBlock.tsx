"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ACCENT = "#FF6A00";
const CREAM = "#FCFFD5";
const INK = "#121114";

export interface EditorialBlockProps {
  theme?: "light" | "dark"; // light = white bg, dark = ink bg
  num?: string; // "01", "02", etc
  eyebrow: string;
  headlineLead: string;
  headlineAccent?: string; // italic orange accent
  headlineTrail?: string;
  body: string;
  bullets?: string[];
  cta?: { label: string; href: string };
  image?: string; // placeholder path
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

export default function EditorialBlock({
  theme = "light",
  num,
  eyebrow,
  headlineLead,
  headlineAccent,
  headlineTrail = "",
  body,
  bullets = [],
  cta,
  image,
  imageAlt = "Editorial artwork placeholder",
  imagePosition = "right",
}: EditorialBlockProps) {
  const isDark = theme === "dark";
  const bg = isDark ? INK : "#FFFFFF";
  const fg = isDark ? CREAM : INK;
  const body_color = isDark ? "rgba(252,255,213,0.7)" : "rgba(18,17,20,0.7)";
  const line = isDark ? "rgba(252,255,213,0.14)" : "rgba(18,17,20,0.12)";
  const muted = isDark ? "rgba(252,255,213,0.6)" : "rgba(18,17,20,0.6)";

  const imageLeft = imagePosition === "left";
  const hasImage = Boolean(image);

  return (
    <section className="relative w-full overflow-hidden" style={{ background: bg, color: fg }}>
      {/* Subtle grain on dark only */}
      {isDark && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            mixBlendMode: "multiply",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
      )}

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          {hasImage && (
            <div className={`lg:col-span-6 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
              <div
                className="relative overflow-hidden w-full"
                style={{
                  aspectRatio: "4 / 5",
                  maxHeight: "min(640px, 72vh)",
                  background: isDark ? "#0F0E10" : "#F5F5F0",
                  border: `1px solid ${line}`,
                  borderRadius: 8,
                }}
              >
                <img
                  src={image}
                  alt={imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: isDark ? "contrast(1.05) brightness(0.92)" : "contrast(1.02)" }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: isDark
                      ? "linear-gradient(180deg, rgba(18,17,20,0) 50%, rgba(18,17,20,0.55) 100%)"
                      : "linear-gradient(180deg, rgba(18,17,20,0) 70%, rgba(18,17,20,0.15) 100%)",
                  }}
                />
              </div>
            </div>
          )}

          {/* Copy */}
          <div
            className={`${hasImage ? "lg:col-span-6" : "lg:col-span-12 max-w-3xl mx-auto"} ${
              hasImage && imageLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {/* Number + eyebrow */}
            <div className="flex items-center justify-between mb-5">
              <div
                className="inline-flex items-center gap-2.5 uppercase"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 12,
                  letterSpacing: "0.22em",
                  color: fg,
                  fontWeight: 500,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                {eyebrow}
              </div>
              {num && (
                <span
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 36,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: fg,
                    opacity: 0.3,
                  }}
                >
                  {num}
                </span>
              )}
            </div>

            {/* Headline */}
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 5.2vw, 64px)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                color: fg,
              }}
            >
              {headlineLead}
              {headlineAccent && (
                <>
                  {" "}
                  <span
                    style={{
                      color: ACCENT,
                      fontStyle: "italic",
                      fontFamily: "var(--font-display), 'Instrument Serif', serif",
                    }}
                  >
                    {headlineAccent}
                  </span>
                </>
              )}
              {headlineTrail && <> {headlineTrail}</>}
            </h2>

            {/* Body */}
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 17,
                lineHeight: 1.55,
                color: body_color,
                maxWidth: 560,
              }}
            >
              {body}
            </p>

            {/* Bullets */}
            {bullets.length > 0 && (
              <ul className="mt-8 space-y-3 max-w-xl">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: isDark ? CREAM : INK,
                      opacity: isDark ? 0.85 : 0.88,
                    }}
                  >
                    <span
                      className="mt-[8px] flex-shrink-0"
                      style={{ width: 8, height: 8, background: ACCENT, borderRadius: 1 }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            {cta && (
              <Link
                href={cta.href}
                className="group mt-10 inline-flex items-center gap-2.5 self-start uppercase pb-1"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  fontWeight: 700,
                  color: fg,
                  borderBottom: `1.5px solid ${fg}`,
                }}
              >
                {cta.label}
                <span className="group-hover:translate-x-1 transition-transform" style={{ color: ACCENT }}>
                  →
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom divider on light */}
      {!isDark && <div className="h-px" style={{ background: line, margin: "0 max(24px, 5vw)" }} />}
    </section>
  );
}
