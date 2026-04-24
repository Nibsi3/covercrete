import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-[var(--bg)] to-[var(--bg-elevated)] relative overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/20 rounded-full blur-[150px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            FINAL_CTA_HEADLINE
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            FINAL_CTA_SUBTITLE
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-[0_20px_40px_var(--accent-glow)] hover:scale-105"
            >
              FINAL_CTA_PRIMARY_BUTTON
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/27725861495?text=Hi%2C%20I%27m%20interested%20in%20Covercrete%20finishes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/[0.05] border border-white/[0.1] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-white/[0.1]"
            >
              <MessageCircle className="h-5 w-5" />
              FINAL_CTA_SECONDARY_BUTTON
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[var(--text-muted)]">
            <a href="tel:CONTACT_PHONE_1" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
              <span>CONTACT_NAME_1: CONTACT_PHONE_1_DISPLAY</span>
            </a>
            <a href="tel:CONTACT_PHONE_2" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
              <span>CONTACT_NAME_2: CONTACT_PHONE_2_DISPLAY</span>
            </a>
            <a href="tel:CONTACT_PHONE_3" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
              <span>CONTACT_NAME_3: CONTACT_PHONE_3_DISPLAY</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
