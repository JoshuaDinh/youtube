const express = require("express");
const router = express.Router();
const videos = require("../../models/VideoSchema");

// Search videos by topic - from params
router.get("/byTopic/:subject", async (req, res) => {
  let subject = req.params.subject;
  videos.find({ topic: subject }, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);
    }
  });
});

// Retrieve all videos from db
router.get("/allVideos", async (req, res) => {
  videos.find({}, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);
    }
  });
});

// Find video  by id - add other endpoints for additional data here
// router.get("/view/:videoId", async (req, res) => {
//   let videoId = req.params.watchId;
//   try {
//     let data = await mongoVideos.findOne(
//       { "videoId.videoId": videoId },
//       (err, result) => {
//         if (err) {
//           res.send(err);
//         } else {
//           res.json(result);
//         }
//       }
//     );
//   } catch (err) {
//     res.status(500).send("server error");
//   }
// });

module.exports = router;
