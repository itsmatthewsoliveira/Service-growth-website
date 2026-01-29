import Link from "next/link";

const footerLinks = {
  pages: [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
    { href: "/community", label: "The Growth Lab" },
  ],
  services: [
    { href: "/services/website", label: "Website Services" },
    { href: "/services/ads", label: "Ads Management" },
    { href: "/services/content", label: "Content & Visual" },
    { href: "/services/automation", label: "Automation" },
  ],
  industries: [
    { href: "/industries/home-services", label: "Home Services" },
    { href: "/industries/medical", label: "Medical" },
    { href: "/industries/construction", label: "Construction" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4 logo-glow">
              <img
                src="/logo-header.png"
                srcSet="/logo-header.png 1x, /logo-header@2x.png 2x"
                alt="Service Growth AI"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-text-muted text-sm max-w-xs">
              AI that actually works for service businesses. Built by operators,
              for operators.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-text-headline font-semibold mb-4">Pages</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-text-headline font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-text-headline font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} ServiceGrowth.ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/community"
              className="text-text-muted text-sm hover:text-accent transition-colors"
            >
              The Growth Lab
            </Link>
            <Link
              href="/contact"
              className="text-text-muted text-sm hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
