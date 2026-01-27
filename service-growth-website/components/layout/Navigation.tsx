"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
      <Link
        href="/"
        className="font-sans font-bold text-xl tracking-tight text-white"
      >
        Service Growth AI
      </Link>

      <div className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "text-primary"
                : "text-white hover:opacity-70 transition-opacity"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="/contact"
        className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
      >
        Book a Call
      </Link>
    </nav>
  );
}
