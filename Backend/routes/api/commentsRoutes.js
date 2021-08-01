const express = require("express");
const router = express.Router();
const comments = require("../../models/CommentsSchema");

// Get comments by videoId
router.get("/:commentId", (req, res) => {
  const commentId = req.params.videoId;
  try {
    comments.find({ videoId: commentId }, (err, result) => {
      if (err) throw err;
      else {
        res.status(200).json(result);
      }
    });
  } catch (err) {}
});

module.exports = router;
