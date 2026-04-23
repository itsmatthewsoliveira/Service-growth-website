"use client";

import Link from "next/link";

const ACCENT = "#FF6A00";
const INK = "#121114";

export default function ClosingCTA() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#FFFFFF", color: INK }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Headline — cols 1-8 */}
          <div className="lg:col-span-8">
            <div
              className="inline-flex items-center gap-2.5 uppercase mb-8"
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.18em",
                color: INK,
                fontWeight: 500,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Your move
            </div>
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(52px, 9vw, 120px)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: INK,
              }}
            >
              Your competitor is{" "}
              <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
                already doing this.
              </span>
            </h2>
          </div>

          {/* Right rail — cols 9-12 */}
          <div className="lg:col-span-4 lg:pb-4">
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 17,
                lineHeight: 1.55,
                color: "rgba(18,17,20,0.7)",
              }}
            >
              Every day you wait, leads go to a competitor&apos;s voicemail instead of yours. Book a free 25-minute audit — we&apos;ll show you exactly where money is falling through the cracks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/growth-blueprint"
                className="group inline-flex items-center gap-3 px-7 py-4 font-bold uppercase transition-colors"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  background: INK,
                  color: "#FCFFD5",
                  borderRadius: 4,
                }}
              >
                Book a demo
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>

              <Link
                href="/how-it-works"
                className="group inline-flex items-center gap-3 px-7 py-4 font-bold uppercase transition-colors hover:bg-[#121114]/5"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  color: INK,
                  border: `1.5px solid ${INK}`,
                  borderRadius: 4,
                }}
              >
                See how it works
              </Link>
            </div>

            <div
              className="mt-10 pt-6 border-t flex items-center gap-2"
              style={{
                borderColor: "rgba(18,17,20,0.12)",
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 11,
                letterSpacing: "0.18em",
                color: "rgba(18,17,20,0.55)",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              <span style={{ width: 6, height: 6, background: ACCENT, borderRadius: 999 }} />
              Free · 25 minutes · No obligation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
