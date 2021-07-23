import React, { useState } from "react";
import "./videoCard.css";
import { Link } from "react-router-dom";
const VideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
  return (
    <div className="video-card">
      <img src={thumbnail} alt="#" className="video-thumbnail" />{" "}
      <div className="card-info">
        <p className="video-card-title ">{title}</p>
      </div>
    </div>
  );
};
export default VideoCard;
// const VideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
//   return (
//     <Link
//       to="/watch"
//       className="video-card"
//       onClick={() => setVideoId(videoId)}
//     >
//       <img src={thumbnail} alt="#" className="video-thumbnail" />
//       <p className="video-card-title ">{title}</p>
//     </Link>
//   );
// };
// export default VideoCard;
