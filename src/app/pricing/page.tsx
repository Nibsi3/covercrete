import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing Guide",
  description:
    "Mineralis pricing guide. Installation over tiles from R540-R590 per m² (ex VAT). Installation over smooth surfaces from R420-R475 per m² (ex VAT). DIY kits from R1,060 (incl VAT).",
};

const installationPricing = [
  {
    surface: "Over Tiles",
    priceRange: "R540 - R590",
    unit: "per m² ex VAT",
    note: "Region dependent",
  },
  {
    surface: "Over Smooth Surface",
    priceRange: "R420 - R475",
    unit: "per m² ex VAT",
    note: "Self-level screed or Rhinolite",
  },
  {
    surface: "Walls (No Sealer)",
    priceRange: "Contact for quote",
    unit: "per m² ex VAT",
    note: "Raw, sanded finish",
  },
  {
    surface: "Walls (Colour Sealer)",
    priceRange: "Contact for quote",
    unit: "per m² ex VAT",
    note: "Sheen finish, wipeable",
  },
  {
    surface: "Walls (PU Sealer)",
    priceRange: "Contact for quote",
    unit: "per m² ex VAT",
    note: "High traffic, showers & outdoors",
  },
];

const kitPricing = [
  {
    name: "Small Kit",
    coverage: "5-12 m²",
    price: "R1,060",
    includes: ["Liquid base", "Cement", "Colour Sealer (sheen)"],
  },
  {
    name: "Medium Kit",
    coverage: "12-20 m²",
    price: "R2,080",
    includes: ["Liquid base", "Cement", "Colour Sealer (sheen)"],
  },
  {
    name: "Large Kit",
    coverage: "20-40 m²",
    price: "R3,625",
    includes: ["Liquid base", "Cement", "Colour Sealer (sheen)"],
    popular: true,
  },
];

const sealerOptions = [
  {
    name: "Light/Residential PU",
    price: "R1,380 (incl VAT)",
    coverage: "20 m² (2 coats)",
    finishes: ["Matt", "Sheen", "Gloss"],
    suitable: "Residential floors, suitable for showers",
  },
  {
    name: "Medium Duty PU",
    price: "Contact for quote",
    coverage: "Varies",
    finishes: ["High Sheen"],
    suitable: "Garage floors",
  },
  {
    name: "Heavy Duty PU",
    price: "Contact for quote",
    coverage: "Varies",
    finishes: ["Matt", "Gloss"],
    suitable: "Garages, showers, pools",
  },
];

const wallFinishOptions = [
  {
    name: "No Sealer (Raw & Sanded)",
    description:
      "Matt/flat look with a powdery feel. Best for low-traffic areas.",
    note: "Walls only",
  },
  {
    name: "2x Coats Colour Sealer",
    description:
      "Wipe-able and water resistant. Sheen finish only and creates a mottled effect.",
    note: "General areas",
  },
  {
    name: "2x Coats PU Sealer",
    description:
      "For high traffic areas. Used in showers and outdoors. Matt, Sheen & Gloss finish.",
    note: "High traffic / wet areas",
  },
];

