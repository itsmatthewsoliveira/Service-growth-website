"use client";

import { useEffect, useRef } from "react";

interface DarkVeilProps {
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number;
}

export default function DarkVeil({
  hueShift = 40,
  noiseIntensity = 0.2,
  scanlineIntensity = 0,
  speed = 0.5,
  scanlineFrequency = 35,
  warpAmount = 0.6,
  resolutionScale = 1,
}: DarkVeilProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number;
    let height: number;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = Math.floor(parent.clientWidth * resolutionScale);
        height = Math.floor(parent.clientHeight * resolutionScale);
        canvas.width = width;
        canvas.height = height;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Noise function
    const noise = (x: number, y: number, t: number): number => {
      const n = Math.sin(x * 12.9898 + y * 78.233 + t) * 43758.5453;
      return n - Math.floor(n);
    };

    // HSL to RGB conversion
    const hslToRgb = (h: number, s: number, l: number): [number, number, number] => {
      let r, g, b;
      if (s === 0) {
        r = g = b = l;
      } else {
        const hue2rgb = (p: number, q: number, t: number) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1/6) return p + (q - p) * 6 * t;
          if (t < 1/2) return q;
          if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
      }
      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };

    const animate = () => {
      timeRef.current += speed * 0.01;
      const t = timeRef.current;

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const i = (y * width + x) * 4;

          // Normalized coordinates
          const nx = x / width;
          const ny = y / height;

          // Warp effect
          const warpX = nx + Math.sin(ny * 3 + t) * warpAmount * 0.02;
          const warpY = ny + Math.cos(nx * 3 + t) * warpAmount * 0.02;

          // Generate noise
          const n1 = noise(warpX * 10, warpY * 10, t);
          const n2 = noise(warpX * 20, warpY * 20, t * 0.5);
          const noiseVal = (n1 * 0.6 + n2 * 0.4) * noiseIntensity;

          // Base dark gradient
          const gradient = 1 - (ny * 0.3 + nx * 0.1);

          // Hue shift based on position and time
          const hue = ((hueShift / 360) + nx * 0.1 + Math.sin(t * 0.2) * 0.05) % 1;
          const saturation = 0.3 + noiseVal * 0.2;
          const lightness = 0.02 + noiseVal * 0.08 * gradient;

          const [r, g, b] = hslToRgb(hue, saturation, lightness);

          // Scanlines
          let scanline = 1;
          if (scanlineIntensity > 0) {
            scanline = 1 - (Math.sin(y * scanlineFrequency * 0.1) * 0.5 + 0.5) * scanlineIntensity;
          }

          data[i] = Math.floor(r * scanline);
          data[i + 1] = Math.floor(g * scanline);
          data[i + 2] = Math.floor(b * scanline);
          data[i + 3] = 180; // Semi-transparent
        }
      }

      ctx.putImageData(imageData, 0, 0);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [hueShift, noiseIntensity, scanlineIntensity, speed, scanlineFrequency, warpAmount, resolutionScale]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "overlay" }}
    />
  );
}
