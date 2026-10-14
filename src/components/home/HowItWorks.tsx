import React from "react";
import { Camera, ClipboardCheck, Paintbrush, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Share Your Project",
    description: "Get in touch with your location, surface type and area. Photos help explain what you have in mind.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Assess the Surface",
    description: "A site visit establishes the preparation needed and confirms installation costs.",
  },
  {
    icon: Paintbrush,
    step: "03",
    title: "Choose Your Finish",
    description: "Explore the colours and choose the appropriate wall finish or floor sealer.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Prepare and Apply",
    description: "Follow the installation guidelines for surface preparation, application and sealing.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Plan Your Transformation
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Start with your surface and finish requirements, then confirm the details with Mineralis.
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
