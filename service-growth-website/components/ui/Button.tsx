import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  className?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const baseStyles =
    "inline-block rounded-full font-medium transition-colors text-center";

  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
    secondary: "bg-muted text-white hover:bg-white/10",
    outline:
      "bg-secondary border border-white/20 text-white hover:bg-white/10",
  };

  const sizeStyles = {
    default: "px-5 py-2.5 text-sm",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
