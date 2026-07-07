const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  firebaseUid: String,
  username: String,
  photoURL: String,
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const postSchema = new mongoose.Schema({

  firebaseUid: String,

  username: String,

  photoURL: String,

  description: String,

  location: String,

  images: [String],

  likes: {
    type: Number,
    default: 0,
  },

  likedBy: [String],

  comments: [commentSchema],

  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports =
mongoose.model(
  "Post",
  postSchema
);