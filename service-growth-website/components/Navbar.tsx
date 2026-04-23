"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ─── DESKTOP: glass pill floating at top ─── */}
      <nav
        className="hidden lg:block fixed inset-x-0 top-4 z-50 px-6 xl:px-20 pointer-events-none"
      >
        <div
          className={`mx-auto flex items-center justify-between pointer-events-auto transition-all duration-300 ${
            scrolled ? "py-1.5 px-5" : "py-2 px-6"
          }`}
          style={{
            background: "rgba(18,17,20,0.55)",
            backdropFilter: "blur(22px) saturate(160%)",
            WebkitBackdropFilter: "blur(22px) saturate(160%)",
            border: "1px solid rgba(252,255,213,0.12)",
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(18,17,20,0.25)",
          }}
        >
          {/* Logo mark only — no wordmark */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo-v2.png"
              alt="Service Growth AI"
              className={`transition-all duration-300 ${
                scrolled ? "w-11 h-11" : "w-14 h-14"
              }`}
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Center links */}
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-[#FCFFD5]/85 hover:text-[#FCFFD5] transition-colors"
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Sign in + CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-[14px] font-medium text-[#FCFFD5]/85 hover:text-[#FCFFD5] transition-colors"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Sign in
            </Link>
            <Link
              href="/growth-blueprint"
              className="group inline-flex items-center gap-2 px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#FCFFD5] border border-[#FCFFD5]/90 rounded hover:bg-[#FCFFD5]/10 transition-colors"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Book a demo
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── MOBILE: simplified top bar ─── */}
      <nav
        className={`lg:hidden fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#121114]/85 backdrop-blur-2xl backdrop-saturate-150 border-b border-[#FCFFD5]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <img src="/logo-v2.png" alt="Service Growth AI" className="w-10 h-10 object-contain" />
            </Link>

            <button
              className="relative p-3 text-[#FCFFD5] min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 17h16"}
                />
              </svg>
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden border-t border-[#FCFFD5]/10"
              >
                <div className="flex flex-col py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3 px-2 text-[15px] text-[#FCFFD5]/85 hover:text-[#FCFFD5] font-medium min-h-[44px] flex items-center"
                      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/growth-blueprint"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#FCFFD5] border border-[#FCFFD5]/90 rounded"
                    style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                  >
                    Book a demo →
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
