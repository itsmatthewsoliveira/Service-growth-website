"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Play, Check } from "lucide-react";
import DiagnosticChat from "@/components/DiagnosticChat";
import ClosingCTA from "@/components/sections/ClosingCTA";

const ACCENT = "#FF6A00";
const INK = "#121114";
const CREAM = "#FCFFD5";

// ─── Vimeo teaser video ────────────────────────────────────────────────────
const TEASER_VIDEO_ID = "1183159176";
const WATCH_GATE_SECONDS = 30;

const RESULTS = [
  { value: "$100K+", label: "Revenue in 3 months" },
  { value: "50+", label: "Leads per month" },
  { value: "$5–$15", label: "Cost per lead" },
  { value: "5×", label: "Return on ad spend" },
];

const BLUEPRINT_INCLUDES = [
  "How we generate 30+ leads/week from Google & Facebook",
  "The Yelp strategy + $600 in free ad credits from our reps",
  "Our exact Facebook ads setup that lands $5–$15 leads",
  "Google Ads keywords that convert at 25%+",
  "Speed-to-lead system that books estimates in <60 seconds",
  "Premium branding that attracts high-end clients",
  "Relationships with architects + designers for referral flow",
  "Day 2/5/7 follow-up that closes 40%+ of estimates",
];

const SEGMENTS = [
  {
    num: "01",
    title: "Just starting out",
    body: "Get your first 10 clients without wasting money on ads that don't work.",
  },
  {
    num: "02",
    title: "Doing $10K–$30K/mo",
    body: "Scale to $50K+ with systems that generate leads while you're on the job site.",
  },
  {
    num: "03",
    title: "Ready to dominate",
    body: "Become the #1 contractor in your area using the same playbook top players run.",
  },
];

