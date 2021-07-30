const express = require("express");
const router = express.Router();
const reactVideos = require("../../models/ReactVideoSchema");
const frontEndVideos = require("../../models/FrontEndVideoSchema");
const backEndVideos = require("../../models/BackEndVideoSchema");
const fullStackVideos = require("../../models/FullStackVideoSchema");
const javascriptVideos = require("../../models/JavascriptVideoSchema");
const mongoVideos = require("../../models/MongoVideoSchema");
const { VideocamOutlined } = require("@material-ui/icons");

router.get("/react", async (req, res) => {
  reactVideos.find({}, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

router.get("/frontend", async (req, res) => {
  frontEndVideos.find({}, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

router.get("/backend", async (req, res) => {
  backEndVideos.find({}, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

router.get("/fullStack", async (req, res) => {
  fullStackVideos.find({}, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

router.get("/javascript", async (req, res) => {
  javascriptVideos.find({}, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

router.get("/mongo", async (req, res) => {
  mongoVideos.find({}, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

router.get("/find/:videoId", async (req, res) => {
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
