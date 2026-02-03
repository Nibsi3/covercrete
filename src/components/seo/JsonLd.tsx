import React from "react";

interface LocalBusinessProps {
  type?: "LocalBusiness" | "HomeAndConstructionBusiness";
}

export function LocalBusinessJsonLd({ type = "HomeAndConstructionBusiness" }: LocalBusinessProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: "Covercrete",
    description:
      "Premium decorative concrete finishes for floors, walls, and surfaces in South Africa. Cementitious screed specialists serving Gauteng, Cape Town & KZN.",
    url: "https://covercrete.co.za",
    telephone: ["+27725861495", "+27713073631", "+27639434661"],
    email: "info@covercrete.co.za",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZA",
      addressRegion: "North West",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Gauteng",
      },
      {
        "@type": "State",
        name: "Western Cape",
      },
      {
        "@type": "State",
        name: "KwaZulu-Natal",
      },
    ],
    priceRange: "R280 - R555 per m²",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Covercrete Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Floor Finish Installation",
            description: "Seamless cementitious screed floor finishes over tiles or screed",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wall Finish Installation",
            description: "Decorative concrete wall finishes with multiple sealer options",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom & Shower Finishes",
            description: "Waterproof concrete finishes for wet areas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DIY Kits",
            description: "Complete Covercrete kits for DIY installation",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

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

export function ProductJsonLd({
  name,
  description,
  image,
  sku,
  price,
  priceCurrency = "ZAR",
}: ProductJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    sku,
    brand: {
      "@type": "Brand",
      name: "Covercrete",
    },
    offers: price
      ? {
          "@type": "Offer",
          price,
          priceCurrency,
          availability: "https://schema.org/InStock",
        }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Covercrete",
    url: "https://covercrete.co.za",
    description:
      "Premium decorative concrete finishes for floors, walls, and surfaces in South Africa.",
    publisher: {
      "@type": "Organization",
      name: "Covercrete",
      url: "https://covercrete.co.za",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
