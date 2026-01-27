import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "feature" | "muted";
}

export default function Card({
  children,
  className = "",
  variant = "default",
}: CardProps) {
  const variantStyles = {
    default: "bg-secondary border border-white/10",
    feature: "bg-white/5 border border-white/10 hover:bg-white/10 transition-colors",
    muted: "bg-muted border border-white/5",
  };

  return (
    <div className={`rounded-[4px] p-8 ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
