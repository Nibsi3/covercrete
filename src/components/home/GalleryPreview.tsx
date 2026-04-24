import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/data/gallery";

export function GalleryPreview() {
  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="py-24 bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              GALLERY_SECTION_TITLE
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl">
              GALLERY_SECTION_SUBTITLE
            </p>
          </div>
          <Link href="/gallery" className="group flex items-center gap-2 text-[var(--primary-light)] font-medium hover:text-[var(--primary)] transition-colors">
            GALLERY_BUTTON_TEXT
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-[var(--bg-card)] border border-white/[0.06] cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.afterImage}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Image tint */}
              <div className="absolute inset-0 bg-black/25" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/30 text-[var(--primary-light)] text-xs font-medium mb-3">
                    {item.colour}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm">
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Before/After badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium">
                Before & After
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
