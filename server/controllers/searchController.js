const User = require("../models/User");

exports.globalSearch = async (req, res) => {

    try {

        const q = req.query.q?.trim();

        if (!q) {

            return res.json({
                users: []
            });

        }

        const regex = new RegExp(q, "i");

        const users = await User.find({

            $or: [

                { fullName: regex },

                { username: regex },

                { district: regex },

                { division: regex },

                { travelerType: regex }

            ]

        })
        .limit(6)
        .select(
            "firebaseUid fullName username photoURL travelerType"
        );

        res.json({

            users

        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            message: "Search failed"

        });

    }

};