const mongoose = require("mongoose");

// ==========================
// COMMENT
// ==========================

const commentSchema = new mongoose.Schema(
  {
    firebaseUid: String,

    username: String,

    photoURL: String,

    text: String,

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

// ==========================
// STOP
// ==========================

const stopSchema = new mongoose.Schema(
  {
    placeId: String,

    placeName: String,

    title: String,

    location: String,

    latitude: Number,

    longitude: Number,

    arrivalTime: String,

    description: String,

    media: {
      type: [String],
      default: [],
    },

    expenses: {
      type: Number,
      default: 0,
    },

    source: {
      type: String,
      default: "existing",
    },

    reviewStatus: {
      type: String,
      default: "approved",
    },

    published: {
      type: Boolean,
      default: false,
    },

    likes: {
      type: Number,
      default: 0,
    },

    likedBy: {
      type: [String],
      default: [],
    },

    comments: {
      type: [commentSchema],
      default: [],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: true }
);

// ==========================
// DAY
// ==========================

const daySchema = new mongoose.Schema(
  {
    title: String,

    date: String,

    stops: {
      type: [stopSchema],
      default: [],
    },
  },
  { _id: true }
);

// ==========================
// TRIP
// ==========================

const tripSchema = new mongoose.Schema({
  ownerUid: {
    type: String,
    required: true,
  },

  ownerName: String,

  ownerPhoto: String,

  title: {
    type: String,
    required: true,
  },

  destination: String,

  coverImage: String,

  description: String,

  category: String,

  privacy: {
    type: String,
    default: "public",
  },

  status: {
    type: String,
    default: "draft",
  },

  startDate: String,

  endDate: String,

  budget: {
    type: Number,
    default: 0,
  },

  days: {
    type: [daySchema],
    default: [],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Trip", tripSchema);