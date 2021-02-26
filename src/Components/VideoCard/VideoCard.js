import React, { useState, useEffect } from "react";
import "./videocard.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

export const VideoCard = ({ title, thumbnail, setVideoId }) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <Link
      to="/Watch"
      className="videocard"
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
      onClick={() => setVideoId()}
    >
      <div
        className={`videocard-details ${overlay && "videocard-details-active"}`}
      >
        <p className="videocard-title">{title}</p>
        <div
          className={`videocard-play-icon-container ${
            overlay && "videocard-play-icon-container-active "
          }`}
        >
          <div className="videocard-likes-view-icon-container">
            <FavoriteBorderIcon />
            <VisibilityIcon />
          </div>
          <PlayCircleOutlineIcon className="videocard-play-icon" />
        </div>
      </div>
      <div
        className="videocard-img"
        alt="img"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      <p className="videocard-title">{title}</p>
    </Link>
  );
};
