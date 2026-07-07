const express = require("express");

const router = express.Router();

const Post = require("../models/Post");

// ======================
// CREATE POST
// ======================

router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ======================
// GET POSTS
// ======================

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({
      createdAt: -1,
    });

    res.json(posts);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ======================
// LIKE / UNLIKE POST
// ======================

router.put("/:id/like", async (req, res) => {
  try {
    const { firebaseUid } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    const alreadyLiked = post.likedBy.includes(firebaseUid);

    if (alreadyLiked) {
      post.likedBy = post.likedBy.filter((id) => id !== firebaseUid);

      post.likes--;
    } else {
      post.likedBy.push(firebaseUid);

      post.likes++;
    }

    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ======================
// ADD COMMENT
// ======================

router.post("/:id/comment", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    post.comments.push(req.body);

    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ======================
// DELETE POST
// ======================

router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
