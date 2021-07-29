const mongoose = require("mongoose");

const FullStackVideoSchema = new mongoose.Schema({
  kind: { type: String },
  etag: { type: String },
  videoId: {
    kind: { type: String },
    videoId: { type: String },
  },
  snippet: {
    publishedAt: { type: String },
    channelId: { type: String },
    title: { type: String },
    description: { type: String },
    thumbnails: {
      default: {
        url: { type: String },
        width: { type: Number },
        height: { type: Number },
      },
      medium: {
        url: { type: String },
        width: { type: Number },
        height: { type: Number },
      },
      high: {
        url: { type: String },
        width: { type: Number },
        height: { type: Number },
      },
    },
    channelTitle: { type: String },
    liveBroadcastContent: { type: String },
    publishTime: { type: String },
  },
});

module.exports = mongoose.model("fullStackVideos", FullStackVideoSchema);
