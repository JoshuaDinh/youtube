import React, { useState } from "react";
import "./videoCard.css";
import { Link } from "react-router-dom";
const VideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
  const [activeTitle, setActiveTitle] = useState(false);
  return (
    <Link
      to="/watch"
      className="video-card"
      onClick={() => setVideoId(videoId)}
      onMouseEnter={() => setActiveTitle(!activeTitle)}
      onMouseLeave={() => setActiveTitle(!activeTitle)}
    >
      <img src={thumbnail} alt="#" className="video-thumbnail" />
      <p
        className={`video-card-title ${
          activeTitle && "video-card-title-active"
        }`}
      >
        {title}
      </p>
    </Link>
  );
};
export default VideoCard;
