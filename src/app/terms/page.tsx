import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Covercrete terms and conditions for services and products.",
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[var(--gray-900)] mb-8">
            Terms & Conditions
          </h1>
          <div className="prose prose-lg max-w-none text-[var(--gray-600)]">
            <p className="mb-6">
              These terms and conditions govern your use of Covercrete services
              and products. By engaging our services or purchasing our products,
              you agree to these terms.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--gray-900)] mt-8 mb-4">
              1. Services
            </h2>
            <p className="mb-4">
              Covercrete provides decorative concrete finishing services and DIY
              kits. All quotes are valid for 30 days unless otherwise stated.
              Final pricing is confirmed after a site assessment.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--gray-900)] mt-8 mb-4">
              2. Payment Terms
            </h2>
            <p className="mb-4">
              A deposit is required before work commences. The balance is due
              upon completion of the project. Payment terms will be specified in
              your quote.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--gray-900)] mt-8 mb-4">
              3. Preparation & Access
            </h2>
            <p className="mb-4">
              The client is responsible for ensuring clear access to the work
              area. Any additional preparation work required (such as tile
              removal or wall skimming) will be quoted separately.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--gray-900)] mt-8 mb-4">
              4. Warranty
            </h2>
            <p className="mb-4">
              Covercrete installations are warranted against defects in
              workmanship. The warranty does not cover damage caused by misuse,
              improper maintenance, or structural movement.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--gray-900)] mt-8 mb-4">
              5. DIY Kits
            </h2>
            <p className="mb-4">
              DIY kits are sold as-is. We provide instructions and support, but
              the final result depends on proper application. We recommend
              professional installation for best results.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--gray-900)] mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="mb-4">
              Covercrete's liability is limited to the value of the services or
              products provided. We are not liable for consequential damages.
            </p>

            <p className="mt-8 text-sm text-[var(--gray-500)]">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
