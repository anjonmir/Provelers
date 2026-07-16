const express = require("express");

const router = express.Router();

const Post = require("../models/Post");

const { getIO } = require("../socket");

// ======================
// CREATE POST
// ======================

router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);

    getIO().emit("post-created", post);

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

      post.likes = post.likedBy.length;
    } else {
      post.likedBy.push(firebaseUid);

      post.likes = post.likedBy.length;
    }

    await post.save();

    getIO().emit("post-liked", {
      postId: post._id,

      likes: post.likes,

      likedBy: post.likedBy,
    });

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
    getIO().emit("comment-added", {
      postId: post._id,

      comments: post.comments,
    });

    res.json(post);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ======================
// DELETE COMMENT
// ======================

router.delete("/:postId/comment/:commentId", async (req, res) => {
  try {
    const { firebaseUid } = req.body;

    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    const comment = post.comments.id(req.params.commentId);

    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }

    if (comment.firebaseUid !== firebaseUid) {
      return res.status(403).json({
        message: "Not allowed",
      });
    }

    post.comments.pull(req.params.commentId);

    await post.save();
    getIO().emit("comment-deleted", {
      postId: post._id,

      comments: post.comments,
    });

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
    const { firebaseUid } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    if (post.ownerUid !== firebaseUid) {
      return res.status(403).json({
        message: "You can delete only your own posts.",
      });
    }

    await Post.findByIdAndDelete(req.params.id);

    getIO().emit("post-deleted", {
      postId: post._id,
    });

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
