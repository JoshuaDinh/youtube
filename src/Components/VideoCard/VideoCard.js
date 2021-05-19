import React from "react";
import "./videoCard.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const VideoCard = ({ title, thumbnail, setVideoId, videoId, channel }) => {
  return (
    <div className="videoCard">
      <div onClick={() => setVideoId(videoId)} className="video-card">
        <div className="video-card-overlay">
          <PlayCircleOutlineIcon className="video-card-play-icon" />
        </div>
        <img
          className="video-card-img"
          src={thumbnail}
          alt="thumbnail unavailable"
        />
      </div>
      <div className="video-card-information">
        <p className="video-card-title">{title}</p>
        <p className="video-card-channel">-{channel}</p>
      </div>
    </div>
  );
};

export default VideoCard;
