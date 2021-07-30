const express = require("express");
const router = express.Router();
const videos = require("../../models/VideoSchema");

// Search videos by topic - from params
// router.get("/React", async (req, res) => {
//   videos.find({}, (err, result) => {
//     if (err) {
//       throw err;
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });
// router.get("/Node", async (req, res) => {
//   videos.find({}, (err, result) => {
//     if (err) {
//       throw err;
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

router.get("/:subject", async (req, res) => {
  let subject = req.params.subject;
  videos.find({ topic: subject }, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);
    }
  });
});

// Find video ind by id - add other endpoints for additional data here
router.get("/watch/:videoId", async (req, res) => {
  let videoId = req.params.watchId;
  try {
    let data = await mongoVideos.findOne(
      { "videoId.videoId": videoId },
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.json(result);
        }
      }
    );
  } catch (err) {
    res.status(500).send("server error");
  }
});

module.exports = router;
