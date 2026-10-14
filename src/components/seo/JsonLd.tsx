import React from "react";

interface LocalBusinessProps {
  type?: "LocalBusiness" | "HomeAndConstructionBusiness";
}

export function LocalBusinessJsonLd(_props: LocalBusinessProps){return null;}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQJsonLdProps {
  faqs: FAQItem[];
}

export function FAQJsonLd({ faqs }: FAQJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductJsonLdProps {
  name: string;
  description: string;
  image?: string;
  sku?: string;
  price?: string;
  priceCurrency?: string;
}

export function ProductJsonLd({name,description,image}:ProductJsonLdProps){const schema={"@context":"https://schema.org","@type":"CreativeWork",name,description:"Independent fictional finish concept. "+description,image};return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>;}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mineralis",
    url: "/concept",
    description:
      "Independent Mineralis website concept for a fictional decorative finishes brand.",
    publisher: {
      "@type": "Organization",
      name: "Mineralis",
      url: "/concept",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
