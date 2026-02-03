export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah van der Merwe",
    location: "Sandton, Gauteng",
    project: "Kitchen & Living Room Floors",
    quote: "Absolutely transformed our home! The team was professional, clean, and the finish is stunning. We get compliments from everyone who visits.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Thompson",
    location: "Camps Bay, Cape Town",
    project: "Bathroom Renovation",
    quote: "We were nervous about applying Covercrete in our shower, but the result exceeded expectations. Two years later, it still looks brand new.",
    rating: 5,
  },
  {
    id: "3",
    name: "Priya Naidoo",
    location: "Umhlanga, KZN",
    project: "Pool Surround",
    quote: "The non-slip finish around our pool is perfect. It stays cool underfoot and looks incredible. Best investment we've made for our outdoor area.",
    rating: 5,
  },
  {
    id: "4",
    name: "Johan Pretorius",
    location: "Pretoria",
    project: "Garage Floor",
    quote: "Used the DIY kit for my garage floor. The instructions were clear and the result is professional. Saved a fortune compared to epoxy alternatives.",
    rating: 5,
  },
  {
    id: "5",
    name: "Lisa Chen",
    location: "Rosebank, Johannesburg",
    project: "Feature Walls",
    quote: "The texture and depth of the finish is unlike anything else. Our feature wall is now the talking point of our apartment.",
    rating: 5,
  },
  {
    id: "6",
    name: "David Botha",
    location: "George, Western Cape",
    project: "Restaurant Flooring",
    quote: "High-traffic commercial space and the floor still looks perfect after 18 months. The team understood our timeline and delivered on schedule.",
    rating: 5,
  },
];
