import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Covercrete tools list. Please contact us to enquire about the latest tool pricing and availability.",
};

const tools = [
  "Pool Trowel Standard Stainless Steel 280mm",
  "Skimming Trowel Superflex Stainless Steel 280mm",
  "Putty Knife 100mm Ultra Stainless Steel",
  "Putty Knife 125mm Ultra Stainless Steel",
  "Mock Mohair Roller Refills 230mm",
  "Wall & Ceiling Roller Refills 230mm",
  "Classic IQ60 Paint Brushes 50mm",
];

export default function ToolsPage() {
  return (
    <div className="pt-24 bg-[var(--bg)] min-h-screen">
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Tools
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Please contact us to enquire about the latest tool pricing.
            </p>
          </div>

          <div className="bg-[var(--bg-card)] border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Tool List
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[var(--text-secondary)]"
                >
                  {tool}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button size="lg">Contact for Tool Pricing</Button>
              </Link>
              <a
                href="https://wa.me/27725861495?text=Hi%2C%20please%20send%20me%20your%20latest%20tool%20pricing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
