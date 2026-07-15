const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firebaseUid: String,
  email: String,

  fullName: String,
  username: String,
  photoURL: String,
  coverPhoto: {
    type: String,
    default: "/images/default-cover.jpg",
  },
  bio: String,

  bloodGroup: String,
  dateOfBirth: String,

  phoneNumber: String,
  emergencyContact: String,

  division: String,
  district: String,
  homeTown: String,

  occupation: String,
  university: String,

  travelerType: String,

  travelInterests: [String],

  nidNumber: String,

  explorerPoints: {
    type: Number,
    default: 0,
  },

  badges: [String],
  savedPlaces: [
    {
        placeId: String,
        placeName: String,
        image: String,
        location: String,
        savedAt: {
            type: Date,
            default: Date.now,
        },
    },
],

draftTrips: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trip",
    },
],

publishedTrips: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trip",
    },
],

publishedPosts: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
],

followers: [
    {
        type: String,
    },
],

following: [
    {
        type: String,
    },
],
});

module.exports = mongoose.model("User", userSchema);
