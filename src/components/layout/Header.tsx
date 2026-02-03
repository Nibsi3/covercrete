"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/colours", label: "Colours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/tools", label: "Tools" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-6">
      {/* Desktop Pill Navigation */}
      <nav
        className="hidden lg:block mx-auto transition-all duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)]"
        style={{ width: isHovered ? "100%" : "720px", maxWidth: "1200px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex items-center transition-all duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)] bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full ${
            isHovered
              ? "px-11 py-4 shadow-[0_30px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]"
              : "px-6 py-3.5"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`transition-transform duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)] ${
              isHovered ? "-translate-x-4" : ""
            }`}
          >
            <Image
              src="/images/logo_white.png"
              alt="Covercrete"
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Nav Links */}
          <ul className="flex items-center gap-7 mx-auto">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-[var(--text-secondary)] text-sm hover:text-white transition-colors group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1.5 w-full h-0.5 bg-[var(--primary)] scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className={`bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)] hover:shadow-[0_10px_30px_var(--accent-glow)] ${
              isHovered ? "translate-x-4" : ""
            }`}
          >
            Get a Quote
          </Link>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full px-5 py-3">
        <Link href="/">
          <Image
            src="/images/logo_white.png"
            alt="Covercrete"
            width={120}
            height={35}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-1"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mt-2 bg-[var(--bg-card)] backdrop-blur-xl border rounded-3xl overflow-hidden grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
          isMobileMenuOpen
            ? "grid-rows-[1fr] border-white/[0.08]"
            : "grid-rows-[0fr] pointer-events-none border-transparent"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`p-4 space-y-1 transition-opacity duration-500 ease-out ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-[var(--text-secondary)] hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-white/[0.08]">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white py-3 rounded-xl font-medium"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
