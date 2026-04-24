"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg)]">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--primary)]/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--accent)]/15 rounded-full blur-[128px] animate-pulse delay-1000" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="text-sm text-[var(--primary-light)] font-medium">BUSINESS_TAGLINE_PLACEHOLDER</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
            HEADLINE_LINE_1
            <br />
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--accent)] bg-clip-text text-transparent">
              HEADLINE_LINE_2
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed">
            BUSINESS_DESCRIPTION_PLACEHOLDER. 
            BENEFIT_STATEMENT_PLACEHOLDER.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-[0_20px_40px_var(--accent-glow)] hover:scale-105"
            >
              PRIMARY_CTA_TEXT
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gallery"
              className="group flex items-center gap-3 bg-white/[0.05] border border-white/[0.1] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-white/[0.1]"
            >
              <Play className="h-5 w-5" />
              SECONDARY_CTA_TEXT
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">STAT_1_NUMBER</div>
              <div className="text-sm text-[var(--text-muted)]">STAT_1_LABEL</div>
            </div>
            <div className="text-center border-x border-white/[0.08]">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">STAT_2_NUMBER</div>
              <div className="text-sm text-[var(--text-muted)]">STAT_2_LABEL</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">STAT_3_NUMBER</div>
              <div className="text-sm text-[var(--text-muted)]">STAT_3_LABEL</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </section>
  );
}
