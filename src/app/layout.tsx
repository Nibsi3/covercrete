import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { LocalBusinessJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Covercrete | Premium Decorative Concrete Finishes in South Africa",
    template: "%s | Covercrete",
  },
  description:
    "Transform your floors, walls, and surfaces with Covercrete's seamless cementitious screed finishes. Durable, modern decorative concrete solutions. Serving Gauteng, Cape Town & KZN.",
  keywords: [
    "Covercrete",
    "decorative concrete",
    "concrete finishes",
    "cementitious screed",
    "floor finishes",
    "wall finishes",
    "South Africa",
    "Gauteng",
    "Cape Town",
    "KZN",
  ],
  authors: [{ name: "Covercrete" }],
  creator: "Covercrete",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://covercrete.co.za",
    siteName: "Covercrete",
    title: "Covercrete | Premium Decorative Concrete Finishes",
    description:
      "Transform your floors, walls, and surfaces with seamless cementitious screed finishes. Serving Gauteng, Cape Town & KZN.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Covercrete Decorative Concrete Finishes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Covercrete | Premium Decorative Concrete Finishes",
    description:
      "Transform your floors, walls, and surfaces with seamless cementitious screed finishes.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
