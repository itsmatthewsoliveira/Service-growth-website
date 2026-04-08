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
    <footer className="bg-[#0C0C0C] border-t border-white/5 py-12 md:py-16 px-4 md:px-6 text-[#B8B3AA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src="/logo-white.svg"
                alt="Service Growth AI"
                className="h-16 md:h-36 lg:h-44 w-auto"
              />
            </Link>
            <p className="text-[#7A766E] text-sm max-w-xs mb-4">
              AI that actually works for service businesses. Built by operators,
              for operators.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+19044542240" className="block text-[#B8B3AA] hover:text-[#C2703A] transition-colors">(904) 454-2240</a>
              <a href="mailto:hello@servicegrowth.ai" className="block text-[#B8B3AA] hover:text-[#C2703A] transition-colors">hello@servicegrowth.ai</a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[#F5F0E8] font-semibold mb-4">Pages</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#7A766E] text-sm hover:text-[#C2703A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#F5F0E8] font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#7A766E] text-sm hover:text-[#C2703A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[#F5F0E8] font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#7A766E] text-sm hover:text-[#C2703A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#7A766E] text-sm">
            © {new Date().getFullYear()} ServiceGrowth.ai. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
            <Link href="/community" className="text-[#7A766E] text-sm hover:text-[#C2703A] transition-colors">The Growth Lab</Link>
            <Link href="/free-website" className="text-[#7A766E] text-sm hover:text-[#C2703A] transition-colors">Free Website</Link>
            <Link href="/privacy" className="text-[#7A766E] text-sm hover:text-[#C2703A] transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[#7A766E] text-sm hover:text-[#C2703A] transition-colors">Terms</Link>
            <Link href="/contact" className="text-[#7A766E] text-sm hover:text-[#C2703A] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
