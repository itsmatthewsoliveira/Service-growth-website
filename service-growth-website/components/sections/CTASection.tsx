import Button from "@/components/ui/Button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: "default" | "highlight";
  note?: string;
}

export default function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "default",
  note,
}: CTASectionProps) {
  const bgClass =
    variant === "highlight"
      ? "bg-primary/10 border border-primary/30"
      : "bg-muted";

  return (
    <section className="py-24 px-6">
      <div
        className={`max-w-3xl mx-auto text-center ${variant === "highlight" ? "p-8 md:p-12 rounded-[4px]" : ""} ${bgClass}`}
      >
        <h2 className="text-3xl md:text-4xl text-white mb-6 font-serif">{title}</h2>
        <p className="text-white/60 text-lg mb-8">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCta && (
            <Button href={primaryCta.href} variant="primary" size="lg">
              {primaryCta.text}
            </Button>
          )}
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="outline" size="lg">
              {secondaryCta.text}
            </Button>
          )}
        </div>

        {note && <p className="text-white/40 text-sm mt-4">{note}</p>}
      </div>
    </section>
  );
}
