export type SuiteDetail = {
  label: string;
  copy: string;
  image: string;
};

export type Suite = {
  title: string;
  displayTitle?: string;
  tagline: string;
  description: string;
  size: string;
  guests: string;
  bed: string;
  view: string;
  rate: string;
  rateOriginal?: string;
  bookingUrl?: string;
  bookingUrlEs?: string;
  heroImage: string;
  highlights: string[];
  details: SuiteDetail[];
  gallery: string[];
  amenities: string[];
};

export const suites: Suite[] = [
  {
    title: "Sra. Tentación",
    tagline: "Signature suite with panoramic sea breezes and intimate light.",
    description:
      "Discover the beautiful panoramic view from any corner of this spacious suite. The elegant decor with Mexican handcrafted furniture enhances the greyish-blue tone of the walls and the collection of hand-decorated gold mirrors. Relax on the balcony, have breakfast on the terrace or refresh in the plunge pool.",
    size: "140 m²",
    guests: "2 persons",
    bed: "Plunge pool | Two level terrace | Luxury bathroom",
    view: "Ocean view",
    rate: "$1,490",
    rateOriginal: "$1,690",
    bookingUrl:
      "https://be.synxis.com/?adult=1&arrive=2025-12-26&chain=22402&child=0&currency=USD&depart=2025-12-27&hotel=78821&level=hotel&locale=en-US&productcurrency=USD&room=PNT&rooms=1&src=24C",
    bookingUrlEs:
      "https://be.synxis.com/?adult=1&arrive=2025-12-26&chain=22402&child=0&currency=USD&depart=2025-12-27&hotel=78821&level=hotel&locale=es-MX&productcurrency=USD&room=PNT&rooms=1&src=24C",
    heroImage: "/images/suites/sra-tentacion/exclusive-boutique-villa-hotel-zihuatanejo-ixtapa-mexico-01.webp",
    highlights: [
      "Private terrace with ocean horizon",
      "Handcrafted wood and stone finishes",
      "Signature minibar and coffee ritual",
      "Evening turndown and curated playlists",
    ],
    details: [
      {
        label: "Bed",
        copy: "Oversized king bed with linen canopy and handcrafted headboard.",
        image: "/images/suites/sra-tentacion/suite-2.webp",
      },
      {
        label: "Bathroom",
        copy: "Spa-style rain shower with natural stone and soft lighting.",
        image: "/images/suites/sra-tentacion/suite-3.webp",
      },
      {
        label: "Amenities",
        copy: "Designer bath set, in-room dining, and premium sound system.",
        image: "/images/suites/sra-tentacion/suite-4.webp",
      },
      {
        label: "View",
        copy: "Uninterrupted ocean vista framed by the jungle canopy.",
        image: "/images/suites/sra-tentacion/suite-5.webp",
      },
    ],
    gallery: [
      "/images/suites/sra-tentacion/suite-4.webp",
      "/images/suites/sra-tentacion/suite-5.webp",
      "/images/suites/sra-tentacion/suite-6.webp",
    ],
    amenities: [
      "Welcome guacamole and tequila",
      "Housekeeping twice a day",
      "Luxury herbal toiletries",
      "Cotton pique bathrobes",
      "Double-sink bathrooms",
      "Flat screen TV, DVD and SKY TV",
    ],
  },
  {
    title: "Garden Suite",
    displayTitle: "Garden Suite Sueño Guajiro",
    tagline: "A calm hideaway wrapped in tropical greens and soft shade.",
    description:
      "Spacious private suite with terrace surrounded by an intimate tropical garden with lounge chairs next to a plunge pool facing the ocean. Decorated in greyish-green and silvery tones with traditional Mexican hacienda style furniture and a desk with ocean views.",
    size: "110 m²",
    guests: "2 persons",
    bed: "Plunge pool | Two level terrace | Luxury bathroom",
    view: "Ocean view",
    rate: "$890",
    rateOriginal: "$1,050",
    bookingUrl:
      "https://be.synxis.com/?adult=1&arrive=2025-12-26&chain=22402&child=0&currency=USD&depart=2025-12-27&hotel=78821&level=hotel&locale=en-US&productcurrency=USD&room=GAR&rooms=1&src=24C",
    bookingUrlEs:
      "https://be.synxis.com/?adult=1&arrive=2025-12-26&chain=22402&child=0&currency=USD&depart=2025-12-27&hotel=78821&level=hotel&locale=es-MX&productcurrency=USD&room=GAR&rooms=1&src=24C",
    heroImage: "/images/suites/garden-suite/garden-1.webp",
    highlights: [
      "Garden-facing private terrace",
      "Natural light all day long",
      "Handwoven textiles and wood",
      "Morning tea and coffee service",
    ],
    details: [
      {
        label: "Bed",
        copy: "Queen bed with organic linens and soft ambient lighting.",
        image: "/images/suites/garden-suite/garden-2.webp",
      },
      {
        label: "Bathroom",
        copy: "Limestone bathroom with rain shower and lush views.",
        image: "/images/suites/garden-suite/garden-3.webp",
      },
      {
        label: "Amenities",
        copy: "In-room refreshments, yoga mats, and curated books.",
        image: "/images/suites/garden-suite/garden-4.webp",
      },
      {
        label: "View",
        copy: "Tropical garden framed by palms and flowering vines.",
        image: "/images/suites/garden-suite/garden-5.webp",
      },
    ],
    gallery: [
      "/images/suites/garden-suite/garden-4.webp",
      "/images/suites/garden-suite/garden-6.webp",
      "/images/suites/garden-suite/garden-7.webp",
    ],
    amenities: [
      "Welcome guacamole and tequila",
      "Housekeeping twice a day",
      "Luxury herbal toiletries",
      "Cotton pique bathrobes",
      "Double-sink bathrooms",
      "Flat screen TV, DVD and SKY TV",
    ],
  },
  {
    title: "Junior Suite Señorita Surena",
    tagline: "Soft ocean light meets an elegant, airy interior.",
    description:
      "Located on the first floor, this elegant Suite decorated in aqua blue color, has a double bay view, a representative contemporary Mexican decoration, fine cushions hand-embroidered by Chiapas craftsmen, comfortable desk and outdoor ample terrace.",
    size: "75 m²",
    guests: "2 persons",
    bed: "Plunge pool | Two level terrace | Luxury bathroom",
    view: "Ocean view",
    rate: "$990",
    rateOriginal: "$1,150",
    bookingUrl:
      "https://be.synxis.com/?adult=1&arrive=2025-12-26&chain=22402&child=0&currency=USD&depart=2025-12-27&hotel=78821&level=hotel&locale=en-US&productcurrency=USD&room=JRS&rooms=1&src=24C",
    bookingUrlEs:
      "https://be.synxis.com/?adult=1&arrive=2025-12-26&chain=22402&child=0&currency=USD&depart=2025-12-27&hotel=78821&level=hotel&locale=es-MX&productcurrency=USD&room=JRS&rooms=1&src=24C",
    heroImage: "/images/suites/junior-suite-senerata-surena/junior-suite1.webp",
    highlights: [
      "Panoramic windows with sea breeze",
      "Curated art and handpicked decor",
      "Private lounge corner",
      "Evening tea ritual",
    ],
    details: [
      {
        label: "Bed",
        copy: "King bed with handcrafted headboard and soft lighting.",
        image: "/images/suites/junior-suite-senerata-surena/junior-suite2.webp",
      },
      {
        label: "Bathroom",
        copy: "Elegant stone bathroom with rain shower and vanity.",
        image: "/images/suites/junior-suite-senerata-surena/junior-suite3.webp",
      },
      {
        label: "Amenities",
        copy: "Signature bath set, curated minibar, and premium audio.",
        image: "/images/suites/junior-suite-senerata-surena/junior-suite4.webp",
      },
      {
        label: "View",
        copy: "Soft ocean glimpses framed by warm interiors.",
        image: "/images/suites/junior-suite-senerata-surena/junior-suite5.webp",
      },
    ],
    gallery: [
      "/images/suites/junior-suite-senerata-surena/junior-suite4.webp",
      "/images/suites/junior-suite-senerata-surena/junior-suite5.webp",
      "/images/suites/junior-suite-senerata-surena/junior-suite6.webp",
    ],
    amenities: [
      "Welcome guacamole and tequila",
      "Housekeeping twice a day",
      "Luxury herbal toiletries",
      "Cotton pique bathrobes",
      "Double-sink bathrooms",
      "Flat screen TV, DVD and SKY TV",
    ],
  },
  {
    title: "Junior Suite Señorita Sonrisa",
    tagline: "Warm light, soft textures, and a playful sense of ease.",
    description:
      "Situated on the first floor, this terracotta cozy Suite has double views of the bay and a wide terrace with Plunge pool. It also has a balcony, desk, double bathrooms and emblematic objects representative of Mexican crafts.",
    size: "75 m²",
    guests: "2 persons",
    bed: "Plunge pool | Two level terrace | Luxury bathroom",
    view: "Ocean view",
    rate: "$1,050",
    rateOriginal: "$1,200",
    bookingUrl:
      "https://be.synxis.com/?adult=1&arrive=2025-12-26&chain=22402&child=0&currency=USD&depart=2025-12-27&hotel=78821&level=hotel&locale=en-US&productcurrency=USD&room=JRS&rooms=1&src=24C",
    bookingUrlEs:
      "https://be.synxis.com/?adult=1&arrive=2025-12-26&chain=22402&child=0&currency=USD&depart=2025-12-27&hotel=78821&level=hotel&locale=es-MX&productcurrency=USD&room=JRS&rooms=1&src=24C",
    heroImage: "/images/suites/junior-suite-senorita-sonrisa/suite-1.webp",
    highlights: [
      "Golden-hour light and airy interiors",
      "Private balcony seating",
      "Artisanal textiles and decor",
      "Signature in-room fragrance",
    ],
    details: [
      {
        label: "Bed",
        copy: "Queen bed with soft linen layers and artisanal textiles.",
        image: "/images/suites/junior-suite-senorita-sonrisa/suite-2.webp",
      },
      {
        label: "Bathroom",
        copy: "Warm stone finishes with rain shower and terrace light.",
        image: "/images/suites/junior-suite-senorita-sonrisa/suite-3.webp",
      },
      {
        label: "Amenities",
        copy: "Designer bath set, curated minibar, and in-room dining.",
        image: "/images/suites/junior-suite-senorita-sonrisa/suite-4.webp",
      },
      {
        label: "View",
        copy: "Soft coastal outlook with glowing sunset tones.",
        image: "/images/suites/junior-suite-senorita-sonrisa/suite-1.webp",
      },
    ],
    gallery: [
      "/images/suites/junior-suite-senorita-sonrisa/suite-2.webp",
      "/images/suites/junior-suite-senorita-sonrisa/suite-3.webp",
      "/images/suites/junior-suite-senorita-sonrisa/suite-4.webp",
    ],
    amenities: [
      "Welcome guacamole and tequila",
      "Housekeeping twice a day",
      "Luxury herbal toiletries",
      "Cotton pique bathrobes",
      "Double-sink bathrooms",
      "Flat screen TV, DVD and SKY TV",
    ],
  },
];
