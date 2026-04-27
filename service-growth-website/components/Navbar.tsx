"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/ads", label: "Ads management" },
      { href: "/services/automation", label: "AI automation" },
      { href: "/services/content", label: "Content + visual" },
      { href: "/services/website", label: "Website services" },
      { href: "/pricing", label: "Pricing", pricing: true },
    ],
  },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
            background: "rgba(16,16,15,0.55)",
            backdropFilter: "blur(22px) saturate(160%)",
            WebkitBackdropFilter: "blur(22px) saturate(160%)",
            border: "1px solid rgba(252,255,213,0.12)",
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(16,16,15,0.25)",
          }}
        >
          {/* Logo mark */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo-v2-small.webp"
              alt="Service Growth AI"
              className={`transition-all duration-300 ${scrolled ? "w-11 h-11" : "w-14 h-14"}`}
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Center links */}
          <div className="flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const hasChildren = "children" in link && link.children;
              if (hasChildren) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-[14px] font-medium text-[#FCFFD5]/85 hover:text-[#FCFFD5] transition-colors"
                      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                    >
                      {link.label}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        className="transition-transform"
                        style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0)" }}
                      >
                        <path d="M2 3.5 L5 7 L8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.14 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                          style={{ minWidth: 260 }}
                        >
                          <div
                            style={{
                              background: "rgba(16,16,15,0.9)",
                              backdropFilter: "blur(22px) saturate(160%)",
                              WebkitBackdropFilter: "blur(22px) saturate(160%)",
                              border: "1px solid rgba(252,255,213,0.12)",
                              borderRadius: 12,
                              padding: "10px",
                              boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                            }}
                          >
                            {link.children!.map((c) => (
                              <Link
                                key={c.href}
                                href={c.href}
                                onClick={() => setServicesOpen(false)}
                                className="flex items-center justify-between gap-6 px-3 py-2.5 rounded-md text-[#FCFFD5]/80 hover:text-[#FCFFD5] hover:bg-[#FCFFD5]/5 transition-colors"
                                style={{
                                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                                  fontSize: 13,
                                }}
                              >
                                <span>{c.label}</span>
                                {"pricing" in c && c.pricing && (
                                  <span
                                    className="uppercase"
                                    style={{
                                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                                      fontSize: 9,
                                      letterSpacing: "0.2em",
                                      color: "#E25312",
                                      fontWeight: 700,
                                    }}
                                  >
                                    Tiers
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] font-medium text-[#FCFFD5]/85 hover:text-[#FCFFD5] transition-colors"
                  style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA only (Sign in removed) */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#FCFFD5] border border-[#FCFFD5]/90 rounded hover:bg-[#FCFFD5]/10 transition-colors"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Book a demo
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── MOBILE ─── */}
      <nav
        className={`lg:hidden fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#10100F]/85 backdrop-blur-2xl backdrop-saturate-150 border-b border-[#FCFFD5]/10"
            : "bg-[#10100F]/40 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <img src="/logo-v2-small.webp" alt="Service Growth AI" className="w-10 h-10 object-contain" />
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
                  {NAV_LINKS.map((link) => {
                    const hasChildren = "children" in link && link.children;
                    if (hasChildren) {
                      return (
                        <div key={link.href}>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="w-full py-3 px-2 flex items-center justify-between text-[15px] text-[#FCFFD5]/85 font-medium"
                            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                          >
                            {link.label}
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              style={{
                                transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0)",
                                transition: "transform 220ms",
                              }}
                            >
                              <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                            </svg>
                          </button>
                          {mobileServicesOpen && (
                            <div className="pl-4 border-l border-[#FCFFD5]/10 ml-2 mb-2">
                              {link.children!.map((c) => (
                                <Link
                                  key={c.href}
                                  href={c.href}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className="block py-2.5 px-3 text-[14px] text-[#FCFFD5]/70 hover:text-[#FCFFD5]"
                                  style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                                >
                                  {c.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-3 px-2 text-[15px] text-[#FCFFD5]/85 hover:text-[#FCFFD5] font-medium min-h-[44px] flex items-center"
                        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <Link
                    href="/contact"
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
