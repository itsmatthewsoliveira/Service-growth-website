"use client";

/**
 * Ethereal Shadow background.
 *
 * Drop inside a `relative` parent. Renders behind everything as 3 stacked layers:
 *   1. Slow-drifting radial gradients (lava + butter) — the "shadow" effect
 *   2. Conic sweep — adds the ethereal motion sense
 *   3. Grain noise — kills the AI-slop smoothness
 *
 * Tune `intensity` to dial how present the effect is (0.4 = whisper, 1.2 = loud).
 */

interface EtherealShadowProps {
  intensity?: number;
  // Tone shifts the dominant accent. "lava" = orange-led, "butter" = yellow-led, "mixed" = both equal.
  tone?: "lava" | "butter" | "mixed";
  className?: string;
}

export default function EtherealShadow({
  intensity = 1,
  tone = "mixed",
  className = "",
}: EtherealShadowProps) {
  const lavaA = 0.18 * intensity;
  const lavaB = 0.12 * intensity;
  const butterA = 0.10 * intensity;
  const butterB = 0.06 * intensity;

  const lavaWeight = tone === "butter" ? 0.4 : 1;
  const butterWeight = tone === "lava" ? 0.4 : 1;

  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Layer 1 — slow-drifting blobs */}
      <div
        className="absolute inset-0 ethereal-drift"
        style={{
          background: `
            radial-gradient(60% 50% at 20% 30%, rgba(245,110,15,${lavaA * lavaWeight}) 0%, transparent 60%),
            radial-gradient(50% 40% at 75% 20%, rgba(252,255,213,${butterA * butterWeight}) 0%, transparent 65%),
            radial-gradient(70% 55% at 80% 80%, rgba(245,110,15,${lavaB * lavaWeight}) 0%, transparent 60%),
            radial-gradient(45% 35% at 30% 75%, rgba(252,255,213,${butterB * butterWeight}) 0%, transparent 65%)
          `,
          filter: "blur(40px)",
        }}
      />

      {/* Layer 2 — conic sweep, very slow rotation */}
      <div
        className="absolute -inset-[20%] ethereal-rotate opacity-40"
        style={{
          background: `conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            rgba(245,110,15,${0.05 * intensity}) 60deg,
            transparent 120deg,
            rgba(252,255,213,${0.04 * intensity}) 200deg,
            transparent 280deg,
            rgba(245,110,15,${0.04 * intensity}) 340deg,
            transparent 360deg
          )`,
          filter: "blur(80px)",
        }}
      />

      {/* Layer 3 — grain noise, kills smoothness */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.18]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <style jsx>{`
        .ethereal-drift {
          animation: drift 22s ease-in-out infinite alternate;
        }
        .ethereal-rotate {
          animation: rotate 60s linear infinite;
        }
        @keyframes drift {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(2%, -1.5%, 0) scale(1.05);
          }
          100% {
            transform: translate3d(-1.5%, 2%, 0) scale(1.02);
          }
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
