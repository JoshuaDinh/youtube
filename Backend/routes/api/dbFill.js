const express = require("express");
const router = express.Router();
const Videos = require("../../models/VideoSchema");
const Comments = require("../../models/CommentsSchema");
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: "html/css Tutorials",
          type: "video",
          key: process.env.API_KEY,
          maxResults: 25,
        },
      }
    );

    const data = await response.data.items;

    await data.map((item) => {
      const newvideo = new Videos({
        topic: "Html-Css",
        kind: item.kind,
        etag: item.etag,
        videoId: {
          kind: item.id.kind,
          videoId: item.id.videoId,
        },
        snippet: {
          publishedAt: item.snippet.publishedAt,
          channelId: item.snippet.channelId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnails: {
            default: {
              url: item.snippet.thumbnails.default.url,
              width: item.snippet.thumbnails.default.width,
              height: item.snippet.thumbnails.default.height,
            },
            medium: {
              url: item.snippet.thumbnails.medium.url,
              width: item.snippet.thumbnails.medium.width,
              height: item.snippet.thumbnails.medium.height,
            },
            high: {
              url: item.snippet.thumbnails.high.url,
              width: item.snippet.thumbnails.high.width,
              height: item.snippet.thumbnails.high.height,
            },
          },
          channelTitle: item.channelTitle,
          liveBroadcastContent: item.liveBroadcastContent,
          publishTime: item.publishTime,
        },
      });
      Videos.insertMany(newvideo);
    });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/comments", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/commentThreads",
      {
        params: {
          part: "snippet",
          videoId: "Ke90Tje7VS0",
          key: process.env.API_KEY,
          maxResults: 3,
        },
      }
    );

    const data = await response.data.items;

    await data.map((item) => {
      const newComments = new Comments({
        snippet: {
          videoId: item.snippet.videoId,
          textOriginal: item.snippet.topLevelComment.snippet.textOriginal,
          authorDisplayName:
            item.snippet.topLevelComment.snippet.authorDisplayName,
          authorProfileImageUrl:
            item.snippet.topLevelComment.snippet.authorProfileImageUrl,
          authorChannelUrl:
            item.snippet.topLevelComment.snippet.authorChannelUrl,
          authorChannelId: {
            value: item.snippet.topLevelComment.snippet.authorChannelId.value,
          },
          likeCount: item.snippet.topLevelComment.snippet.likeCount,
          publishedAt: item.snippet.topLevelComment.snippet.publishedAt,
        },
      });
      Comments.insertMany(newComments);
    });
    res.status(200).json(Comments);
  } catch (err) {}
});

module.exports = router;
