const express = require("express");

const router = express.Router();

const {
  createTrip,
  getUserTrips,
  getTrip,
  updateTrip,
  deleteTrip,
  publishTrip,
} = require("../controllers/tripController");

// =====================
// CREATE TRIP
// =====================

router.post("/", createTrip);

// =====================
// GET USER TRIPS
// =====================

router.get("/user/:ownerUid", getUserTrips);

// =====================
// GET SINGLE TRIP
// =====================

router.get("/:tripId", getTrip);

// =====================
// UPDATE TRIP
// =====================

router.put("/:tripId", updateTrip);

// =====================
// PUBLISH TRIP
// =====================

router.put("/:tripId/publish", publishTrip);

// =====================
// DELETE TRIP
// =====================

router.delete("/:tripId", deleteTrip);

module.exports = router;