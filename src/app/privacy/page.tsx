import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Covercrete privacy policy - how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[var(--gray-900)] mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-[var(--gray-600)]">
            <p className="mb-6">
              Covercrete is committed to protecting your privacy. This policy
              explains how we collect, use, and safeguard your personal
              information in accordance with the Protection of Personal
              Information Act (POPIA).
            </p>

            <h2 className="text-2xl font-semibold text-[var(--gray-900)] mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect information you provide when requesting a quote,
              including your name, contact details, project location, and
              project requirements. We may also collect photos of your space if
              you choose to share them.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--gray-900)] mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Respond to your enquiries and provide quotes</li>
              <li>Schedule and complete your project</li>
              <li>Send project updates and follow-up communications</li>
              <li>Improve our services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[var(--gray-900)] mt-8 mb-4">
              Information Sharing
            </h2>
            <p className="mb-4">
              We do not sell or rent your personal information. We may share
              information with our regional installation teams to complete your
              project.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--gray-900)] mt-8 mb-4">
              Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration, or
              disclosure.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--gray-900)] mt-8 mb-4">
              Your Rights
            </h2>
            <p className="mb-4">
              Under POPIA, you have the right to access, correct, or delete your
              personal information. Contact us at info@covercrete.co.za to
              exercise these rights.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--gray-900)] mt-8 mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              For privacy-related enquiries, please contact us at
              info@covercrete.co.za.
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
