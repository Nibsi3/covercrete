import React from "react";
import { Camera, ClipboardCheck, Paintbrush, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "STEP_1_TITLE",
    description: "STEP_1_DESCRIPTION",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "STEP_2_TITLE",
    description: "STEP_2_DESCRIPTION",
  },
  {
    icon: Paintbrush,
    step: "03",
    title: "STEP_3_TITLE",
    description: "STEP_3_DESCRIPTION",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "STEP_4_TITLE",
    description: "STEP_4_DESCRIPTION",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            HOW_IT_WORKS_SECTION_TITLE
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            HOW_IT_WORKS_SECTION_SUBTITLE
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
