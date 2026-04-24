"use client";

import { useState } from "react";

const INK = "#121114";
const INK_CARD = "#0F0E10";
const CREAM = "#FCFFD5";
const ACCENT = "#FF6A00";
const FG_RGB = "252,255,213";
const tone = (a: number) => `rgba(${FG_RGB}, ${a})`;

// Monoline icon set — editorial pictograms
function MonoIcon({ name, size = 20 }: { name: "phone" | "camera" | "globe" | "chart"; size?: number }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: CREAM,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { display: "block" },
  };
  if (name === "phone") {
    return (
      <svg {...props}>
        <path d="M6.5 3.5h3.2l1.4 4.1-2.1 1.4a11 11 0 0 0 6 6l1.4-2.1 4.1 1.4v3.2a2.4 2.4 0 0 1-2.7 2.4C11.4 19 5 12.6 4.1 6.2A2.4 2.4 0 0 1 6.5 3.5z" />
        <path d="M16 3.2c2.2.6 3.6 2 4.2 4.2" opacity="0.55" />
        <rect x="19" y="2.2" width="2.6" height="2.6" rx="0.4" fill={ACCENT} stroke="none" />
      </svg>
    );
  }
  if (name === "camera") {
    return (
      <svg {...props}>
        <path d="M3.5 7.5h3.1l1.6-2.4h7.6l1.6 2.4h3.1a0 0 0 0 1 0 0v11a1.6 1.6 0 0 1-1.6 1.6H5.1A1.6 1.6 0 0 1 3.5 18.5z" />
        <circle cx="12" cy="13.2" r="4" />
        <circle cx="12" cy="13.2" r="1.8" opacity="0.45" />
        <rect x="18.2" y="8.8" width="1.8" height="1.8" rx="0.3" fill={ACCENT} stroke="none" />
      </svg>
    );
  }
  if (name === "globe") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17" />
        <path d="M12 3.5c3 2.5 4.5 5.5 4.5 8.5S15 18 12 20.5C9 18 7.5 15 7.5 12S9 6 12 3.5z" />
        <circle cx="16.5" cy="8.5" r="1.6" fill={ACCENT} stroke="none" />
      </svg>
    );
  }
  return null;
}

// Hand-drawn ellipse around the "100%" hero stat
function HandEllipse({ color = tone(0.4) }: { color?: string }) {
  return (
    <svg viewBox="0 0 254 104" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <path
        d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
        fill={color}
      />
    </svg>
  );
}

// Schematic line visuals
function LineBars() {
  return (
    <svg viewBox="0 0 300 110" style={{ width: "100%", height: 110 }} preserveAspectRatio="none">
      <line x1="0" y1="100" x2="300" y2="100" stroke={tone(0.14)} />
      {[40, 70, 55, 90, 75, 110, 130, 160].map((h, i) => (
        <rect
          key={i}
          x={20 + i * 34}
          y={100 - h * 0.55}
          width={20}
          height={h * 0.55}
          fill="none"
          stroke={i >= 6 ? ACCENT : tone(0.35)}
          strokeWidth="1.2"
        />
      ))}
      <path
        d="M 30 78 L 64 70 L 98 75 L 132 58 L 166 62 L 200 44 L 234 30 L 268 18"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.8"
      />
      {[30, 64, 98, 132, 166, 200, 234, 268].map((x, i) => {
        const ys = [78, 70, 75, 58, 62, 44, 30, 18];
        return <circle key={i} cx={x} cy={ys[i]} r="2" fill={ACCENT} />;
      })}
    </svg>
  );
}

function SiteMockMini() {
  return (
    <div
      style={{
        border: `1px solid ${tone(0.12)}`,
        borderRadius: 8,
        background: tone(0.02),
        padding: "10px 12px 12px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ width: 7, height: 7, borderRadius: 999, background: tone(0.18) }} />
        ))}
      </div>
      <svg viewBox="0 0 300 130" style={{ width: "100%", height: 130 }}>
        <rect x="0" y="0" width="120" height="10" fill={tone(0.45)} rx="1" />
        <rect x="0" y="18" width="80" height="6" fill={tone(0.2)} rx="1" />
        <rect x="0" y="34" width="56" height="20" fill="none" stroke={ACCENT} strokeWidth="1.2" rx="2" />
        <path
          d="M 0 110 L 22 102 L 44 106 L 66 92 L 88 96 L 110 78 L 132 82 L 154 64 L 176 70 L 198 50 L 220 54 L 242 36 L 264 28 L 286 14 L 300 8"
          fill="none"
          stroke={ACCENT}
          strokeWidth="1.6"
        />
        <path
          d="M 0 110 L 22 102 L 44 106 L 66 92 L 88 96 L 110 78 L 132 82 L 154 64 L 176 70 L 198 50 L 220 54 L 242 36 L 264 28 L 286 14 L 300 8 L 300 130 L 0 130 Z"
          fill={ACCENT}
          opacity="0.05"
        />
        <line x1="0" y1="130" x2="300" y2="130" stroke={tone(0.14)} />
      </svg>
    </div>
  );
}

