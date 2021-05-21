import React from "react";
import "./videoCard.css";
import { Link } from "react-router-dom";
const VideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
  return (
    <Link
      to="/watch"
      className="video-card"
      onClick={() => setVideoId(videoId)}
    >
      <p className="video-card-title">{title}</p>
      <img src={thumbnail} alt="#" className="video-thumbnail" />
    </Link>
  );
};
export default VideoCard;
