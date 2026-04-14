"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const servicesDropdown = [
  { href: "/services/website", label: "Website Services" },
  { href: "/services/ads", label: "Ads Management" },
  { href: "/services/content", label: "Content & Visual" },
  { href: "/services/automation", label: "Automation" },
];

const industriesDropdown = [
  { href: "/industries/home-services", label: "Home Services" },
  { href: "/industries/medical", label: "Medical" },
  { href: "/industries/construction", label: "Construction" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", dropdown: servicesDropdown },
  { href: "/industries", label: "Industries", dropdown: industriesDropdown },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function DropdownMenu({
  items,
  isOpen,
}: {
  items: { href: string; label: string }[];
  isOpen: boolean;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-48 bg-[#1A1A18] border border-white/10 rounded-xl overflow-hidden shadow-lg z-50"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-sm text-[#B8B3AA] hover:text-[#C2703A] hover:bg-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex items-center"
          >
            <img
              src="/logo-white.svg"
              alt="Service Growth AI"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && setOpenDropdown(link.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-[#B8B3AA] hover:text-[#F5F0E8] transition-colors font-medium"
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {link.dropdown && (
                  <DropdownMenu
                    items={link.dropdown}
                    isOpen={openDropdown === link.label}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+19044542240" className="text-sm text-[#B8B3AA] hover:text-[#C2703A] transition-colors font-medium">
              (904) 454-2240
            </a>
            <Button href="/contact" variant="primary" size="default">
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button — animated hamburger → X */}
          <button
            className="lg:hidden relative p-3 text-[#F5F0E8] min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                className={`origin-center transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-0 rotate-180" : "opacity-100 scale-100 rotate-0"}`}
              />
            </svg>
            <svg
              className={`w-6 h-6 absolute origin-center transition-all duration-300 ${mobileMenuOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-180"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pt-4 border-t border-white/10"
            >
              <div className="flex flex-col gap-2 pb-4">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-3 text-base text-[#B8B3AA] hover:text-[#F5F0E8] transition-colors font-medium min-h-[44px] flex items-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-3 text-base text-[#7A766E] hover:text-[#C2703A] transition-colors min-h-[44px] flex items-center"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a href="tel:+19044542240" className="block py-3 text-base text-[#B8B3AA] hover:text-[#C2703A] transition-colors font-medium min-h-[44px] flex items-center">
                  (904) 454-2240
                </a>
                <div className="pt-2">
                  <Button
                    href="/contact"
                    variant="primary"
                    fullWidth
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book a Call
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
