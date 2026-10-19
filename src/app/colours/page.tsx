import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { colours } from "@/data/colours";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Colour Options",
  description:
    "Explore our range of 14+ Mineralis colour options. From crisp whites to deep charcoals, find the perfect finish for your space.",
};

export default function ColoursPage() {
  return (
    <div className="pt-24 bg-[var(--bg)] min-h-screen">
      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Colour Options
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Choose from our curated range of colours, or request a custom
              colour to match your vision. Each colour brings its own character
              to your space.
            </p>
          </div>
        </div>
      </section>

      {/* Colour Grid */}
      <section className="py-8 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {colours.map((colour) => (
              <Link
                key={colour.id}
                href={`/colours/${colour.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl bg-[var(--bg-card)] border border-white/[0.06] hover:border-[var(--primary)]/50 transition-all hover:scale-[1.02]">
                  {/* Colour image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={colour.image}
                      alt={colour.name}
                      fill
                      className="object-cover origin-top-left scale-[3]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Price badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-[var(--primary)]/90 backdrop-blur-sm text-white text-xs font-medium">
                      From {colour.pricing.overSmooth.split(' ')[0]}/m²
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 bg-[var(--bg-card)]">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white group-hover:text-[var(--primary-light)] transition-colors">
                        {colour.name}
                      </h3>
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white/20"
                        style={{ backgroundColor: colour.hex }}
                      />
                    </div>
                    <p className="text-xs text-[var(--text-muted)] line-clamp-2 mb-3">
                      {colour.description.substring(0, 80)}...
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--text-secondary)]">
                        Min: {colour.pricing.minArea.split('/')[0]}
                      </span>
                      <span className="text-[var(--primary-light)] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        View Details <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Custom colour note */}
          <div className="mt-16 text-center p-8 bg-[var(--bg-card)] border border-white/[0.06] rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">
              Need a Custom Colour?
            </h3>
            <p className="text-[var(--text-secondary)] mb-4">
              We can create custom colours to match your specific requirements.
              Contact us to discuss your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[var(--primary-light)] font-medium hover:text-[var(--primary)] transition-colors"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
