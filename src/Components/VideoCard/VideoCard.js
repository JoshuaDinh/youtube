import React from "react";
import "./videocard.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const VideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
  return (
    <div onClick={() => setVideoId(videoId)} className="video-card">
      <div className="video-card-overlay">
        <PlayCircleOutlineIcon className="video-card-play-icon" />
      </div>
      {/* Does NOT display video if thumbnail is corrupted or missing */}
      <div className="video-card-information">
        {thumbnail && (
          <img
            className="video-card-img"
            src={thumbnail}
            alt="thumbnail unavailable"
          />
        )}
        <p className="video-card-title">{title}</p>
      </div>
    </div>
  );
};
export default VideoCard;
