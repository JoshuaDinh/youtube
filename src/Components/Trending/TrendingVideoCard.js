import React from "react";
import "./trending.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const TrendingVideoCard = ({ title, thumbnail }) => {
  return (
    <div className="trending-video-card">
      {/* <PlayCircleOutlineIcon className="trending-play-icon" /> */}
      <p className="trending-video-card-title">{title}</p>
      <img src={thumbnail} alt="#" className="trending-video-thumbnail" />
    </div>
  );
};

export default TrendingVideoCard;
