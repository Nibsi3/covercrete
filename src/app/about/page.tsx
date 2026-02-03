import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Factory,
  Users,
  Award,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Covercrete - South Africa's premium decorative concrete finish specialists. Made in our North West factory, serving Gauteng, Cape Town & KZN.",
};

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "14+", label: "Colour Options" },
  { value: "3", label: "Regional Teams" },
];

const values = [
  {
    icon: Factory,
    title: "Made in South Africa",
    description:
      "Our product is manufactured in our factory in the North West Province, ensuring quality control and supporting local industry.",
  },
  {
    icon: Users,
    title: "Expert Installation",
    description:
      "Our trained teams in Gauteng, Cape Town, and KZN deliver professional installation with attention to detail.",
  },
  {
    icon: Award,
    title: "Quality Materials",
    description:
      "We use premium cement and UV-stable sealers to ensure your finish looks beautiful for years to come.",
  },
  {
    icon: MapPin,
    title: "Nationwide Service",
    description:
      "With representation across South Africa, we can bring Covercrete to your project wherever you are.",
  },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "Share photos and measurements of your space. We'll discuss your vision and provide initial guidance.",
  },
  {
    step: "02",
    title: "Site Assessment",
    description:
      "We visit your property to assess the surfaces, identify any prep work needed, and provide an accurate quote.",
  },
  {
    step: "03",
    title: "Surface Preparation",
    description:
      "Proper preparation is key. We ensure surfaces are clean, primed, and ready for the Covercrete application.",
  },
  {
    step: "04",
    title: "Application",
    description:
      "Our skilled team applies multiple coats of Covercrete, building up the characteristic seamless finish.",
  },
  {
    step: "05",
    title: "Sealing",
    description:
      "We apply the appropriate sealer for your application - from residential matt to heavy-duty commercial.",
  },
  {
    step: "06",
    title: "Handover",
    description:
      "We walk you through care instructions and ensure you're completely satisfied with the result.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[var(--gray-900)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Transforming Spaces with
              <span className="text-[var(--accent)]"> Premium Finishes</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Covercrete is a cementitious screed that can adhere to a variety
              of surfaces. From floors to walls, bathrooms to pool surrounds, we
              help South Africans create beautiful, durable spaces. Our product
              is made to order in our factory in the North West, with
              representation in Gauteng, Cape Town and KZN.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" variant="white">
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[var(--gray-900)]"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--primary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Covercrete */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--gray-900)] mb-6">
                What is Covercrete?
              </h2>
              <div className="space-y-4 text-[var(--gray-600)]">
                <p>
                  Covercrete is a cementitious screed made up of a liquid base
                  mixed with either grey or white cement. It creates a seamless,
                  modern finish that can be applied to floors, walls, ceilings,
                  and even table tops.
                </p>
                <p>
                  Our product is made to order in our factory in the North West
                  Province.
                </p>
                <p>
                  Unlike traditional tiles or paint, Covercrete creates a
                  continuous surface without grout lines or joints. This gives
                  your space a clean, contemporary look while being incredibly
                  durable.
                </p>
                <p>
                  Our product can be installed directly over tiles (following
                  our installation guidelines), self-levelling screed floors, or
                  Rhinolite plastered walls. With over 14 colour options and
                  custom colours available, you can achieve exactly the look you
                  want.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Seamless finish with no grout lines",
                  "Durable and long-lasting",
                  "UV-stable sealer options",
                  "Suitable for indoor and outdoor use",
                  "Can be applied over existing tiles",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[var(--gray-700)]"
                  >
                    <CheckCircle className="h-5 w-5 text-[var(--primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--gray-900)] mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-[var(--gray-600)] max-w-2xl mx-auto">
              We're committed to quality, craftsmanship, and customer
              satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm border border-[var(--gray-100)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-2">
                  {value.title}
                </h3>
                <p className="text-[var(--gray-600)] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--gray-900)] mb-4">
              Our Process
            </h2>
            <p className="text-lg text-[var(--gray-600)] max-w-2xl mx-auto">
              From first contact to finished project, here's how we work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[var(--gray-600)] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--primary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Get in touch for a free quote. We'll help you choose the perfect
            colour and finish for your project.
          </p>
          <Link href="/contact">
            <Button size="xl" variant="white">
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
