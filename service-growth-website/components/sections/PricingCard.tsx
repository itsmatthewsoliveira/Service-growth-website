import Button from "@/components/ui/Button";

interface PricingFeature {
  text: string;
  bold?: boolean;
}

interface PricingCardProps {
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: PricingFeature[];
  ctaText?: string;
  ctaHref?: string;
  featured?: boolean;
  badge?: string;
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
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
  );
}

export default function PricingCard({
  name,
  tagline,
  price,
  description,
  features,
  ctaText = "Get Started",
  ctaHref = "/contact",
  featured = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`bg-secondary rounded-[4px] p-8 flex flex-col relative ${
        featured
          ? "border-2 border-primary"
          : "border border-white/10"
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1 rounded-full">
          {badge}
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl text-white mb-2 font-serif">{name}</h3>
        <p className="text-white/50 text-sm">{tagline}</p>
      </div>

      <div className="mb-6">
        <span className={`text-5xl font-bold ${featured ? "text-primary" : "text-white"}`}>
          {price}
        </span>
        <span className="text-white/50">/month</span>
      </div>

      <p className="text-white/60 text-sm mb-6">{description}</p>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
            <CheckIcon />
            {feature.bold ? (
              <strong>{feature.text}</strong>
            ) : (
              <span>{feature.text}</span>
            )}
          </li>
        ))}
      </ul>

      <Button
        href={ctaHref}
        variant={featured ? "primary" : "secondary"}
        fullWidth
        size="lg"
      >
        {ctaText}
      </Button>
    </div>
  );
}
