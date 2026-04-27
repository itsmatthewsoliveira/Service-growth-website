"use client";

import { useState } from "react";

const INK = "#10100F";
const INK_CARD = "#1D1C1A";
const CREAM = "#FCFFD5";
const ACCENT = "#E25312";
const FG_RGB = "252,255,213";
const tone = (a: number) => `rgba(${FG_RGB}, ${a})`;

// Monoline icon set — editorial pictograms
function MonoIcon({ name, size = 20 }: { name: "phone" | "camera" | "globe" | "chart" | "megaphone" | "proof" | "flow"; size?: number }) {
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
  if (name === "chart") {
    return (
      <svg {...props}>
        <path d="M4 18h16" />
        <path d="M6 15l4-4 3 2 5-7" />
        <path d="M18 6h-4M18 6v4" />
        <circle cx="10" cy="11" r="1.4" fill={ACCENT} stroke="none" />
      </svg>
    );
  }
  if (name === "megaphone") {
    return (
      <svg {...props}>
        <path d="M5 14H3.8A1.8 1.8 0 0 1 2 12.2v-.4A1.8 1.8 0 0 1 3.8 10H5l11-5v14L5 14z" />
        <path d="M5 14l2 5h3l-1.8-4.1" />
        <path d="M19 9.5c1.1 1.4 1.1 3.6 0 5" opacity="0.55" />
        <circle cx="16" cy="12" r="1.5" fill={ACCENT} stroke="none" />
      </svg>
    );
  }
  if (name === "proof") {
    return (
      <svg {...props}>
        <rect x="4" y="4" width="16" height="16" rx="2.5" />
        <path d="M8 9h8M8 13h4" />
        <path d="M13.5 15.2l1.2 1.2 2.6-3" />
        <circle cx="8" cy="16" r="1.2" fill={ACCENT} stroke="none" />
      </svg>
    );
  }
  if (name === "flow") {
    return (
      <svg {...props}>
        <rect x="3.5" y="4" width="6" height="5" rx="1.2" />
        <rect x="14.5" y="4" width="6" height="5" rx="1.2" />
        <rect x="9" y="15" width="6" height="5" rx="1.2" />
        <path d="M9.5 6.5h5M17.5 9v3.5L12 15M6.5 9v3.5L12 15" />
        <circle cx="12" cy="17.5" r="1" fill={ACCENT} stroke="none" />
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

const glassCard: React.CSSProperties = {
  borderRadius: 26,
  border: `1px solid ${tone(0.12)}`,
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.015) 36%, rgba(226,83,18,0.06) 100%)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 26px 70px rgba(0,0,0,0.46)",
  overflow: "hidden",
  position: "relative",
};

function GlossyMetricCard() {
  return (
    <div style={{ ...glassCard, width: "min(100%, 260px)", aspectRatio: "1 / 1", padding: 22 }}>
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 100%, rgba(226,83,18,0.34), transparent 44%), radial-gradient(circle at 6% 0%, rgba(252,255,213,0.1), transparent 32%)",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: tone(0.7),
        }}
      >
        <span>Lead flow</span>
        <span
          style={{
            borderRadius: 999,
            padding: "5px 8px",
            background: tone(0.08),
            border: `1px solid ${tone(0.1)}`,
          }}
        >
          Month
        </span>
      </div>
      <svg viewBox="0 0 220 112" style={{ position: "relative", marginTop: 24, width: "100%", height: 112 }}>
        {[28, 56, 84, 112, 140, 168, 196].map((x) => (
          <line key={x} x1={x} x2={x} y1="18" y2="106" stroke={tone(0.12)} strokeWidth="1" />
        ))}
        <path d="M0 88 C30 62 48 60 70 49 S112 77 138 61 S170 22 220 8" fill="none" stroke={tone(0.35)} strokeWidth="6" strokeLinecap="round" />
        <path d="M0 88 C30 62 48 60 70 49 S112 77 138 61 S170 22 220 8" fill="none" stroke={CREAM} strokeWidth="3" strokeLinecap="round" />
        {[54, 108, 154, 196].map((x, i) => {
          const y = [58, 58, 50, 22][i];
          return <circle key={x} cx={x} cy={y} r="6" fill={CREAM} stroke={INK_CARD} strokeWidth="2" />;
        })}
      </svg>
      <div style={{ position: "relative", marginTop: -2, textAlign: "center" }}>
        <div style={{ fontSize: 12, color: tone(0.62), fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
          Booked jobs
        </div>
        <div style={{ fontSize: 58, lineHeight: 1, fontWeight: 700, color: CREAM, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
          78%
        </div>
        <div style={{ marginTop: 8, fontSize: 11, lineHeight: 1.35, color: tone(0.52), fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
          More leads reaching a clear next step
        </div>
      </div>
    </div>
  );
}

function SignalTiles() {
  const tiles = [
    { label: "Missed calls", value: "12", accent: false },
    { label: "Replied", value: "94%", accent: true },
    { label: "Booked", value: "31", accent: true },
  ];
  return (
    <div className="grid grid-cols-3 gap-2 w-full">
      {tiles.map((tile) => (
        <div
          key={tile.label}
          style={{
            ...glassCard,
            borderRadius: 18,
            padding: "14px 12px",
            minHeight: 86,
            background: tile.accent
              ? "linear-gradient(145deg, rgba(226,83,18,0.22), rgba(20,18,16,0.86))"
              : "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(20,18,16,0.92))",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, color: tile.accent ? ACCENT : CREAM, lineHeight: 1 }}>
            {tile.value}
          </div>
          <div style={{ marginTop: 10, fontSize: 10, lineHeight: 1.25, color: tone(0.62), textTransform: "uppercase", fontFamily: "var(--font-mono), ui-monospace, monospace", letterSpacing: "0.08em" }}>
            {tile.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function BookingRail() {
  const steps = ["Lead", "Reply", "Qualify", "Book"];
  return (
    <div style={{ ...glassCard, borderRadius: 24, padding: 18, width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        {steps.map((step, i) => (
          <div key={step} style={{ display: "flex", alignItems: "center", flex: i === steps.length - 1 ? "0 0 auto" : 1 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 15,
                display: "grid",
                placeItems: "center",
                background: i === steps.length - 1 ? ACCENT : "rgba(252,255,213,0.06)",
                color: i === steps.length - 1 ? INK : CREAM,
                border: `1px solid ${i === steps.length - 1 ? "rgba(226,83,18,0.8)" : tone(0.12)}`,
                fontWeight: 800,
              }}
            >
              {i + 1}
            </div>
            {i < steps.length - 1 && <div style={{ height: 1, flex: 1, background: i < 2 ? tone(0.18) : ACCENT, margin: "0 8px" }} />}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2" style={{ marginTop: 12 }}>
        {steps.map((step) => (
          <span key={step} style={{ fontSize: 10, color: tone(0.58), fontFamily: "var(--font-mono), ui-monospace, monospace", textTransform: "uppercase", textAlign: "center" }}>
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}

function SystemIconCard({ icon, label }: { icon: "phone" | "camera" | "globe" | "chart" | "megaphone" | "proof" | "flow"; label: string }) {
  return (
    <div
      style={{
        ...glassCard,
        borderRadius: 24,
        padding: 18,
        minHeight: 130,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "linear-gradient(145deg, rgba(252,255,213,0.075), rgba(29,28,26,0.92) 48%, rgba(226,83,18,0.14))",
      }}
    >
      <IconRing size={46}>
        <MonoIcon name={icon} size={21} />
      </IconRing>
      <div
        style={{
          marginTop: 16,
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: 10,
          lineHeight: 1.35,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: tone(0.66),
        }}
      >
        {label}
      </div>
    </div>
  );
}

function CommunicationConsole() {
  const rows = [
    ["Call", "Answered", "08s"],
    ["Text", "Qualified", "02m"],
    ["Email", "Follow-up sent", "Auto"],
  ];
  return (
    <div style={{ ...glassCard, borderRadius: 26, padding: 18, width: "100%" }}>
      <div className="grid grid-cols-3 gap-2">
        <SystemIconCard icon="phone" label="Callbot" />
        <SystemIconCard icon="flow" label="Chatbot" />
        <SystemIconCard icon="megaphone" label="Autosender" />
      </div>
      <div style={{ marginTop: 14, borderTop: `1px solid ${tone(0.1)}` }}>
        {rows.map(([a, b, c]) => (
          <div key={a} className="grid grid-cols-[0.7fr_1fr_auto] gap-3 items-center py-3" style={{ borderBottom: `1px solid ${tone(0.08)}` }}>
            <span style={{ fontSize: 11, color: tone(0.55), fontFamily: "var(--font-mono), ui-monospace, monospace", textTransform: "uppercase" }}>{a}</span>
            <span style={{ fontSize: 13, color: CREAM }}>{b}</span>
            <span style={{ fontSize: 12, color: ACCENT, fontWeight: 800 }}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.045), rgba(15,14,16,0.98) 42%, rgba(226,83,18,0.035))",
    borderRadius: 24,
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
            Three-part AI operating system
          </div>
          <h2
            className="uppercase mx-auto"
            style={{
              fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(42px, 7vw, 88px)",
              lineHeight: 0.96,
              letterSpacing: "0",
              color: CREAM,
              marginTop: 24,
              maxWidth: 960,
            }}
          >
            Sales. Communication.{" "}
            <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
              Marketing.
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
            We look at how your company actually wins work, then install AI agents where money leaks out:
            sales follow-up, customer communication, and local marketing.
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
            <GlossyMetricCard />
            <h3 style={{ ...titleText, fontSize: 26 }}>Sales managed by AI</h3>
            <p style={{ ...bodyText, maxWidth: 240 }}>
              Image creation, client response, estimate follow-up, and sales speed systems that help more leads close.
            </p>
          </div>

          {/* Card 2: Communication console, span 2 */}
          <div
            onMouseEnter={onEnter("ai")}
            onMouseLeave={onLeave}
            className="col-span-6 md:col-span-3 lg:col-span-2"
            style={{
              ...cardStyle("ai"),
              minHeight: 320,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 72% 18%, rgba(226,83,18,0.22), transparent 34%), radial-gradient(circle at 16% 100%, rgba(252,255,213,0.06), transparent 34%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <CommunicationConsole />
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ ...titleText, fontSize: 24 }}>Communication managed by AI</h3>
              <p style={{ ...bodyText, marginTop: 0 }}>
                AI chatbots, callbots, missed-call text-back, email autosenders, and fast handoffs to your team.
              </p>
            </div>
          </div>

          {/* Card 3: Ads — span 2 */}
          <div
            onMouseEnter={onEnter("ads")}
            onMouseLeave={onLeave}
            className="col-span-6 md:col-span-6 lg:col-span-2"
            style={{ ...cardStyle("ads"), minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <div className="grid grid-cols-2 gap-3">
              <SystemIconCard icon="megaphone" label="Local channels" />
              <SystemIconCard icon="chart" label="Booked pipeline" />
            </div>
            <div style={{ height: 98, marginTop: 18 }}>
              <LineBars />
            </div>
            <h3 style={{ ...titleText, marginTop: 16, textAlign: "center" }}>Marketing managed by AI</h3>
            <p style={{ ...bodyText, textAlign: "center" }}>
              Yelp, Google, Facebook, Nextdoor, landing pages, and follow-up all tied to actual booked jobs.
            </p>
          </div>

          {/* Card 4: Photos — span 3 */}
          <div
            onMouseEnter={onEnter("photos")}
            onMouseLeave={onLeave}
            className="col-span-6 lg:col-span-3 grid-cols-1 md:grid-cols-[1fr_1.3fr]"
            style={{
              ...cardStyle("photos"),
              minHeight: 280,
              display: "grid",
              gap: 24,
              alignItems: "center",
            }}
          >
            <div>
              <SystemIconCard icon="proof" label="Proof engine" />
              <h3 style={{ ...titleText, marginTop: 20 }}>Proof that sells for you</h3>
              <p style={bodyText}>
                Turn real job photos and reviews into the kind of trust signals buyers check before they call.
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
            className="col-span-6 lg:col-span-3 grid-cols-1 md:grid-cols-[1fr_1.4fr]"
            style={{
              ...cardStyle("web"),
              minHeight: 280,
              display: "grid",
              gap: 16,
              alignItems: "center",
            }}
          >
            <div>
              <SystemIconCard icon="globe" label="Website control center" />
              <h3 style={{ ...titleText, marginTop: 20 }}>Website as the control center</h3>
              <p style={bodyText}>
                Your website does more than look good. It qualifies visitors and routes them into the right follow-up.
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
