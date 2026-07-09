const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  firebaseUid: String,

  username: String,

  photoURL: String,

  text: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const postSchema = new mongoose.Schema(
  {
    ownerUid: String,

    ownerName: String,

    ownerPhoto: String,

    tripId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
    },

    stopId: {
      type: mongoose.Schema.Types.ObjectId,
    },

    tripTitle: String,

    tripCover: String,

    dayTitle: String,

    placeId: String,

    placeName: String,

    title: String,

    description: String,

    location: String,

    latitude: Number,

    longitude: Number,

    images: {
      type: [String],
      default: [],
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

    saves: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Post", postSchema);
