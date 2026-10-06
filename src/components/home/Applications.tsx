import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const applications = [
  {
    title: "Floor Finishes",
    description: "A seamless finish over self-level screed or prepared tiles.",
    image: "/images/gallery/elephant-skin-after.jpg",
    href: "/gallery",
  },
  {
    title: "Walls & Ceilings",
    description: "Choose a raw, colour-sealed or polyurethane-sealed finish.",
    image: "/images/colours/beach.jpg",
    href: "/colours",
  },
  {
    title: "Table Tops",
    description: "Explore colours and discuss the preparation for your surface.",
    image: "/images/colours/mushroom.jpg",
    href: "/contact",
  },
];

export function Applications() {
  return (
    <section className="py-24 bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From Floor to Ceiling
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Explore the surfaces that can be finished with Covercrete.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <Link
              key={index}
              href={app.href}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-[var(--bg-card)] border border-white/[0.06]"
            >
              {/* Image */}
              <Image
                src={app.image}
                alt={app.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Image tint */}
              <div className="absolute inset-0 bg-black/25" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--primary-light)] transition-colors">
                  {app.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                  {app.description}
                </p>
                <div className="flex items-center gap-2 text-[var(--primary-light)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Options
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
