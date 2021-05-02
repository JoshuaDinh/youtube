import React from "react";
import "./videocard.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const VideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
  return (
    <div onClick={() => setVideoId(videoId)} className="video-card">
      <div className="video-card-overlay">
        <p className="video-card-title">{title}</p>
        <PlayCircleOutlineIcon className="video-card-play-icon" />
      </div>
      <img className="video-card-img" src={thumbnail} alt="#" />
    </div>
  );
};
export default VideoCard;