function BeforeAfterMini() {
  return (
    <svg viewBox="0 0 300 140" style={{ width: "100%", height: 140 }} preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0, 8)">
        <rect width="138" height="100" rx="3" fill="none" stroke={tone(0.18)} />
        <path
          d="M 0 100 L 30 70 L 56 82 L 82 56 L 110 72 L 138 50 L 138 100 Z"
          fill={tone(0.06)}
          stroke={tone(0.18)}
        />
        <circle cx="108" cy="28" r="9" fill="none" stroke={tone(0.18)} />
        <text x="6" y="14" fontFamily="var(--font-mono), monospace" fontSize="8" fill={tone(0.5)} letterSpacing="2">
          BEFORE
        </text>
      </g>
      <g transform="translate(160, 30)">
        <rect width="138" height="100" rx="3" fill="none" stroke={ACCENT} strokeWidth="1.2" />
        <path
          d="M 0 100 L 30 60 L 56 76 L 82 46 L 110 64 L 138 38 L 138 100 Z"
          fill={ACCENT}
          opacity="0.1"
          stroke={ACCENT}
          strokeWidth="1.2"
        />
        <circle cx="108" cy="26" r="11" fill="none" stroke={ACCENT} strokeWidth="1.2" />
        <text x="6" y="14" fontFamily="var(--font-mono), monospace" fontSize="8" fill={ACCENT} letterSpacing="2" fontWeight="700">
          AFTER
        </text>
      </g>
      <path d="M 138 60 L 162 78" stroke={tone(0.4)} strokeWidth="1" markerEnd="url(#ge2arr)" />
      <defs>
        <marker id="ge2arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={tone(0.4)} />
        </marker>
      </defs>
    </svg>
  );
}

const bodyText: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.55,
  color: tone(0.62),
  margin: "10px 0 0",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
};

const titleText: React.CSSProperties = {
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  fontWeight: 600,
  fontSize: 22,
  color: CREAM,
  letterSpacing: "-0.005em",
  margin: 0,
};

