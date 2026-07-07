const Trip = require("../models/Trip");

// =======================================
// CREATE TRIP
// =======================================

exports.createTrip = async (req, res) => {
  try {

    const trip = await Trip.create(req.body);

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

    const trip = await Trip.findById(
      req.params.tripId
    );

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

    const trip =
      await Trip.findByIdAndUpdate(

        req.params.tripId,

        req.body,

        {
          new: true,
        }

      );

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
// DELETE TRIP
// =======================================

exports.deleteTrip = async (req, res) => {

  try {

    await Trip.findByIdAndDelete(
      req.params.tripId
    );

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

    const trip =
      await Trip.findById(
        req.params.tripId
      );

    if (!trip) {

      return res.status(404).json({
        message: "Trip not found",
      });

    }

    trip.status = "published";

    trip.days.forEach(day => {

      day.stops.forEach(stop => {

        stop.published = true;

      });

    });

    await trip.save();

    res.json(trip);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};