export default function GrowthBlueprintPage() {
  const [videoStarted, setVideoStarted] = useState(false);
  const [watchSeconds, setWatchSeconds] = useState(0);
  const [engaged, setEngaged] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!videoStarted) return;

    let interval: ReturnType<typeof setInterval> | undefined;

    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data !== "string") return;
      try {
        const data = JSON.parse(event.data);
        if (data.event === "ready" && iframeRef.current?.contentWindow) {
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ method: "addEventListener", value: "timeupdate" }),
            "*"
          );
        }
        if (data.event === "timeupdate" && data.data?.seconds) {
          setWatchSeconds(data.data.seconds);
          if (data.data.seconds >= WATCH_GATE_SECONDS && !engaged) {
            setEngaged(true);
          }
        }
      } catch {}
    };

    window.addEventListener("message", handleMessage);

    interval = setInterval(() => {
      setWatchSeconds((s) => s + 1);
    }, 1000);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (interval) clearInterval(interval);
    };
  }, [videoStarted, engaged]);

  useEffect(() => {
    if (watchSeconds >= WATCH_GATE_SECONDS && !engaged) {
      setEngaged(true);
    }
  }, [watchSeconds, engaged]);

  function scrollToForm() {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  }

  const watchProgress = Math.min((watchSeconds / WATCH_GATE_SECONDS) * 100, 100);

  return (
    <>
      {/* 1 · Hero — DARK editorial */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: INK, color: CREAM }}
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
        {/* Ambient glow */}
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 900,
            height: 500,
            background: `${ACCENT}1A`,
            borderRadius: 999,
            filter: "blur(140px)",
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-20 pt-36 lg:pt-44 pb-12 lg:pb-16">
          {/* Eyebrow */}
          <div className="flex justify-center mb-7">
            <div
              className="inline-flex items-center gap-2.5 uppercase"
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.22em",
                color: CREAM,
                fontWeight: 500,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
              Free 6-question diagnostic
            </div>
          </div>

          {/* Headline */}
          <h1
            className="uppercase text-center mx-auto mb-7"
            style={{
              fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(44px, 7.4vw, 96px)",
              lineHeight: 0.94,
              letterSpacing: "-0.028em",
              color: CREAM,
              maxWidth: 1100,
            }}
          >
            See what level
            <br />
            your business is at —{" "}
            <span
              style={{
                color: ACCENT,
                fontStyle: "italic",
                fontFamily: "var(--font-display), 'Instrument Serif', serif",
              }}
            >
              then get the blueprint.
            </span>
          </h1>

          <p
            className="text-center mx-auto mb-10"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 17,
              lineHeight: 1.55,
              color: "rgba(252,255,213,0.7)",
              maxWidth: 640,
            }}
          >
            6 questions. We show you exactly where you're leaking leads + send the full $100K-in-90-days playbook to your inbox. Watch the 30-second preview first.
          </p>

          {/* Video */}
          <div className="max-w-[880px] mx-auto">
            <div
              className="relative overflow-hidden group"
              style={{
                aspectRatio: "16/9",
                background: "#0F0E10",
                border: "1px solid rgba(252,255,213,0.12)",
                borderRadius: 14,
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
              }}
            >
              {!videoStarted ? (
                <button
                  onClick={() => setVideoStarted(true)}
                  className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer"
                  aria-label="Play video"
                >
                  <img
                    src={`https://vumbnail.com/${TEASER_VIDEO_ID}_large.jpg`}
                    alt="Growth Blueprint teaser"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(18,17,20,0.65), rgba(18,17,20,0.2) 40%, transparent)",
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      <span
                        className="absolute inset-0 animate-ping"
                        style={{ borderRadius: 999, background: `${ACCENT}4D` }}
                      />
                      <div
                        className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{
                          borderRadius: 999,
                          background: "rgba(252,255,213,0.1)",
                          backdropFilter: "blur(22px)",
                          WebkitBackdropFilter: "blur(22px)",
                          border: "1px solid rgba(252,255,213,0.3)",
                          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                        }}
                      >
                        <Play className="w-8 h-8 md:w-10 md:h-10" fill={CREAM} color={CREAM} style={{ marginLeft: 4 }} />
                      </div>
                    </div>
                    <div
                      className="mt-5 uppercase"
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: 11,
                        letterSpacing: "0.22em",
                        color: CREAM,
                        background: "rgba(15,14,16,0.6)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        border: "1px solid rgba(252,255,213,0.15)",
                        padding: "8px 14px",
                        borderRadius: 999,
                        fontWeight: 600,
                      }}
                    >
                      Watch — 30 sec
                    </div>
                  </div>
                </button>
              ) : (
                <iframe
                  ref={iframeRef}
                  src={`https://player.vimeo.com/video/${TEASER_VIDEO_ID}?autoplay=1&title=0&byline=0&portrait=0&dnt=1&badge=0&api=1`}
                  title="Growth Blueprint Teaser"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>

            {/* Watch progress */}
            {videoStarted && !engaged && (
              <div className="mt-4 px-1">
                <div
                  className="flex items-center justify-between mb-2 uppercase"
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: "rgba(252,255,213,0.55)",
                    fontWeight: 500,
                  }}
                >
                  <span>Watch progress</span>
                  <span>
                    {Math.floor(watchSeconds)}s / {WATCH_GATE_SECONDS}s
                  </span>
                </div>
                <div className="h-0.5 w-full" style={{ background: "rgba(252,255,213,0.12)" }}>
                  <div
                    className="h-full transition-all duration-500"
                    style={{ width: `${watchProgress}%`, background: ACCENT }}
                  />
                </div>
              </div>
            )}

            {engaged && (
              <div
                className="mt-4 flex items-center justify-center gap-2 uppercase"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  color: ACCENT,
                  fontWeight: 700,
                }}
              >
                <Check className="w-4 h-4" />
                Priority access unlocked
              </div>
            )}

            {/* Scroll CTA */}
            <div className="text-center mt-10">
              <button
                onClick={scrollToForm}
                className="group inline-flex items-center gap-3 px-7 py-4 uppercase font-bold transition-colors hover:bg-[#FCFFD5]/10"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  color: CREAM,
                  border: `1.5px solid ${CREAM}`,
                  borderRadius: 4,
                }}
              >
                Get the free blueprint
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
              <p
                className="mt-4 uppercase"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  color: "rgba(252,255,213,0.5)",
                  fontWeight: 500,
                }}
              >
                Instant access · No spam · Delivered to your inbox
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · Results strip — DARK */}
      <section
        id="results-strip"
        className="relative w-full overflow-hidden"
        style={{ background: INK, color: CREAM }}
      >
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
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-20">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2.5 uppercase"
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.22em",
                color: CREAM,
                fontWeight: 500,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Real results from this system
            </div>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{
              borderTop: "1px solid rgba(252,255,213,0.14)",
              borderBottom: "1px solid rgba(252,255,213,0.14)",
            }}
          >
            {RESULTS.map((r, i) => (
              <div
                key={r.label}
                className="py-10 lg:py-14 px-6 lg:px-8"
                style={{
                  borderRight: i < RESULTS.length - 1 ? "1px solid rgba(252,255,213,0.14)" : undefined,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(40px, 4.5vw, 64px)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.025em",
                    color: ACCENT,
                  }}
                >
                  {r.value}
                </div>
                <div
                  className="mt-4 uppercase"
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: "rgba(252,255,213,0.72)",
                    fontWeight: 500,
                  }}
                >
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · DiagnosticChat — LIGHT editorial wrap */}
      <section
        id="lead-form"
        className="relative w-full"
        style={{ background: "#FFFFFF", color: INK }}
      >
        <div className="max-w-[880px] mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2.5 uppercase mb-6"
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.22em",
                color: INK,
                fontWeight: 500,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
              Alex is online · Replies in seconds
            </div>
            <h2
              className="uppercase mb-4 mx-auto"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 5.2vw, 60px)",
                lineHeight: 0.96,
                letterSpacing: "-0.02em",
                color: INK,
                maxWidth: 760,
              }}
            >
              Chat with Alex — get your{" "}
              <span
                style={{
                  color: ACCENT,
                  fontStyle: "italic",
                  fontFamily: "var(--font-display), 'Instrument Serif', serif",
                }}
              >
                free diagnostic + blueprint
              </span>
            </h2>
            <p
              className="mx-auto"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 16,
                lineHeight: 1.55,
                color: "rgba(18,17,20,0.62)",
                maxWidth: 560,
              }}
            >
              6 quick questions. We'll show you exactly where you're leaking money — and send the full playbook to your inbox.
            </p>
          </div>

          <DiagnosticChat />

          <div
            className="flex items-center justify-center gap-6 mt-6 uppercase"
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: 10,
              letterSpacing: "0.22em",
              color: "rgba(18,17,20,0.5)",
              fontWeight: 500,
            }}
          >
            <span>No spam</span>
            <span style={{ color: ACCENT }}>·</span>
            <span>6-question diagnostic</span>
            <span style={{ color: ACCENT }}>·</span>
            <span>Callback today</span>
          </div>
        </div>
      </section>

      {/* 4 · What's inside — DARK editorial */}
      <section className="relative w-full overflow-hidden" style={{ background: INK, color: CREAM }}>
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
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="max-w-2xl mb-14">
            <div
              className="inline-flex items-center gap-2.5 uppercase mb-6"
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.22em",
                color: CREAM,
                fontWeight: 500,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              What's inside
            </div>
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 5.6vw, 68px)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                color: CREAM,
              }}
            >
              Everything we used to go from{" "}
              <span
                style={{
                  color: ACCENT,
                  fontStyle: "italic",
                  fontFamily: "var(--font-display), 'Instrument Serif', serif",
                }}
              >
                $0 to $100K
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {BLUEPRINT_INCLUDES.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-4"
                style={{ borderTop: "1px solid rgba(252,255,213,0.12)" }}
              >
                <span
                  className="flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: ACCENT,
                    fontWeight: 700,
                    minWidth: 28,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "rgba(252,255,213,0.85)",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Who this is for — LIGHT 3-up */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 py-24 lg:py-32">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2.5 uppercase mb-6"
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.22em",
                color: INK,
                fontWeight: 500,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Who it's built for
            </div>
            <h2
              className="uppercase mx-auto"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 5.6vw, 68px)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                color: INK,
                maxWidth: 900,
              }}
            >
              Built for contractors who are{" "}
              <span
                style={{
                  color: ACCENT,
                  fontStyle: "italic",
                  fontFamily: "var(--font-display), 'Instrument Serif', serif",
                }}
              >
                done waiting
              </span>
            </h2>
            <p
              className="mx-auto mt-6"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 16,
                lineHeight: 1.55,
                color: "rgba(18,17,20,0.6)",
                maxWidth: 640,
              }}
            >
              Pavers, painters, roofers, landscapers, GCs — if you want more leads, higher close rates, and real revenue, this is for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {SEGMENTS.map((s) => (
              <div key={s.num}>
                <div
                  className="mb-5"
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 56,
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                    color: ACCENT,
                  }}
                >
                  {s.num}
                </div>
                <h3
                  className="uppercase mb-3"
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    lineHeight: 1.08,
                    letterSpacing: "-0.01em",
                    color: INK,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "rgba(18,17,20,0.68)",
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-3 px-7 py-4 uppercase font-bold transition-colors"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 14,
                letterSpacing: "0.08em",
                background: INK,
                color: CREAM,
                borderRadius: 4,
              }}
            >
              Get the free blueprint
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
