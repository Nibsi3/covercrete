"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryItems, applicationLabels, GalleryItem } from "@/data/gallery";
import { X } from "lucide-react";

const filters: Array<GalleryItem["application"] | "all"> = [
  "all",
  "floor",
  "wall",
  "bathroom",
  "outdoor",
  "pool",
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<
    GalleryItem["application"] | "all"
  >("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [showAfter, setShowAfter] = useState(true);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.application === activeFilter);

  return (
    <div className="pt-24 bg-[var(--bg)] min-h-screen">
      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Project Gallery
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              See the transformation. Real before and after photos from our
              projects across South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white"
                    : "bg-white/[0.05] text-[var(--text-secondary)] hover:bg-white/[0.1]"
                }`}
              >
                {filter === "all" ? "All Projects" : applicationLabels[filter]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-[var(--bg-card)] border border-white/[0.06] cursor-pointer"
              >
                {/* After Image */}
                <Image
                  src={item.afterImage}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="inline-block self-start px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--gray-900)] text-xs font-medium mb-3">
                    {item.colour}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm">{item.location}</p>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 text-[var(--gray-700)] text-xs font-medium">
                  {applicationLabels[item.application]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image area */}
            <div className="relative aspect-video bg-[var(--bg-card)]">
              <Image
                src={showAfter ? selectedItem.afterImage : selectedItem.beforeImage}
                alt={selectedItem.title}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button
                  onClick={() => setShowAfter(false)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    !showAfter
                      ? "bg-white text-[var(--gray-900)]"
                      : "bg-black/50 text-white"
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setShowAfter(true)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    showAfter
                      ? "bg-white text-[var(--gray-900)]"
                      : "bg-black/50 text-white"
                  }`}
                >
                  After
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--gray-900)]">
                    {selectedItem.title}
                  </h3>
                  <p className="text-[var(--gray-500)]">
                    {selectedItem.location}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--gray-900)] text-sm font-medium">
                  {selectedItem.colour}
                </span>
              </div>
              <p className="text-[var(--gray-600)]">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
