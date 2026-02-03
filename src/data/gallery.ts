export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  colour: string;
  application: "floor" | "wall" | "bathroom" | "outdoor" | "pool";
  beforeImage: string;
  afterImage: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Elephant Skin Floor Transformation",
    location: "Sandton, Gauteng",
    colour: "Elephant Skin",
    application: "floor",
    beforeImage: "/images/gallery/elephant-skin-before.jpg",
    afterImage: "/images/gallery/elephant-skin-after.jpg",
    description: "Complete floor renovation over existing tiles. The Elephant Skin finish creates a seamless, modern look.",
  },
  {
    id: "2",
    title: "Beach Coastal Living",
    location: "Clifton, Cape Town",
    colour: "Beach",
    application: "floor",
    beforeImage: "/images/gallery/beach-before.jpg",
    afterImage: "/images/gallery/beach-after.jpg",
    description: "Beach finish paired with coastal decor. Perfect elegance for this seaside home.",
  },
  {
    id: "3",
    title: "Mushroom Bathroom Retreat",
    location: "Umhlanga, KZN",
    colour: "Mushroom",
    application: "bathroom",
    beforeImage: "/images/gallery/mushroom-before.jpg",
    afterImage: "/images/gallery/mushroom-after.jpg",
    description: "Full bathroom renovation with Mushroom finish. Sealed with heavy-duty PU for shower areas.",
  },
  {
    id: "4",
    title: "Elephant Skin Feature",
    location: "Maboneng, Johannesburg",
    colour: "Elephant Skin",
    application: "floor",
    beforeImage: "/images/gallery/before-elephant.jpg",
    afterImage: "/images/gallery/after-elephant.jpg",
    description: "Elephant Skin floor finish. Industrial chic at its finest.",
  },
];

export const applicationLabels: Record<GalleryItem["application"], string> = {
  floor: "Floors",
  wall: "Walls",
  bathroom: "Bathrooms",
  outdoor: "Outdoor",
  pool: "Pool Surrounds",
};
