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
  metadataBase: new URL("https://mineralis-concept.cameronfalck03.workers.dev"),
  title: {
    default: "Mineralis | Independent Website Concept",
    template: "%s | Mineralis",
  },
  description: "Mineralis is an independent website concept for a fictional decorative concrete finishes brand. Designed by Pixaloom; no commissioned client, sales or services.",
  keywords: [
    "Mineralis",
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
  authors: [{ name: "Mineralis" }],
  creator: "Mineralis",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://mineralis-concept.cameronfalck03.workers.dev",
    siteName: "Mineralis",
    title: "Mineralis | Independent Website Concept",
    description:
      "Transform your floors, walls, and surfaces with seamless cementitious screed finishes. Serving Gauteng, Cape Town & KZN.",
    images: [
      {
        url: "/images/gallery/elephant-skin-after.jpg",
        width: 1200,
        height: 630,
        alt: "Mineralis Decorative Concrete Finishes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mineralis | Independent Website Concept",
    description:
      "Transform your floors, walls, and surfaces with seamless cementitious screed finishes.",
    images: ["/images/gallery/elephant-skin-after.jpg"],
  },
  robots: {
    index: false,
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
        <aside className="concept-notice" aria-label="Independent concept disclosure"><strong>Mineralis · Independent concept design</strong><span> Fictional brand, created by Pixaloom as a self-initiated portfolio study. No commissioned client or trading business. Prices, specifications and service content are illustrative. Forms are local demos and send nothing.</span><a href="/concept">About this concept</a></aside>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