function IconRing({ children, size = 48 }: { children: React.ReactNode; size?: number }) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: 999,
        border: `1px solid ${tone(0.14)}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: CREAM,
        background: INK_CARD,
      }}
    >
      {children}
    </div>
  );
}

export default function GrowthEngineBento() {
  const [hoverId, setHoverId] = useState<string | null>(null);

  const cardBase: React.CSSProperties = {
    background: INK_CARD,
    borderRadius: 14,
    padding: 28,
    position: "relative",
    overflow: "hidden",
    transition: "border-color 280ms ease, transform 320ms cubic-bezier(.2,.7,.2,1), box-shadow 320ms",
  };

  const cardStyle = (id: string): React.CSSProperties => ({
    ...cardBase,
    border: `1px solid ${hoverId === id ? tone(0.22) : tone(0.08)}`,
    transform: hoverId === id ? "translateY(-4px)" : "translateY(0)",
    boxShadow: hoverId === id ? "0 22px 40px rgba(0,0,0,0.4)" : "none",
  });

  const onEnter = (id: string) => () => setHoverId(id);
  const onLeave = () => setHoverId(null);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: INK, color: CREAM, paddingBottom: 96 }}
    >
      {/* Grain */}
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

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 pt-24 lg:pt-28">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2.5 uppercase"
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: 12,
              letterSpacing: "0.18em",
              color: CREAM,
              fontWeight: 500,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            The Complete Growth Engine
          </div>
          <h2
            className="uppercase mx-auto"
            style={{
              fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(42px, 7vw, 88px)",
              lineHeight: 0.96,
              letterSpacing: "-0.025em",
              color: CREAM,
              marginTop: 24,
              maxWidth: 960,
            }}
          >
            Everything you need to{" "}
            <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
              dominate
            </span>
          </h2>
          <p
            className="mx-auto"
            style={{
              maxWidth: 640,
              marginTop: 22,
              fontSize: 16,
              lineHeight: 1.55,
              color: tone(0.65),
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            Not just marketing. The whole system — ads, AI, branding, and follow-up — built to take service businesses
            from scrambling to booked out.
          </p>
        </div>

        {/* Bento grid — 6 cols, responsive */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
          }}
        >
          {/* Card 1: Hero stat — span 2 */}
          <div
            onMouseEnter={onEnter("hero")}
            onMouseLeave={onLeave}
            className="col-span-6 md:col-span-3 lg:col-span-2"
            style={{
              ...cardStyle("hero"),
              minHeight: 320,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 240,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 28,
              }}
            >
              <HandEllipse color={tone(0.4)} />
              <span
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 52,
                  fontWeight: 600,
                  color: CREAM,
                  letterSpacing: "-0.02em",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                100%
              </span>
            </div>
            <h3 style={{ ...titleText, fontSize: 26 }}>Every lead, captured</h3>
            <p style={{ ...bodyText, maxWidth: 240 }}>
              No after-hours leak. No &quot;we&apos;ll call you back.&quot; Every inquiry meets a real reply in under a minute.
            </p>
          </div>

          {/* Card 2: AI agent — full-bleed anime image, span 2 */}
          <div
            onMouseEnter={onEnter("ai")}
            onMouseLeave={onLeave}
            className="col-span-6 md:col-span-3 lg:col-span-2"
            style={{
              ...cardStyle("ai"),
              minHeight: 320,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              backgroundImage: "url(/growth-collab.png)",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Scrim */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(180deg, rgba(15,14,16,0.0) 0%, rgba(15,14,16,0.25) 40%, rgba(15,14,16,0.85) 80%, ${INK_CARD} 100%)`,
                pointerEvents: "none",
              }}
            />
            {/* Top-left chip */}
            <div
              style={{
                position: "absolute",
                top: 18,
                left: 18,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 10px",
                borderRadius: 999,
                background: "rgba(15,14,16,0.55)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: `1px solid ${tone(0.18)}`,
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: CREAM,
              }}
            >
              Avg response · 8s
            </div>
            {/* Content pinned bottom */}
            <div
              style={{
                position: "relative",
                padding: 28,
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <IconRing size={40}>
                <MonoIcon name="phone" size={18} />
              </IconRing>
              <h3 style={{ ...titleText, fontSize: 24 }}>AI that never misses a lead</h3>
              <p style={{ ...bodyText, marginTop: 0 }}>
                60-second response on every call, text, and form. Books estimates while you&apos;re on the job site.
              </p>
            </div>
          </div>

          {/* Card 3: Ads — span 2 */}
          <div
            onMouseEnter={onEnter("ads")}
            onMouseLeave={onLeave}
            className="col-span-6 md:col-span-6 lg:col-span-2"
            style={{ ...cardStyle("ads"), minHeight: 320 }}
          >
            <div style={{ height: 120 }}>
              <LineBars />
            </div>
            <h3 style={{ ...titleText, marginTop: 16, textAlign: "center" }}>Ads that book high-end jobs</h3>
            <p style={{ ...bodyText, textAlign: "center" }}>
              Buyer-intent traffic from Google, Meta, and Yelp. 3.8× ROAS in 90 days.
            </p>
          </div>

          {/* Card 4: Photos — span 3 */}
          <div
            onMouseEnter={onEnter("photos")}
            onMouseLeave={onLeave}
            className="col-span-6 lg:col-span-3"
            style={{
              ...cardStyle("photos"),
              minHeight: 280,
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: 24,
              alignItems: "center",
            }}
          >
            <div>
              <IconRing>
                <MonoIcon name="camera" size={20} />
              </IconRing>
              <h3 style={{ ...titleText, marginTop: 20 }}>Photos that close the deal</h3>
              <p style={bodyText}>
                Turn iPhone job-site shots into editorial-grade before/after content that sells itself.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                marginRight: -28,
                marginBottom: -28,
                marginTop: 16,
                paddingTop: 16,
                paddingLeft: 16,
                borderTop: `1px solid ${tone(0.1)}`,
                borderLeft: `1px solid ${tone(0.1)}`,
                borderTopLeftRadius: 8,
              }}
            >
              <div style={{ position: "absolute", top: 6, left: 10, display: "flex", gap: 4 }}>
                {[0, 1, 2].map((i) => (
                  <span key={i} style={{ width: 6, height: 6, borderRadius: 999, background: tone(0.18) }} />
                ))}
              </div>
              <BeforeAfterMini />
            </div>
          </div>

          {/* Card 5: Websites — span 3 */}
          <div
            onMouseEnter={onEnter("web")}
            onMouseLeave={onLeave}
            className="col-span-6 lg:col-span-3"
            style={{
              ...cardStyle("web"),
              minHeight: 280,
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 16,
              alignItems: "center",
            }}
          >
            <div>
              <IconRing>
                <MonoIcon name="globe" size={20} />
              </IconRing>
              <h3 style={{ ...titleText, marginTop: 20 }}>Websites that convert</h3>
              <p style={bodyText}>
                Look like the premium choice. Sites that rank #1 local and turn visits into booked estimates.
              </p>
            </div>
            <div style={{ position: "relative", overflow: "hidden", height: "100%", display: "flex", alignItems: "center" }}>
              <SiteMockMini />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
