"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { colours } from "@/data/colours";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Upload,
} from "lucide-react";

const projectTypes = [
  "Floor Finish",
  "Wall Finish",
  "Bathroom / Shower",
  "Outdoor / Patio",
  "Pool Surround",
  "Countertop / Table",
  "Other",
];

const surfaceTypes = [
  "Tiles",
  "Screed / Concrete",
  "Plaster / Rhinolite",
  "Other",
];

const timelines = [
  "ASAP",
  "Within 2-4 weeks",
  "1-3 months",
  "Just planning",
];

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageInner />
    </Suspense>
  );
}

function ContactPageInner() {
  const searchParams = useSearchParams();
  const preselectedColour = searchParams.get("colour") || "";

  const [formData, setFormData] = useState(() => ({
    name: "",
    phone: "",
    email: "",
    city: "",
    projectType: "",
    surfaceType: "",
    size: "",
    colour: preselectedColour,
    timeline: "",
    message: "",
    consent: false,
  }));

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-[var(--gray-50)]">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-[var(--gray-900)] mb-4">
            Thank You!
          </h1>
          <p className="text-[var(--gray-600)] mb-8">
            We've received your enquiry and will get back to you within 24
            hours. In the meantime, feel free to reach out via WhatsApp for
            faster response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/27725861495?text=Hi%2C%20I%20just%20submitted%20a%20quote%20request%20on%20your%20website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" className="w-full sm:w-auto">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
            <Link href="/gallery">
              <Button variant="outline" className="w-full sm:w-auto">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--gray-900)] mb-6">
              Get a Free Quote
            </h1>
            <p className="text-lg text-[var(--gray-600)] max-w-2xl mx-auto">
              Tell us about your project and we'll provide a detailed cost
              estimate. Most quotes are returned within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Details */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">
                    Your Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[var(--gray-700)] mb-1"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[var(--gray-700)] mb-1"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                        placeholder="072 123 4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--gray-700)] mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-[var(--gray-700)] mb-1"
                      >
                        City / Area *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                        placeholder="e.g. Sandton, Cape Town"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">
                    Project Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-[var(--gray-700)] mb-1"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors bg-white"
                      >
                        <option value="">Select type...</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="surfaceType"
                        className="block text-sm font-medium text-[var(--gray-700)] mb-1"
                      >
                        Current Surface *
                      </label>
                      <select
                        id="surfaceType"
                        name="surfaceType"
                        required
                        value={formData.surfaceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors bg-white"
                      >
                        <option value="">Select surface...</option>
                        {surfaceTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="size"
                        className="block text-sm font-medium text-[var(--gray-700)] mb-1"
                      >
                        Approximate Size (m²)
                      </label>
                      <input
                        type="text"
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors"
                        placeholder="e.g. 50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="colour"
                        className="block text-sm font-medium text-[var(--gray-700)] mb-1"
                      >
                        Preferred Colour
                      </label>
                      <select
                        id="colour"
                        name="colour"
                        value={formData.colour}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors bg-white"
                      >
                        <option value="">Not sure yet</option>
                        {colours.map((colour) => (
                          <option key={colour.id} value={colour.id}>
                            {colour.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-[var(--gray-700)] mb-1"
                      >
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors bg-white"
                      >
                        <option value="">Select timeline...</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--gray-700)] mb-1"
                  >
                    Tell us more about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--gray-300)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-colors resize-none"
                    placeholder="Describe your project, any specific requirements, or questions you have..."
                  />
                </div>

                {/* Photo upload hint */}
                <div className="p-4 bg-[var(--gray-50)] rounded-lg border border-dashed border-[var(--gray-300)]">
                  <div className="flex items-start gap-3">
                    <Upload className="h-5 w-5 text-[var(--gray-400)] mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[var(--gray-700)]">
                        Have photos of your space?
                      </p>
                      <p className="text-sm text-[var(--gray-500)]">
                        Send them via WhatsApp after submitting this form for a
                        more accurate quote.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-[var(--gray-300)] text-[var(--primary)] focus:ring-[var(--primary)]"
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-[var(--gray-600)]"
                  >
                    I consent to Covercrete contacting me regarding my enquiry.
                    View our{" "}
                    <Link
                      href="/privacy"
                      className="text-[var(--primary)] hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Enquiry
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact info */}
                <div className="p-6 bg-[var(--gray-50)] rounded-2xl">
                  <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">
                    Contact Us Directly
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="tel:+27725861495"
                        className="flex items-center gap-3 text-[var(--gray-600)] hover:text-[var(--primary)] transition-colors"
                      >
                        <Phone className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Ryan</div>
                          <div className="text-sm">072 586 1495</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+27713073631"
                        className="flex items-center gap-3 text-[var(--gray-600)] hover:text-[var(--primary)] transition-colors"
                      >
                        <Phone className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Hein</div>
                          <div className="text-sm">071 307 3631</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+27639434661"
                        className="flex items-center gap-3 text-[var(--gray-600)] hover:text-[var(--primary)] transition-colors"
                      >
                        <Phone className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Aaron (Western Cape)</div>
                          <div className="text-sm">063 943 4661</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@covercrete.co.za"
                        className="flex items-center gap-3 text-[var(--gray-600)] hover:text-[var(--primary)] transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span>info@covercrete.co.za</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/27725861495?text=Hi%2C%20I%27m%20interested%20in%20Covercrete%20finishes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="font-semibold">Chat on WhatsApp</span>
                </a>

                {/* Service areas */}
                <div className="p-6 bg-[var(--gray-50)] rounded-2xl">
                  <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">
                    Service Areas
                  </h3>
                  <div className="flex items-start gap-3 text-[var(--gray-600)]">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">We serve:</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Gauteng (Johannesburg, Pretoria)</li>
                        <li>• Western Cape (Cape Town, George)</li>
                        <li>• KwaZulu-Natal</li>
                        <li>• Other areas by arrangement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
