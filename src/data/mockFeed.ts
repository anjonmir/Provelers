export const mockFeed = [
  {
    id: 1,

    user: {
      name: "Anjon Mir",
      avatar: "",
    },

    location: "Sajek Valley",

    createdAt: "2h ago",

    description:
      "Just discovered an amazing hidden viewpoint in Sajek. Highly recommended!",

    images: [
      "/images/default-cover.jpg",
      "/images/default-cover.jpg",
    ],

    reactions: 42,

    comments: [
      {
        user: "Rafiq",
        text: "Amazing place!",
      },

      {
        user: "Tania",
        text: "Need exact location.",
      },
    ],
  },

  {
    id: 2,

    user: {
      name: "Sadia Islam",
      avatar: "",
    },

    location: "Cox's Bazar",

    createdAt: "5h ago",

    description:
      "Sunrise at Cox's Bazar was absolutely beautiful today.",

    images: [
      "/images/default-cover.jpg",
    ],

    reactions: 27,

    comments: [],
  },
];