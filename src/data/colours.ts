export interface Colour {
  id: string;
  name: string;
  hex: string;
  description: string;
  undertones: string;
  bestFor: string[];
  image: string;
  pricing: {
    overTiles: string;
    overSmooth: string;
    minArea: string;
  };
  kitCoverage: {
    small: string;
    medium: string;
    large: string;
  };
}

const defaultPricing = {
  overTiles: "R510 - R555",
  overSmooth: "R405 - R447",
  minArea: "20m² smooth / 45m² tiles",
};

const defaultKitCoverage = {
  small: "5-12 m²",
  medium: "12-20 m²",
  large: "20-40 m²",
};

export const colours: Colour[] = [
  {
    id: "white",
    name: "White",
    hex: "#f5f5f0",
    description: "White brings sleek sophistication to your space. It pops against bright coloured flowers and furnishings or offers a more understated base for a pastel palette.",
    undertones: "Clean, crisp with subtle warm undertones",
    bestFor: ["Modern minimalist spaces", "Small rooms to create openness", "Contemporary kitchens"],
    image: "/concept/swatch-white.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "beach",
    name: "Beach",
    hex: "#d4c4a8",
    description: "A warm, sandy tone that evokes coastal living. Perfect for creating relaxed, inviting spaces with a natural feel.",
    undertones: "Warm sandy beige with golden hints",
    bestFor: ["Coastal-themed interiors", "Living areas", "Outdoor patios"],
    image: "/concept/swatch-beach.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "elephant-skin",
    name: "Elephant Skin",
    hex: "#8a8a7a",
    description: "A sophisticated mid-grey with earthy undertones. This versatile colour works beautifully in both modern and traditional settings.",
    undertones: "Warm grey with subtle green undertones",
    bestFor: ["Feature walls", "Commercial spaces", "Industrial-style interiors"],
    image: "/concept/swatch-elephant-skin.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "aged-well",
    name: "Aged Well",
    hex: "#6b6b5f",
    description: "A wonderfully versatile colour that pairs well with dapper décor or shabby chic design. The modern texture contrasts beautifully with this classic grey.",
    undertones: "Deep grey with warm, aged patina",
    bestFor: ["Sophisticated living spaces", "Restaurant interiors", "Boutique retail"],
    image: "/concept/swatch-aged-well.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "latte",
    name: "Latte",
    hex: "#c4a882",
    description: "A rich, creamy brown reminiscent of your favourite coffee. Warm and inviting, perfect for cozy spaces.",
    undertones: "Warm coffee brown with caramel notes",
    bestFor: ["Bedrooms", "Cozy living rooms", "Café interiors"],
    image: "/concept/swatch-latte.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "leather-tan",
    name: "Leather Tan",
    hex: "#a67c52",
    description: "A rich, warm tan that brings the luxury of leather to your floors and walls. Timeless and elegant.",
    undertones: "Rich tan with amber warmth",
    bestFor: ["Studies and libraries", "Masculine spaces", "Luxury retail"],
    image: "/concept/swatch-leather-tan.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "dark-elephant-skin",
    name: "Dark Elephant Skin",
    hex: "#5a5a50",
    description: "A deeper, more dramatic version of our popular Elephant Skin. Makes a bold statement while remaining sophisticated.",
    undertones: "Deep charcoal with earthy warmth",
    bestFor: ["Feature floors", "Dramatic accent walls", "High-end commercial"],
    image: "/concept/swatch-dark-elephant-skin.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "carbon-clay",
    name: "Carbon Clay",
    hex: "#4a4a42",
    description: "A rich, dark tone that combines the depth of carbon with the warmth of natural clay. Striking and contemporary.",
    undertones: "Deep charcoal with subtle brown warmth",
    bestFor: ["Modern lofts", "Gallery spaces", "Upscale restaurants"],
    image: "/concept/swatch-carbon-clay.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "carbon-cloud",
    name: "Carbon Cloud",
    hex: "#5c5c58",
    description: "A lighter take on our carbon range, with a soft, cloud-like quality. Sophisticated without being too dark.",
    undertones: "Medium grey with cool undertones",
    bestFor: ["Office spaces", "Bathrooms", "Contemporary homes"],
    image: "/concept/swatch-carbon-cloud.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "carbon-grey",
    name: "Carbon Grey",
    hex: "#4d4d47",
    description: "A classic carbon grey that brings depth and sophistication. Perfect for modern industrial aesthetics.",
    undertones: "Cool grey with carbon depth",
    bestFor: ["Industrial spaces", "Modern offices", "Contemporary homes"],
    image: "/concept/swatch-carbon-grey.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "mushroom",
    name: "Mushroom",
    hex: "#9a8b7a",
    description: "An organic, earthy tone inspired by nature. Warm and grounding, perfect for creating calm spaces.",
    undertones: "Earthy taupe with grey hints",
    bestFor: ["Spa environments", "Bedrooms", "Wellness centres"],
    image: "/concept/swatch-mushroom.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "clifton",
    name: "Clifton",
    hex: "#b8a890",
    description: "Named after the iconic Cape Town beach suburb, this warm neutral captures coastal elegance.",
    undertones: "Warm sand with subtle pink undertones",
    bestFor: ["Coastal homes", "Luxury apartments", "Boutique hotels"],
    image: "/concept/swatch-clifton.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "light-elephant-skin",
    name: "Light Elephant Skin",
    hex: "#a8a898",
    description: "A softer, lighter version of Elephant Skin. Brings warmth and sophistication without overwhelming the space.",
    undertones: "Light grey with warm green undertones",
    bestFor: ["Open-plan living", "Hallways", "Light-filled spaces"],
    image: "/concept/swatch-light-elephant-skin.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "light-mushroom",
    name: "Light Mushroom",
    hex: "#b8a99a",
    description: "A delicate, lighter take on our Mushroom colour. Soft and inviting with natural warmth.",
    undertones: "Soft taupe with cream undertones",
    bestFor: ["Nurseries", "Guest rooms", "Feminine spaces"],
    image: "/concept/swatch-light-mushroom.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "namib",
    name: "Namib",
    hex: "#c9b8a0",
    description: "Inspired by the ancient Namib Desert, this warm sand colour brings African warmth to any space.",
    undertones: "Desert sand with golden warmth",
    bestFor: ["Safari-themed spaces", "Outdoor entertainment areas", "African-inspired interiors"],
    image: "/concept/swatch-namib.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "green-grey",
    name: "Green Grey",
    hex: "#7a8a7a",
    description: "A sophisticated blend of green and grey that brings nature indoors. Calming and contemporary.",
    undertones: "Soft green with grey balance",
    bestFor: ["Nature-inspired spaces", "Bathrooms", "Relaxation areas"],
    image: "/concept/swatch-green-grey.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
  {
    id: "green-warm",
    name: "Green Warm",
    hex: "#8a9a7a",
    description: "A warmer take on green that feels organic and inviting. Perfect for bringing the outdoors in.",
    undertones: "Warm green with earthy notes",
    bestFor: ["Living rooms", "Conservatories", "Eco-friendly spaces"],
    image: "/concept/swatch-green-warm.svg",
    pricing: defaultPricing,
    kitCoverage: defaultKitCoverage,
  },
];

export function getColourById(id: string): Colour | undefined {
  return colours.find((c) => c.id === id);
}
