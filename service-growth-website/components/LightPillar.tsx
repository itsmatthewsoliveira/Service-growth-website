"use client";

import { useEffect, useRef } from "react";

interface LightPillarProps {
  topColor?: string;
  bottomColor?: string;
  intensity?: number;
  rotationSpeed?: number;
  interactive?: boolean;
  glowAmount?: number;
  pillarWidth?: number;
  pillarHeight?: number;
  noiseIntensity?: number;
  pillarRotation?: number;
}

export default function LightPillar({
  topColor = "#000000",
  bottomColor = "#444444",
  intensity = 1,
  rotationSpeed = 0.3,
  interactive = false,
  glowAmount = 0.009,
  pillarWidth = 8,
  pillarHeight = 0.4,
  noiseIntensity = 1.3,
  pillarRotation = 0,
}: LightPillarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      timeRef.current += rotationSpeed * 0.01;

      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Create gradient for pillar
      const centerX = width / 2;
      const pillarW = width * (pillarWidth / 100);
      const pillarH = height * pillarHeight;

      // Apply rotation transform
      ctx.save();
      ctx.translate(centerX, height);
      ctx.rotate((pillarRotation * Math.PI) / 180 + Math.sin(timeRef.current) * 0.02);
      ctx.translate(-centerX, -height);

      // Draw multiple light pillars for depth
      for (let i = 0; i < 3; i++) {
        const offset = Math.sin(timeRef.current + i * 0.5) * (noiseIntensity * 10);
        const alpha = (0.15 - i * 0.04) * intensity;

        const gradient = ctx.createLinearGradient(
          centerX,
          height,
          centerX,
          height - pillarH
        );

        gradient.addColorStop(0, `${bottomColor}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${topColor}${Math.round(alpha * 0.5 * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(centerX - pillarW / 2 + offset, height);
        ctx.lineTo(centerX - pillarW / 4 + offset * 0.5, height - pillarH);
        ctx.lineTo(centerX + pillarW / 4 + offset * 0.5, height - pillarH);
        ctx.lineTo(centerX + pillarW / 2 + offset, height);
        ctx.closePath();

        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Add glow effect
      if (glowAmount > 0) {
        const glowGradient = ctx.createRadialGradient(
          centerX,
          height,
          0,
          centerX,
          height,
          pillarW * 2
        );
        glowGradient.addColorStop(0, `${bottomColor}${Math.round(glowAmount * 255 * intensity).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(1, "transparent");

        ctx.fillStyle = glowGradient;
        ctx.fillRect(0, height - pillarH, width, pillarH);
      }

      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [topColor, bottomColor, intensity, rotationSpeed, glowAmount, pillarWidth, pillarHeight, noiseIntensity, pillarRotation]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
