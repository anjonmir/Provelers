const express = require("express");

const router = express.Router();

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

    const user =
      await User.findOne({
        firebaseUid:
          req.params.firebaseUid,
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

    const user =
      await User.findOneAndUpdate(
        {
          firebaseUid:
            req.params.firebaseUid,
        },
        req.body,
        {
          new: true,
        }
      );

    res.json(user);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

});

module.exports = router;