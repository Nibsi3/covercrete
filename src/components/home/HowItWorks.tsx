import React from "react";
import { Camera, ClipboardCheck, Paintbrush, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Share Your Project",
    description: "Send us photos and measurements of your space. Tell us about the surfaces you want to cover.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Site Assessment",
    description: "We'll arrange a site visit to assess prep work needed and provide an accurate quote.",
  },
  {
    icon: Paintbrush,
    step: "03",
    title: "Professional Installation",
    description: "Our skilled team applies Covercrete and sealer. Most projects take 3-15 days.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Enjoy Your Space",
    description: "Your transformed space is ready to use. We provide care instructions for lasting beauty.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            From first contact to finished project, here's what to expect.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center p-6 rounded-2xl bg-[var(--bg-card)] border border-white/[0.06] hover:border-[var(--primary)]/30 transition-all">
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/10 mb-6">
                  <step.icon className="h-7 w-7 text-[var(--primary-light)]" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[var(--primary)] text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
