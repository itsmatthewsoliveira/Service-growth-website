"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";

type Theme = "dark" | "light";

interface CobeGlobeProps {
  theme?: Theme;
  size?: number;
}

// Real markets where service businesses operate — Jacksonville (HQ) is largest.
const MARKERS: { location: [number, number]; size: number }[] = [
  { location: [30.3322, -81.6557], size: 0.12 }, // Jacksonville (HQ)
  { location: [40.7128, -74.006], size: 0.09 },  // New York
  { location: [42.3601, -71.0589], size: 0.08 }, // Boston
  { location: [25.7617, -80.1918], size: 0.08 }, // Miami
  { location: [37.7749, -122.4194], size: 0.07 }, // San Francisco
  { location: [34.0522, -118.2437], size: 0.07 }, // Los Angeles
  { location: [41.8781, -87.6298], size: 0.07 }, // Chicago
  { location: [29.7604, -95.3698], size: 0.06 }, // Houston
  { location: [33.749, -84.388], size: 0.06 },   // Atlanta
  { location: [39.7392, -104.9903], size: 0.06 }, // Denver
  { location: [-23.5505, -46.6333], size: 0.07 }, // São Paulo
  { location: [-22.9068, -43.1729], size: 0.06 }, // Rio de Janeiro
  { location: [-21.7783, -46.5694], size: 0.06 }, // Poços de Caldas
  { location: [19.4326, -99.1332], size: 0.06 }, // Mexico City
  { location: [51.5074, -0.1278], size: 0.05 },  // London
  { location: [43.6532, -79.3832], size: 0.05 }, // Toronto
  { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
];

function CobeGlobe({ theme = "dark", size = 600 }: CobeGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;
    let width = 0;
    const onResize = () => {
      width = canvasRef.current?.offsetWidth ?? size;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const isDark = theme === "dark";

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: isDark ? 1 : 0,
      diffuse: isDark ? 1.2 : 1.6,
      mapSamples: 16000,
      mapBrightness: isDark ? 5.5 : 1.4,
      // Base color = land. Dark = warm charcoal. Light = warm cream.
      baseColor: isDark ? [0.18, 0.17, 0.18] : [0.92, 0.88, 0.82],
      // Markers = #F56E0F lava
      markerColor: [0.96, 0.43, 0.06],
      // Glow halo = #FCFFD5 butter (super subtle on light)
      glowColor: isDark ? [0.99, 1.0, 0.84] : [0.95, 0.93, 0.85],
      markers: MARKERS,
    });

    // Drive rotation via requestAnimationFrame (cobe v2 API)
    let rafId: number;
    const tick = () => {
      if (!pointerInteracting.current) {
        phiRef.current += 0.0035;
      }
      globe.update({
        phi: phiRef.current + pointerInteractionMovement.current,
        width: width * 2,
        height: width * 2,
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    // Fade canvas in once first frame paints (avoids flash)
    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    }, 80);

    return () => {
      cancelAnimationFrame(rafId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [theme, size]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: size,
        aspectRatio: 1,
        margin: "0 auto",
        position: "relative",
      }}
      onPointerDown={(e) => {
        pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
        if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = "grab";
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = "grab";
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta / 200;
        }
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
          cursor: "grab",
        }}
      />
    </div>
  );
}

interface GlobeSectionProps {
  theme?: Theme;
}

export default function GlobeSection({ theme = "dark" }: GlobeSectionProps) {
  const [activeTheme, setActiveTheme] = useState<Theme>(theme);
  const isDark = activeTheme === "dark";

  return (
    <section
      className={`relative overflow-hidden ${
        isDark ? "bg-[#0A0A0C] text-[#FBFBFB]" : "bg-[#FCFFD5] text-[#151419]"
      }`}
    >
      {/* Ambient lava glow behind globe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-60"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(245,110,15,0.18) 0%, transparent 60%)"
            : "radial-gradient(circle, rgba(245,110,15,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Butter rim flicker — super subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at center, transparent 50%, rgba(252,255,213,0.04) 90%)"
            : "transparent",
        }}
      />

      {/* THEME TOGGLE — preview-only, kill once you pick */}
      <div className="absolute top-6 right-6 z-20 flex gap-1 p-1 rounded-full border border-current/15 bg-current/5 backdrop-blur-sm">
        <button
          onClick={() => setActiveTheme("dark")}
          className={`px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold rounded-full transition-colors ${
            activeTheme === "dark"
              ? "bg-[#F56E0F] text-[#0A0A0C]"
              : "opacity-50 hover:opacity-100"
          }`}
        >
          Dark
        </button>
        <button
          onClick={() => setActiveTheme("light")}
          className={`px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold rounded-full transition-colors ${
            activeTheme === "light"
              ? "bg-[#F56E0F] text-[#0A0A0C]"
              : "opacity-50 hover:opacity-100"
          }`}
        >
          Light
        </button>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 ${
              isDark
                ? "border border-[#FBFBFB]/10 bg-[#FBFBFB]/[0.03]"
                : "border border-[#151419]/10 bg-[#FBFBFB]"
            }`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FCFFD5] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FCFFD5]" />
            </span>
            <span
              className={`text-[10px] md:text-[11px] font-semibold tracking-[0.18em] uppercase ${
                isDark ? "text-[#FBFBFB]/70" : "text-[#151419]/70"
              }`}
            >
              Worldwide
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.96] tracking-tight ${
              isDark ? "text-[#FBFBFB]" : "text-[#151419]"
            }`}
          >
            Clients from all over <br className="hidden md:block" />
            <span className="text-[#F56E0F]">the world.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={`mt-6 text-base md:text-lg max-w-2xl leading-relaxed ${
              isDark ? "text-[#878787]" : "text-[#4A4A45]"
            }`}
          >
            We help service businesses grow and scale with AI — from Jacksonville to São Paulo, Boston to Sydney.
            One stack. Every trade. Every timezone.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <CobeGlobe theme={activeTheme} size={700} />
        </motion.div>
      </div>
    </section>
  );
}
