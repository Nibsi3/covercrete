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
    title: "Durable & Long-Lasting",
    description:
      "UV-stable sealers protect your finish for years. Suitable for high-traffic areas and outdoor use.",
  },
  {
    icon: Palette,
    title: "14+ Colour Options",
    description:
      "From crisp whites to deep charcoals, find the perfect shade. Custom colours available on request.",
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description:
      "Most projects completed in 3-15 days. Minimal disruption to your home or business.",
  },
  {
    icon: Sparkles,
    title: "Seamless Finish",
    description:
      "No grout lines, no joints. Create a continuous, modern look throughout your space.",
  },
  {
    icon: Hammer,
    title: "No Demolition Needed",
    description:
      "Apply directly over tiles, screed, or plaster. Save time and money on removal.",
  },
  {
    icon: ThumbsUp,
    title: "Expert Installation",
    description:
      "Professional teams in Gauteng, Cape Town & KZN. Quality workmanship guaranteed.",
  },
];

export function USPs() {
  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose Covercrete?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            The smart choice for modern, durable surfaces that stand the test of time.
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
