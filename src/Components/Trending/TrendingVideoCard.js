import React from "react";
import "./trending.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const TrendingVideoCard = () => {
  return (
    <div className="trending-video-card">
      <PlayCircleOutlineIcon className="trending-play-icon" />
      <p className="trending-video-card-title">Javascript</p>
      <img
        src="https://i.ytimg.com/vi/PkZNo7MFNFg/mqdefault.jpg"
        alt="#"
        className="trending-video-thumbnail"
      />
    </div>
  );
};

export default TrendingVideoCard;
