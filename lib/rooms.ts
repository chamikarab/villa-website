export type Room = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  rate: string;
  image: string;
  gallery: string[];
  details: string[];
  amenities: string[];
  capacity: string;
  bedType: string;
  size: string;
};

export const rooms: Room[] = [
  {
    slug: "horizon-suite",
    title: "Horizon Suite",
    shortDescription: "A panoramic suite with wraparound views, a soaking tub, and bespoke linens.",
    longDescription: "The Horizon Suite is our premier accommodation, offering an unparalleled immersive experience of the Indian Ocean. Designed with floor-to-ceiling windows and a private wraparound terrace, this suite captures every sunset in breathtaking detail. The interiors feature hand-carved teak furniture, artisanal light fixtures, and a spa-inspired bathroom with a deep soaking tub overlooking the horizon.",
    rate: "From $480/night",
    image: "/images/horizon_suite.png",
    gallery: [
      "/images/horizon_suite.png",
      "/images/experiences/oceanfront-suite.png",
      "/images/experiences/Panoramic-villa-view.png",
    ],
    details: ["King bed", "Private terrace", "Ocean view"],
    amenities: [
      "Panoramic Ocean View",
      "Private Wraparound Terrace",
      "Deep Soaking Tub",
      "Rain Shower",
      "Luxury Linens",
      "Nespresso Coffee Machine",
      "Daily Turndown Service",
      "High-speed Wi-Fi",
    ],
    capacity: "2 Adults",
    bedType: "California King",
    size: "85 sqm",
  },
  {
    slug: "cove-residence",
    title: "Cove Residence",
    shortDescription: "Two-bedroom residence with open living, curated art, and indoor-outdoor flow.",
    longDescription: "Ideal for families or small groups, the Cove Residence blends the privacy of a private home with the services of a luxury villa. This two-bedroom sanctuary features expansive living spaces that open directly onto a private garden and plunge pool. Curated local artwork and contemporary design elements create an atmosphere of sophisticated calm, perfect for extended stays and shared memories.",
    rate: "From $720/night",
    image: "/images/Cove_Residence.png",
    gallery: [
      "/images/Cove_Residence.png",
      "/images/experiences/villa-exterior-sunlit.png",
      "/images/experiences/elegant-dining.png",
    ],
    details: ["Two suites", "Chef-ready pantry", "Plunge pool"],
    amenities: [
      "Private Plunge Pool",
      "Two En-suite Bedrooms",
      "Gourmet Pantry",
      "Private Garden",
      "Indoor-Outdoor Living Room",
      "Personal Butler Service",
      "Smart Home Integration",
      "Premium Sound System",
    ],
    capacity: "4 Adults",
    bedType: "1 King, 2 Twins",
    size: "160 sqm",
  },
  {
    slug: "garden-pavilion",
    title: "Garden Pavilion",
    shortDescription: "A serene retreat wrapped in tropical gardens, ideal for slow mornings.",
    longDescription: "Tucked away in the most secluded corner of the estate, the Garden Pavilion is a sanctuary for those seeking absolute tranquility. Surrounded by lush tropical greenery and the soft scent of jasmine, this pavilion offers a peaceful escape from the world. The design emphasizes natural materials and soft textures, featuring an outdoor shower and a private lounge deck perfect for meditation or reading.",
    rate: "From $390/night",
    image: "/images/Garden_Pavilion.png",
    gallery: [
      "/images/Garden_Pavilion.png",
      "/images/experiences/spa-wellness-pavilion.png",
      "/images/experiences/infinity-pool-dusk.png",
    ],
    details: ["Queen bed", "Garden lounge", "Outdoor shower"],
    amenities: [
      "Secluded Garden Setting",
      "Outdoor Rain Shower",
      "Private Meditation Deck",
      "Soft Natural Lighting",
      "Handmade Botanicals",
      "Yoga Mat & Props",
      "Quiet Library Corner",
      "Plush Bathrobes",
    ],
    capacity: "2 Adults",
    bedType: "Queen Bed",
    size: "65 sqm",
  },
];

export function getRoomBySlug(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
