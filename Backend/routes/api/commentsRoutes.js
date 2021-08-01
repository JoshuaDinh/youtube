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
    videoId: req.body.videoId,
    textOriginal: req.body.textOriginal,
    authorDisplayName: req.body.authorDisplayName,
    authorProfileImageUrl: req.body.authorProfileImageUrl,
    likeCount: req.body.likeCount,
    dislikeCount: req.body.dislikeCount,
  });
  try {
    const postComment = await newComment.save();
    res.status(200).json({ msg: "Comment has been saved" });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
