export type Place = {
  id: number;

  name: string;

  location: string;

  postalAddress: string;

  category: string;

  image: string;

  description: string;

  rating: number;

  reviews: number;

  savedCount: number;

  hiddenGem: boolean;

  lat: number;

  lng: number;

  wikipediaUrl?: string;
};
export const mockPlaces = [
  {
    id: 1,
    name: "Sajek Valley",
    location: "Rangamati",
    postalAddress: "Sajek Valley, Baghaichhari, Rangamati",
    category: "Hill Station",
    image: "images/places/bangladesh/sajek-1.jpeg",
    description: `
Sajek Valley is often called the "Queen of Hills" and the "Roof of Rangamati" - and for good reason.
Sitting at about 1,800 feet above sea level, this stunning hill station offers some of the most breathtaking views in Bangladesh.
When you stand here and look out, you see endless layers of green hills disappearing into the horizon, often wrapped in fluffy white clouds that float below you.
`,
    rating: 4.8,
    reviews: 1247,
    savedCount: 543,
    lat: 23.3812,
    lng: 92.2937,
    hiddenGem: false,
    createdBy: "system",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Sajek_Valley",
  },

  {
    id: 2,
    name: "Cox's Bazar Sea Beach",
    location: "Cox's Bazar",
    postalAddress: "Laboni Point, Cox's Bazar",
    category: "Beach",
    image: "images/places/bangladesh/coxs-bazar.jpg",
    description: "World's longest natural sandy sea beach.",
    rating: 4.9,
    reviews: 5320,
    savedCount: 2450,
    lat: 21.4272,
    lng: 92.0058,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 3,
    name: "Saint Martin's Island",
    location: "Cox's Bazar",
    postalAddress: "Saint Martin's Island, Teknaf",
    category: "Island",
    image: "images/places/bangladesh/st-martin.jpg",
    description: "The only coral island in Bangladesh.",
    rating: 4.9,
    reviews: 3100,
    savedCount: 1800,
    lat: 20.6224,
    lng: 92.3224,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 4,
    name: "Sundarbans",
    location: "Khulna",
    postalAddress: "Sundarbans Reserved Forest",
    category: "Forest",
    image: "images/places/bangladesh/sundarbans.jpg",
    description: "Largest mangrove forest and home of the Royal Bengal Tiger.",
    rating: 4.8,
    reviews: 4200,
    savedCount: 1950,
    lat: 21.9497,
    lng: 89.1833,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 5,
    name: "Nilgiri Hills (নীলগিরি হিলস)",
    location: "Thanchi Road, Bandarban, Chattogram, Bangladesh",
    postalAddress:
      "Nilgiri Tourist Resort, Thanchi Road, Kaprupara Area, Bandarban Sadar Upazila, Bandarban - 4600, Chattogram Division, Bangladesh",
    category: "Mountain Peak & Hill Resort",
    image: "public/images/places/bangladesh/nilachal-1.webp",
    description: `Nilgiri Hills is one of the highest, most spectacular tourist destinations in Bangladesh, perched at an elevation of approximately 2,200 feet above sea level in Bandarban. Managed efficiently by the Bangladesh Army, this premier hill resort offers a breathtaking panoramic viewpoint where visitors find themselves surrounded by endless rolling mountain ridges and a shifting sea of white clouds. Its unique high-altitude geography allows travelers to touch passing clouds during the monsoon season, while offering clear, starry night skies and dramatic sunrises over the hills in the winter. Equipped with modern cottage accommodations, well-maintained viewing decks, and high-security infrastructure, it stands as a jewel of eco-tourism in the Chittagong Hill Tracts.`,
    rating: 4.8,
    reviews: 1247,
    savedCount: 543,
    lat: 22.01944,
    lng: 92.3275,
    hiddenGem: false,
    createdBy: "system",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Nilgiri_Hills,_Bandarban",
  },

  {
    id: 6,
    name: "Niladri Lake",
    location: "Sunamganj",
    postalAddress: "Tahirpur, Sunamganj",
    category: "Lake",
    image: "images/places/bangladesh/niladri.jpg",
    description: "Blue water lake surrounded by hills.",
    rating: 4.7,
    reviews: 1300,
    savedCount: 800,
    lat: 25.08,
    lng: 91.23,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 7,
    name: "Ratargul Swamp Forest",
    location: "Sylhet",
    postalAddress: "Gowainghat, Sylhet",
    category: "Swamp Forest",
    image: "images/places/bangladesh/ratargul.jpg",
    description: "Unique freshwater swamp forest of Bangladesh.",
    rating: 4.7,
    reviews: 2200,
    savedCount: 1100,
    lat: 25.0018,
    lng: 91.9966,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 8,
    name: "Jaflong",
    location: "Sylhet",
    postalAddress: "Jaflong, Gowainghat, Sylhet",
    category: "Nature",
    image: "images/places/bangladesh/jaflong.jpg",
    description: "River, stones and mountain scenery near the Indian border.",
    rating: 4.7,
    reviews: 2700,
    savedCount: 1200,
    lat: 25.1642,
    lng: 92.0176,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 9,
    name: "Bichanakandi",
    location: "Sylhet",
    postalAddress: "Bichanakandi, Sylhet",
    category: "Nature",
    image: "images/places/bangladesh/bichanakandi.jpg",
    description: "Crystal clear river with mountain backdrop.",
    rating: 4.8,
    reviews: 1900,
    savedCount: 1000,
    lat: 25.169,
    lng: 91.934,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 10,
    name: "Lalakhal",
    location: "Sylhet",
    postalAddress: "Lalakhal, Jaintiapur, Sylhet",
    category: "River",
    image: "images/places/bangladesh/.jpg",
    description: "Famous blue-green river in Sylhet.",
    rating: 4.7,
    reviews: 1750,
    savedCount: 900,
    lat: 25.1815,
    lng: 92.037,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 11,
    name: "Ahsan Manzil",
    location: "Dhaka",
    postalAddress: "Kumartoli, Dhaka",
    category: "Historical Site",
    image: "images/places/bangladesh/ahsan-manzil.jpg",
    description: "Historic pink palace of Dhaka.",
    rating: 4.6,
    reviews: 3500,
    savedCount: 1300,
    lat: 23.7086,
    lng: 90.4066,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 12,
    name: "Lalbagh Fort",
    location: "Dhaka",
    postalAddress: "Old Dhaka",
    category: "Historical Site",
    image: "images/places/bangladesh/lalbagh-fort.jpg",
    description: "Famous Mughal fort in Old Dhaka.",
    rating: 4.6,
    reviews: 3100,
    savedCount: 1400,
    lat: 23.7188,
    lng: 90.3889,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 13,
    name: "Somapura Mahavihara",
    location: "Naogaon",
    postalAddress: "Paharpur, Naogaon",
    category: "Archaeological Site",
    image: "images/places/bangladesh/paharpur.jpg",
    description: "UNESCO World Heritage Buddhist monastery.",
    rating: 4.8,
    reviews: 1600,
    savedCount: 900,
    lat: 25.0311,
    lng: 88.9747,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 14,
    name: "Mahasthangarh",
    location: "Bogura",
    postalAddress: "Shibganj, Bogura",
    category: "Archaeological Site",
    image: "images/places/bangladesh/mahasthangarh.jpg",
    description: "Ancient archaeological city of Bengal.",
    rating: 4.7,
    reviews: 1400,
    savedCount: 780,
    lat: 24.961,
    lng: 89.342,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 15,
    name: "Kuakata Sea Beach",
    location: "Patuakhali",
    postalAddress: "Kuakata, Patuakhali",
    category: "Beach",
    image: "images/places/bangladesh/kuakata.jpg",
    description: "Known for both sunrise and sunset views.",
    rating: 4.7,
    reviews: 2400,
    savedCount: 1200,
    lat: 21.8153,
    lng: 90.1198,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 16,
    name: "Tanguar Haor",
    location: "Sunamganj",
    postalAddress: "Dharmapasha, Sunamganj",
    category: "Wetland",
    image: "images/places/bangladesh/tanguar-haor.jpg",
    description: "One of Bangladesh's largest wetland ecosystems.",
    rating: 4.8,
    reviews: 1350,
    savedCount: 720,
    hiddenGem: false,
    lat: 25.12,
    lng: 91.1,
    createdBy: "system",
  },

  {
    id: 17,
    name: "Madhabkunda Waterfall",
    location: "Moulvibazar",
    postalAddress: "Barlekha, Moulvibazar",
    category: "Waterfall",
    image: "images/places/bangladesh/madhabkunda.jpg",
    description: "Largest waterfall in Bangladesh.",
    rating: 4.7,
    reviews: 1800,
    savedCount: 890,
    lat: 24.6417,
    lng: 92.0376,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 18,
    name: "Lawachara National Park",
    location: "Moulvibazar",
    postalAddress: "Kamalganj, Moulvibazar",
    category: "National Park",
    image: "images/places/bangladesh/lawachara.jpg",
    description: "Protected rainforest with diverse wildlife.",
    rating: 4.7,
    reviews: 1700,
    savedCount: 940,
    lat: 24.3305,
    lng: 91.7915,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 19,
    name: "Bangabandhu Safari Park",
    location: "Gazipur",
    postalAddress: "Sreepur, Gazipur",
    category: "Safari Park",
    image: "images/places/bangladesh/safari-park.jpg",
    description: "Large wildlife safari park near Dhaka.",
    rating: 4.6,
    reviews: 2600,
    savedCount: 1100,
    lat: 24.196,
    lng: 90.512,
    hiddenGem: false,
    createdBy: "system",
  },

  {
    id: 20,
    name: "National Parliament House",
    location: "Dhaka",
    postalAddress: "Sher-e-Bangla Nagar, Dhaka",
    category: "Architecture",
    image: "images/places/bangladesh/parliament.jpg",
    description: "World-famous architectural masterpiece.",
    rating: 4.8,
    reviews: 2100,
    savedCount: 1300,
    lat: 23.7625,
    lng: 90.3789,
    hiddenGem: false,
    createdBy: "system",
  },
];