const faqs = [
  {
    question: "What affects the price?",
    answer:
      "The main factors are: surface type (tiles cost more than smooth surfaces), area size, sealer type, and location. A site visit helps us provide an accurate quote.",
  },
  {
    question: "What's the minimum project size?",
    answer:
      "Minimum 30m² for smooth surfaces, 45m² for tile coverage. This ensures the project is economically viable for both parties.",
  },
  {
    question: "Are there additional costs?",
    answer:
      "Call-out fee is R550 ex VAT per day (Gauteng & George/Mossel Bay). Prep work like tile removal or wall skimming is quoted separately after site assessment.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Projects typically take 3-15 days depending on size and complexity. Larger projects or those requiring multiple sealer coats may take up to 20 days.",
  },
  {
    question: "Can I install it myself?",
    answer:
      "Yes! Our DIY kits come with instructions. They're ideal for smaller projects or hands-on homeowners. We're always available for guidance.",
  },
  {
    question: "What about shipping for DIY kits?",
    answer:
      "Shipping for 1x Large Kit is R850 (incl VAT) outside Gauteng. Multiple kits are quoted accordingly.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--gray-900)] mb-6">
              Pricing Guide
            </h1>
            <p className="text-lg text-[var(--gray-600)] max-w-2xl mx-auto">
              Transparent pricing for professional installation and DIY kits.
              Final costs depend on your specific project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Pricing */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--gray-900)] mb-4">
              Professional Installation
            </h2>
            <p className="text-[var(--gray-600)]">
              Our team handles everything from prep to sealing. Prices vary by
              region and project specifics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {installationPricing.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[var(--gray-50)] rounded-2xl border border-[var(--gray-100)]"
              >
                <h3 className="font-semibold text-[var(--gray-900)] mb-2">
                  {item.surface}
                </h3>
                <div className="text-2xl font-bold text-[var(--primary)] mb-1">
                  {item.priceRange}
                </div>
                <div className="text-sm text-[var(--gray-500)] mb-2">
                  {item.unit}
                </div>
                <div className="text-xs text-[var(--gray-400)]">
                  {item.note}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl text-blue-800">
            <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm">
              <strong>Note:</strong> These are guide prices. Final costs are
              confirmed on final inspection prior to installation and after a
              site visit to assess prep work requirements. Call-out fee: R550 ex
              VAT per day (Gauteng & George/Mossel Bay). Projects typically take
              3–15 days depending on size and may take up to 15–20 days.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[var(--gray-50)] rounded-xl border border-[var(--gray-100)]">
              <div className="text-sm font-semibold text-[var(--gray-900)] mb-1">
                Minimum Charge
              </div>
              <div className="text-sm text-[var(--gray-600)]">
                30m² over smooth surfaces
              </div>
              <div className="text-sm text-[var(--gray-600)]">45m² over tiles</div>
            </div>
            <div className="p-4 bg-[var(--gray-50)] rounded-xl border border-[var(--gray-100)]">
              <div className="text-sm font-semibold text-[var(--gray-900)] mb-1">
                What Affects Cost
              </div>
              <div className="text-sm text-[var(--gray-600)]">
                Tiles cost more per m² than smooth surfaces due to prep.
              </div>
            </div>
            <div className="p-4 bg-[var(--gray-50)] rounded-xl border border-[var(--gray-100)]">
              <div className="text-sm font-semibold text-[var(--gray-900)] mb-1">
                Representation
              </div>
              <div className="text-sm text-[var(--gray-600)]">
                Teams in Gauteng, Cape Town & KZN.
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 bg-[var(--gray-50)] rounded-2xl border border-[var(--gray-100)]">
            <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-2">
              Additional Info
            </h3>
            <p className="text-sm text-[var(--gray-600)] leading-relaxed mb-4">
              Costs can only be confirmed on final inspection prior to
              installation. A site visit is essential to assess what needs to be
              covered and whether any extensive prep work is required.
            </p>
            <ul className="text-sm text-[var(--gray-600)] space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--gray-400)]" />
                <span>
                  Additional work may be required (e.g. removal of tiles or
                  carpets).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--gray-400)]" />
                <span>
                  Self-level screed installation or wall skimming may be needed
                  depending on the existing surface.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* DIY Kits */}
      <section className="py-16 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--gray-900)] mb-4">
              DIY Kits
            </h2>
            <p className="text-[var(--gray-600)]">
              Perfect for hands-on homeowners. All kits include liquid base,
              cement, and colour sealer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kitPricing.map((kit, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border-2 ${
                  kit.popular
                    ? "border-[var(--primary)] bg-white shadow-lg"
                    : "border-[var(--gray-200)] bg-white"
                }`}
              >
                {kit.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--primary)] text-white text-xs font-semibold rounded-full">
                    Large Kit
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[var(--gray-900)] mb-2">
                  {kit.name}
                </h3>
                <div className="text-sm text-[var(--gray-500)] mb-4">
                  Covers {kit.coverage}
                </div>
                <div className="text-3xl font-bold text-[var(--gray-900)] mb-6">
                  {kit.price}
                  <span className="text-sm font-normal text-[var(--gray-500)]">
                    {" "}
                    incl VAT
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {kit.includes.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-[var(--gray-600)]"
                    >
                      <Check className="h-4 w-4 text-[var(--primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    variant={kit.popular ? "default" : "outline"}
                    className="w-full"
                  >
                    Order Kit
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-[var(--gray-500)]">
            Coverage depends on the surface and texture. Figures are estimates
            for 2 coats. Coverage over tiles is reduced (Large kit: 10–15m² over
            tiles). Shipping outside Gauteng: R850 (incl VAT) for 1x Large Kit.
            Multiple kits are quoted accordingly.
          </div>
        </div>
      </section>

      {/* Sealer Options */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--gray-900)] mb-4">
              Sealer Options
            </h2>
            <p className="text-[var(--gray-600)]">
              Choose the right sealer for your application. All are UV-stable
              and applied as a 2-coat system.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--gray-200)]">
                  <th className="text-left py-4 px-4 font-semibold text-[var(--gray-900)]">
                    Sealer Type
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-[var(--gray-900)]">
                    Price (5L)
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-[var(--gray-900)]">
                    Coverage
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-[var(--gray-900)]">
                    Finishes
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-[var(--gray-900)]">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                {sealerOptions.map((sealer, index) => (
                  <tr
                    key={index}
                    className="border-b border-[var(--gray-100)]"
                  >
                    <td className="py-4 px-4 font-medium text-[var(--gray-900)]">
                      {sealer.name}
                    </td>
                    <td className="py-4 px-4 text-[var(--gray-600)]">
                      {sealer.price}
                    </td>
                    <td className="py-4 px-4 text-[var(--gray-600)]">
                      {sealer.coverage}
                    </td>
                    <td className="py-4 px-4 text-[var(--gray-600)]">
                      {sealer.finishes.join(", ")}
                    </td>
                    <td className="py-4 px-4 text-[var(--gray-600)]">
                      {sealer.suitable}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-sm text-[var(--gray-500)]">
            Non-slip additive available: R150 (incl VAT) per 1kg (500g per 1x
            5L sealer). PU is UV-stable and can be used outdoors and in showers.
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[var(--gray-900)] mb-4">
              Wall Finish Options
            </h3>
            <p className="text-[var(--gray-600)] mb-6">
              Walls have 3 finish options depending on traffic and water
              exposure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wallFinishOptions.map((opt) => (
                <div
                  key={opt.name}
                  className="p-6 bg-[var(--gray-50)] rounded-2xl border border-[var(--gray-100)]"
                >
                  <div className="font-semibold text-[var(--gray-900)] mb-2">
                    {opt.name}
                  </div>
                  <div className="text-sm text-[var(--gray-600)] mb-3">
                    {opt.description}
                  </div>
                  <div className="text-xs text-[var(--gray-500)]">{opt.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[var(--gray-900)] mb-4">
              Tools
            </h2>
            <p className="text-[var(--gray-600)]">
              Please contact us to enquire about the latest tool pricing.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[var(--gray-100)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-sm text-[var(--gray-600)]">
              View the full tools list on our Tools page.
            </div>
            <Link href="/tools">
              <Button variant="outline">View Tools</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--gray-900)] mb-4">
              Pricing FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl">
                <h3 className="font-semibold text-[var(--gray-900)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-[var(--gray-600)] text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get an Accurate Quote
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Every project is unique. Share your details with Mineralis to
            discuss a quote based on your surface and preparation requirements.
          </p>
          <Link href="/contact">
            <Button size="xl" variant="white">
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
