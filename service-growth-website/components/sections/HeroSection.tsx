import Button from "@/components/ui/Button";
import { ReactNode } from "react";

interface HeroSectionProps {
  badge?: {
    icon?: ReactNode;
    text: string;
  };
  title: ReactNode;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  centered?: boolean;
  children?: ReactNode;
}

export default function HeroSection({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  centered = false,
  children,
}: HeroSectionProps) {
  return (
    <header
      className={`pt-24 pb-32 px-6 max-w-5xl mx-auto ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-medium mb-8 text-white/80">
          {badge.icon && <span>{badge.icon}</span>}
          {badge.text}
        </div>
      )}

      <h1 className="text-6xl md:text-8xl leading-[0.9] text-white mb-8 font-serif">
        {title}
      </h1>

      <p
        className={`text-lg md:text-xl text-white/60 leading-relaxed font-sans mb-10 ${centered ? "max-w-2xl mx-auto" : "max-w-3xl"}`}
      >
        {description}
      </p>

      {(primaryCta || secondaryCta) && (
        <div
          className={`flex flex-col sm:flex-row gap-4 ${centered ? "items-center justify-center" : ""}`}
        >
          {primaryCta && (
            <Button href={primaryCta.href} variant="primary" size="lg">
              {primaryCta.text}
            </Button>
          )}
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.text}
            </Button>
          )}
        </div>
      )}

      {children}
    </header>
  );
}
