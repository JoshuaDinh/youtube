import React from "react";
import "./videoCard.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const VideoCard = ({ title, thumbnail, setVideoId, videoId, channel }) => {
  return (
    <div className="video-card">
      <p className="video-card-title">{title}</p>
      <img src={thumbnail} alt="#" className="video-thumbnail" />
    </div>
  );
};
export default VideoCard;
