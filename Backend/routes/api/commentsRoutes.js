const express = require("express");
const router = express.Router();
const Comments = require("../../models/CommentsSchema");

// Get comments by videoId
router.get("/:commentId", (req, res) => {
  const commentId = req.params.commentId;
  console.log(commentId);
  try {
    Comments.find({ videoId: commentId }, (err, result) => {
      if (err) throw err;
      else {
        res.status(200).json(result);
      }
    });
  } catch (err) {}
});

// Post New Comment
router.post("/", async (req, res) => {
  const newComment = new Comments({
    videoId: req.body.commentId,
    comment: req.body.comment,
    authorDisplayName: req.body.name,
    // authorProfileImageUrl: req.body.authorProfileImageUrl,
  });
  try {
    const postComment = await newComment.save();
    console.log(req.body);
    res.status(200).send("completed");
  } catch (err) {
    console.error(err);
    console.log(err);
  }
});

module.exports = router;
