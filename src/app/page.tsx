import { Hero } from "@/components/home/Hero";
import { USPs } from "@/components/home/USPs";
import { Applications } from "@/components/home/Applications";
import { HowItWorks } from "@/components/home/HowItWorks";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <USPs />
      <Applications />
      <HowItWorks />
      <GalleryPreview />
      <FinalCTA />
    </>
  );
}
