import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Colours", href: "/colours" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pricing", href: "/pricing" },
    { name: "Tools", href: "/tools" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Floor Finishes", href: "/colours" },
    { name: "Wall Finishes", href: "/colours" },
    { name: "Bathroom & Showers", href: "/colours" },
    { name: "Pool Surrounds", href: "/colours" },
    { name: "DIY Kits", href: "/pricing" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-white/[0.06] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-tight text-white">
                Mineralis
              </span>
              <span className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
                Decorative Finishes
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
              Premium cementitious screed finishes for floors, walls, and more.
              Transform your space with our durable, modern decorative concrete
              solutions.
            </p>
            <div className="flex gap-4">
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Applications
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/concept"
                  className="flex items-start gap-3 text-[var(--text-secondary)] hover:text-white transition-colors text-sm"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div>Fictional brand</div>
                    <div>Independent design study</div>
                    <div>No business contact service</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/concept"
                  className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>Local demo only</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[var(--text-secondary)] text-sm">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div>Design exploration</div>
                    <div className="text-xs mt-1">Original concept illustrations</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--text-muted)] text-sm">
              © {new Date().getFullYear()} Mineralis. Independent concept design.
            </p>
            <div className="flex gap-6">
              <Link
                href="/terms"
                className="text-[var(--text-muted)] hover:text-white transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-[var(--text-muted)] hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
