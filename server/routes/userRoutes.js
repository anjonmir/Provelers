const express = require("express");

const router = express.Router();

const User =
  require("../models/User");

router.post(
  "/users",
  async (req, res) => {
    try {

      const user =
        new User(req.body);

      await user.save();

      res.status(201).json({
        success: true,
        user,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }
  }
);

module.exports = router;