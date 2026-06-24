const User =
  require("../models/User");

exports.createUser =
  async (req, res) => {
    try {

      const user =
        await User.create(
          req.body
        );

      res.status(201).json(
        user
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

exports.getUser =
  async (req, res) => {

    try {

      const user =
        await User.findOne({
          firebaseUid:
            req.params.uid,
        });

      res.json(user);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  };