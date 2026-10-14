import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { colours, getColourById } from "@/data/colours";
import { ArrowLeft, ArrowRight, Check, Package, Ruler, MessageCircle } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return colours.map((colour) => ({
    id: colour.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const colour = getColourById(id);

  if (!colour) {
    return {
      title: "Colour Not Found",
    };
  }

  return {
    title: `${colour.name} - Mineralis Colour`,
    description: colour.description,
  };
}

export default async function ColourDetailPage({ params }: Props) {
  const { id } = await params;
  const colour = getColourById(id);

  if (!colour) {
    notFound();
  }

  const currentIndex = colours.findIndex((c) => c.id === id);
  const prevColour = currentIndex > 0 ? colours[currentIndex - 1] : null;
  const nextColour =
    currentIndex < colours.length - 1 ? colours[currentIndex + 1] : null;

  return (
    <div className="pt-24 bg-[var(--bg)] min-h-screen">
      {/* Breadcrumb */}
      <div className="py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/colours" className="hover:text-white transition-colors">
              Colours
            </Link>
            <span>/</span>
            <span className="text-white">{colour.name}</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Colour image */}
            <div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/[0.06]">
                <Image
                  src={colour.image}
                  alt={colour.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl border-2 border-white/20"
                  style={{ backgroundColor: colour.hex }}
                />
                <span className="text-[var(--text-secondary)] font-mono">{colour.hex}</span>
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">
                {colour.name}
              </h1>
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                {colour.description}
              </p>

              {/* Undertones */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  Undertones
                </h3>
                <p className="text-white">{colour.undertones}</p>
              </div>

              {/* Best for */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  Best For
                </h3>
                <ul className="space-y-2">
                  {colour.bestFor.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-[var(--text-secondary)]"
                    >
                      <Check className="h-5 w-5 text-[var(--primary-light)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Section */}
              <div className="mb-8 p-6 bg-[var(--bg-card)] border border-white/[0.06] rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-[var(--primary-light)]" />
                  Installation Pricing (ex VAT)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/[0.03] rounded-xl">
                    <div className="text-sm text-[var(--text-muted)] mb-1">Over Tiles</div>
                    <div className="text-xl font-bold text-white">{colour.pricing.overTiles}</div>
                    <div className="text-xs text-[var(--text-muted)]">per m²</div>
                  </div>
                  <div className="p-4 bg-white/[0.03] rounded-xl">
                    <div className="text-sm text-[var(--text-muted)] mb-1">Over Smooth Surface</div>
                    <div className="text-xl font-bold text-white">{colour.pricing.overSmooth}</div>
                    <div className="text-xs text-[var(--text-muted)]">per m²</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-xl">
                  <div className="text-sm text-[var(--primary-light)]">
                    <strong>Minimum Area:</strong> {colour.pricing.minArea}
                  </div>
                </div>
              </div>

              {/* DIY Kit Coverage */}
              <div className="mb-8 p-6 bg-[var(--bg-card)] border border-white/[0.06] rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-[var(--primary-light)]" />
                  DIY Kit Coverage
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-white/[0.03] rounded-xl">
                    <div className="text-xs text-[var(--text-muted)] mb-1">Small</div>
                    <div className="text-sm font-semibold text-white">{colour.kitCoverage.small}</div>
                  </div>
                  <div className="text-center p-3 bg-white/[0.03] rounded-xl">
                    <div className="text-xs text-[var(--text-muted)] mb-1">Medium</div>
                    <div className="text-sm font-semibold text-white">{colour.kitCoverage.medium}</div>
                  </div>
                  <div className="text-center p-3 bg-white/[0.03] rounded-xl">
                    <div className="text-xs text-[var(--text-muted)] mb-1">Large</div>
                    <div className="text-sm font-semibold text-white">{colour.kitCoverage.large}</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={`/contact?colour=${colour.id}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white px-6 py-4 rounded-xl font-medium hover:shadow-[0_10px_30px_var(--accent-glow)] transition-all"
                >
                  Try Demo Enquiry for {colour.name}
                </Link>
                <a
                  href={`/concept`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/[0.05] border border-white/[0.1] text-white px-6 py-4 rounded-xl font-medium hover:bg-white/[0.1] transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  Concept details
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-white/[0.06] flex justify-between">
            {prevColour ? (
              <Link
                href={`/colours/${prevColour.id}`}
                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>{prevColour.name}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextColour ? (
              <Link
                href={`/colours/${nextColour.id}`}
                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-white transition-colors"
              >
                <span>{nextColour.name}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
