import { ReactNode } from "react";

interface TimelineStep {
  badge: string;
  badgeVariant?: "primary" | "default";
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line (desktop only) */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        const stepNumber = index + 1;
        const isPrimaryStep = step.badgeVariant === "primary";

        return (
          <div
            key={index}
            className="relative grid md:grid-cols-2 gap-8 mb-16 last:mb-0"
          >
            {/* Content - alternates sides on desktop */}
            <div
              className={`${isEven ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"}`}
            >
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  isPrimaryStep
                    ? "bg-primary/20 text-primary"
                    : "bg-white/10 text-white/60"
                }`}
              >
                {step.badge}
              </div>
              <h3 className="text-2xl md:text-3xl text-white mb-4 font-serif">
                {step.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{step.description}</p>
            </div>

            {/* Step Number Circle - desktop only */}
            <div
              className={`hidden md:flex items-center ${
                isEven ? "justify-start" : "justify-end col-start-1 row-start-1"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                  isEven ? "-ml-8" : "-mr-8"
                } ${
                  isPrimaryStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted border border-white/20 text-white"
                }`}
              >
                {stepNumber}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
