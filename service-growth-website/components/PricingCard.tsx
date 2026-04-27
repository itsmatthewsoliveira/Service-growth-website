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
  description?: string;
  tagline?: string;
  featured?: boolean;
  name?: string;
}

export default function PricingCard({
  title,
  price,
  period = "/yr",
  features,
  isPro = false,
  description,
  tagline,
  featured,
  name,
}: PricingCardProps) {
  const displayTitle = title || name || "";
  const isFeatured = isPro || featured || false;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border p-8 transition-transform hover:-translate-y-1 duration-300 flex flex-col h-full ${isFeatured
          ? "border-[#E25312]/30 bg-gradient-to-b from-[#E25312]/5 to-white shadow-md"
          : "border-[#1D1C1A]/8 bg-white shadow-sm"
        }`}
    >
      {/* Badge for Pro */}
      {isFeatured && (
        <div className="absolute top-0 right-0 p-6">
          <div className="w-12 h-12 rounded-full border border-dashed border-[#E25312]/50 flex items-center justify-center animate-spin-slow">
            <span className="text-[10px] font-bold text-[#B9410B] uppercase tracking-tighter">Pro</span>
          </div>
        </div>
      )}

      <div className="mb-8">
        {tagline && (
          <p className="text-xs font-medium text-[#B9410B] uppercase tracking-wider mb-2">
            {tagline}
          </p>
        )}
        {!tagline && (
          <p className="text-sm font-medium text-[#7A766E] uppercase tracking-wider mb-4">
            Plan
          </p>
        )}

        <h3 className="text-3xl md:text-4xl font-serif text-[#1D1C1A] mb-4">{displayTitle}</h3>

        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-3xl sm:text-4xl font-serif text-[#1D1C1A]">
            {price}
          </span>
          <span className="text-[#7A766E]">{period}</span>
        </div>

        {description && (
          <p className="text-sm text-[#4A4A45] leading-relaxed border-t border-[#1D1C1A]/8 pt-4">
            {description}
          </p>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => {
          const featureText = typeof feature === 'string' ? feature : feature.text;
          const isBold = typeof feature !== 'string' && feature.bold;

          return (
            <li key={i} className="flex items-start gap-3 text-sm text-[#4A4A45]">
              <svg
                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isFeatured ? "text-[#B9410B]" : "text-[#7A766E]"
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
              <span className={isBold ? "font-semibold text-[#1D1C1A]" : ""}>{featureText}</span>
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
