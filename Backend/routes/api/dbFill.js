// const express = require("express");
// const router = express.Router();
// const Videos = require("../../models/VideoSchema");
// const axios = require("axios");

// router.get("/", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://www.googleapis.com/youtube/v3/search",
//       {
//         params: {
//           part: "snippet",
//           q: "html/css Tutorials",
//           type: "video",
//           key: process.env.API_KEY,
//           maxResults: 25,
//         },
//       }
//     );

//     const data = await response.data.items;

//     await data.map((item) => {
//       const newvideo = new Videos({
//         topic: "Html-Css",
//         kind: item.kind,
//         etag: item.etag,
//         videoId: {
//           kind: item.id.kind,
//           videoId: item.id.videoId,
//         },
//         snippet: {
//           publishedAt: item.snippet.publishedAt,
//           channelId: item.snippet.channelId,
//           title: item.snippet.title,
//           description: item.snippet.description,
//           thumbnails: {
//             default: {
//               url: item.snippet.thumbnails.default.url,
//               width: item.snippet.thumbnails.default.width,
//               height: item.snippet.thumbnails.default.height,
//             },
//             medium: {
//               url: item.snippet.thumbnails.medium.url,
//               width: item.snippet.thumbnails.medium.width,
//               height: item.snippet.thumbnails.medium.height,
//             },
//             high: {
//               url: item.snippet.thumbnails.high.url,
//               width: item.snippet.thumbnails.high.width,
//               height: item.snippet.thumbnails.high.height,
//             },
//           },
//           channelTitle: item.channelTitle,
//           liveBroadcastContent: item.liveBroadcastContent,
//           publishTime: item.publishTime,
//         },
//       });
//       Videos.insertMany(newvideo);
//     });
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//   }
// });

// module.exports = router;
