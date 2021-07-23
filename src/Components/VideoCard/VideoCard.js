import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "./videoCard.css";
import { Link } from "react-router-dom";
const VideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
  return (
    <Link
      className="video-card"
      to="/watch"
      className="video-card"
      onClick={() => setVideoId(videoId)}
    >
      {/* <div className="play-container">
        <PlayArrowIcon className="play-icon" />
      </div> */}
      <img src={thumbnail} alt="#" className="video-thumbnail" />
      <div className="card-info">
        <p className="video-card-title ">{title}</p>
      </div>
    </Link>
  );
};
export default VideoCard;
