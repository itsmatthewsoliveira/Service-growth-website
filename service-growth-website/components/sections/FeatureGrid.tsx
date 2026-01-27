import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  iconBgClass?: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4 | 5;
}

export default function FeatureGrid({
  features,
  columns = 4,
}: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white/5 border border-white/10 p-8 rounded-[4px] hover:bg-white/10 transition-colors group"
        >
          <div
            className={`w-12 h-12 rounded-[2px] flex items-center justify-center mb-6 ${feature.iconBgClass || "bg-primary text-black"}`}
          >
            {feature.icon}
          </div>
          <h3 className="text-xl mb-3 text-white font-serif">{feature.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
