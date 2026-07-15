const Trip = require("../models/Trip");
const Post = require("../models/Post");
const User = require("../models/User");

// =======================================
// CREATE TRIP
// =======================================

exports.createTrip = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);

    await User.findOneAndUpdate(
      {
        firebaseUid: trip.ownerUid,
      },

      {
        $addToSet: {
          draftTrips: trip._id,
        },
      },
    );

    res.status(201).json(trip);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// =======================================
// GET ALL TRIPS OF A USER
// =======================================

exports.getUserTrips = async (req, res) => {
  try {
    const trips = await Trip.find({
      ownerUid: req.params.ownerUid,
    }).sort({
      createdAt: -1,
    });

    res.json(trips);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// =======================================
// GET SINGLE TRIP
// =======================================

exports.getTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripId);

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    res.json(trip);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// =======================================
// UPDATE TRIP
// =======================================

exports.updateTrip = async (req, res) => {
  try {
    console.log("========== UPDATE TRIP ==========");
    console.log(JSON.stringify(req.body, null, 2));

    const trip = await Trip.findByIdAndUpdate(req.params.tripId, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    res.json(trip);
  } catch (err) {
    console.error("========== UPDATE ERROR ==========");
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

// =======================================
// DELETE TRIP
// =======================================

exports.deleteTrip = async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.tripId);

    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// =======================================
// PUBLISH TRIP
// =======================================

exports.publishTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripId);

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    trip.status = "published";

    const createdPosts = [];

    for (const day of trip.days) {
      for (const stop of day.stops) {
        stop.published = true;

        const alreadyExists = await Post.findOne({
          tripId: trip._id,

          stopId: stop._id,
        });

        if (alreadyExists) continue;

        const post = await Post.create({
          ownerUid: trip.ownerUid,

          ownerName: trip.ownerName,

          ownerPhoto: trip.ownerPhoto,

          tripId: trip._id,

          stopId: stop._id,

          tripTitle: trip.title,

          tripCover: trip.coverImage,

          dayTitle: day.title,

          placeId: stop.placeId,

          placeName: stop.placeName,

          title: stop.title,

          description: stop.description,

          location: stop.location,

          latitude: stop.latitude,

          longitude: stop.longitude,

          images: stop.media,

          createdAt: stop.createdAt,

          likes: 0,

          comments: [],

          saves: 0,
        });

        createdPosts.push(post);
      }
    }

    await trip.save();
    await User.findOneAndUpdate(
      { firebaseUid: trip.ownerUid },

      {
        $pull: {
          draftTrips: trip._id,
        },

        $addToSet: {
          publishedTrips: trip._id,
        },
      },
    );

    await User.findOneAndUpdate(
      { firebaseUid: trip.ownerUid },

      {
        $addToSet: {
          publishedPosts: {
            $each: createdPosts.map((post) => post._id),
          },
        },
      },
    );

    res.json({
      trip,

      posts: createdPosts,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
};
