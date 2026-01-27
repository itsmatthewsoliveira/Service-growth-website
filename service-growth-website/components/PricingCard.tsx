"use client";

import Button from "./Button";

interface PricingFeature {
  text: string;
  bold?: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: (string | PricingFeature)[];
  isPro?: boolean;
  description?: string; // Added
  tagline?: string; // Added
  featured?: boolean; // For compatibility
  name?: string; // For compatibility (alias to title)
}

export default function PricingCard({
  title,
  price,
  period = "/yr",
  features,
  isPro = false,
  description,
  tagline,
  featured, // alias to isPro
  name, // alias to title
}: PricingCardProps) {
  const displayTitle = title || name || "";
  const isFeatured = isPro || featured || false;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border p-8 transition-transform hover:-translate-y-1 duration-300 flex flex-col h-full ${isFeatured
          ? "border-white/10 bg-gradient-to-b from-white/5 to-transparent"
          : "border-white/5 bg-bg-card"
        }`}
    >
      {/* Badge for Pro */}
      {isFeatured && (
        <div className="absolute top-0 right-0 p-6">
          <div className="w-12 h-12 rounded-full border border-dashed border-accent/50 flex items-center justify-center animate-spin-slow">
            <span className="text-[10px] font-bold text-accent uppercase tracking-tighter">Pro</span>
          </div>
        </div>
      )}

      <div className="mb-8">
        {tagline && (
          <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
            {tagline}
          </p>
        )}
        {!tagline && (
          <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
            Plan
          </p>
        )}

        <h3 className="text-3xl md:text-4xl font-serif text-text-headline mb-4">{displayTitle}</h3>

        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-3xl sm:text-4xl font-serif text-text-headline">
            {price}
          </span>
          <span className="text-text-muted">{period}</span>
        </div>

        {description && (
          <p className="text-sm text-text-body leading-relaxed border-t border-white/5 pt-4">
            {description}
          </p>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => {
          const featureText = typeof feature === 'string' ? feature : feature.text;
          const isBold = typeof feature !== 'string' && feature.bold;

          return (
            <li key={i} className="flex items-start gap-3 text-sm text-text-body">
              <svg
                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isFeatured ? "text-accent" : "text-text-muted"
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className={isBold ? "font-semibold text-white" : ""}>{featureText}</span>
            </li>
          );
        })}
      </ul>

      <Button
        href="/contact"
        variant={isFeatured ? "primary" : "glass"}
        className="w-full justify-center"
      >
        Get Started
      </Button>
    </div>
  );
}
