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
    title: "Elephant Skin Floor Study",
    location: "",
    colour: "Elephant Skin",
    application: "floor",
    beforeImage: "/concept/detail.svg",
    afterImage: "/concept/detail.svg",
    description: "Original concept illustrations of the Elephant Skin floor finish.",
  },
  {
    id: "2",
    title: "Beach Floor Finish",
    location: "",
    colour: "Beach",
    application: "floor",
    beforeImage: "/concept/detail.svg",
    afterImage: "/concept/detail.svg",
    description: "Original concept illustrations of the Beach finish.",
  },
  {
    id: "3",
    title: "Mushroom Floor Finish",
    location: "",
    colour: "Mushroom",
    application: "floor",
    beforeImage: "/concept/detail.svg",
    afterImage: "/concept/detail.svg",
    description: "Original concept illustrations of the Mushroom finish.",
  },
  {
    id: "4",
    title: "Elephant Skin Bathroom Finish",
    location: "",
    colour: "Elephant Skin",
    application: "bathroom",
    beforeImage: "/concept/detail.svg",
    afterImage: "/concept/detail.svg",
    description: "Original concept illustrations of the Elephant Skin bathroom finish.",
  },
];

export const applicationLabels: Record<GalleryItem["application"], string> = {
  floor: "Floors",
  wall: "Walls",
  bathroom: "Bathrooms",
  outdoor: "Outdoor",
  pool: "Pool Surrounds",
};
