"use client";

import React from "react";
import { 
  Shield, 
  Palette, 
  Clock, 
  Sparkles, 
  Hammer, 
  ThumbsUp 
} from "lucide-react";

const usps = [
  {
    icon: Shield,
    title: "USP_1_TITLE",
    description: "USP_1_DESCRIPTION",
  },
  {
    icon: Palette,
    title: "USP_2_TITLE",
    description: "USP_2_DESCRIPTION",
  },
  {
    icon: Clock,
    title: "USP_3_TITLE",
    description: "USP_3_DESCRIPTION",
  },
  {
    icon: Sparkles,
    title: "USP_4_TITLE",
    description: "USP_4_DESCRIPTION",
  },
  {
    icon: Hammer,
    title: "USP_5_TITLE",
    description: "USP_5_DESCRIPTION",
  },
  {
    icon: ThumbsUp,
    title: "USP_6_TITLE",
    description: "USP_6_DESCRIPTION",
  },
];

export function USPs() {
  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            USP_SECTION_TITLE
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            USP_SECTION_SUBTITLE
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-[var(--bg-card)] border border-white/[0.06] hover:border-[var(--primary)]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--primary)]/20 transition-colors">
                <usp.icon className="h-6 w-6 text-[var(--primary-light)]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {usp.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
