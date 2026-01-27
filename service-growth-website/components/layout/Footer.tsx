import Link from "next/link";

const footerLinks = {
  pages: [
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
  ],
  industries: [
    { href: "/industries/home-services", label: "Home Services" },
    { href: "/industries/medical", label: "Medical" },
    { href: "/industries/construction", label: "Construction" },
  ],
  support: [
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h3 className="font-serif text-3xl mb-4 text-white">
            Service Growth AI
          </h3>
          <p className="text-white/50 max-w-xs">
            The autonomous platform for the next generation of service
            businesses.
          </p>
        </div>

        <div className="flex gap-12 text-sm text-white/60">
          <div className="flex flex-col gap-3">
            <strong className="text-white font-medium">Pages</strong>
            {footerLinks.pages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <strong className="text-white font-medium">Industries</strong>
            {footerLinks.industries.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <strong className="text-white font-medium">Support</strong>
            {footerLinks.support.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
