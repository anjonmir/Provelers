const express = require("express");

const router = express.Router();

const Trip = require("../models/Trip");
const Post = require("../models/Post");

const User = require("../models/User");

// =========================
// CREATE USER
// =========================

router.post("/", async (req, res) => {
  try {
    const existing = await User.findOne({
      firebaseUid: req.body.firebaseUid,
    });

    if (existing) {
      return res.json(existing);
    }

    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// GET USER
// =========================

router.get("/:firebaseUid", async (req, res) => {
  try {
    const user = await User.findOne({
      firebaseUid: req.params.firebaseUid,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// UPDATE USER
// =========================

router.put("/:firebaseUid", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      {
        firebaseUid: req.params.firebaseUid,
      },
      req.body,
      {
        new: true,
      },
    );

    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// SAVE PLACE
// =========================

router.post("/:firebaseUid/save-place", async (req, res) => {
  try {
    const { firebaseUid } = req.params;

    const place = req.body;

    const user = await User.findOne({
      firebaseUid,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const alreadySaved = user.savedPlaces.some(
      (saved) => saved.placeId === place.placeId,
    );

    if (!alreadySaved) {
      user.savedPlaces.push({
        placeId: place.placeId,

        placeName: place.placeName,

        image: place.image,

        location: place.location,
      });

      await user.save();
    }

    res.json(user.savedPlaces);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
// =========================
// COMPLETE PROFILE
// =========================

router.get("/:firebaseUid/profile", async (req, res) => {
  try {
    const firebaseUid = req.params.firebaseUid;

    const user = await User.findOne({
      firebaseUid,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const draftTrips = await Trip.find({
      ownerUid: firebaseUid,
      status: "draft",
    });

    const publishedTrips = await Trip.find({
      ownerUid: firebaseUid,
      status: "published",
    });

    const posts = await Post.find({
      ownerUid: firebaseUid,
    });

    const totalLikes = posts.reduce((sum, post) => sum + (post.likes || 0), 0);

    const totalComments = posts.reduce(
      (sum, post) => sum + (post.comments?.length || 0),
      0,
    );

    res.json({
      user,

      draftTrips,

      publishedTrips,

      posts,

      savedPlaces: user.savedPlaces,

      stats: {
        totalTrips: draftTrips.length + publishedTrips.length,

        draftTrips: draftTrips.length,

        publishedTrips: publishedTrips.length,

        totalPosts: posts.length,

        totalSavedPlaces: user.savedPlaces?.length || 0,

        totalLikes,

        totalComments,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
