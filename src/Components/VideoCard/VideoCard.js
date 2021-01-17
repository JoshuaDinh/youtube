import React from "react";
import "./videocard.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const VideoCard = ({ title, thumbnail }) => {
  return (
    <div className="videocard">
      <div className="videocard-details">
        <p className="videocard-title">{title}</p>
        <div className="videocard-play-icon-container">
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
      {/* <div className="videocard-info">
        <div className="videocard-avatar-icon-container">
          {" "}
          <AccountCircleIcon className="videocard-avatar-icon" />
        </div>{" "}
        <div className="videocard-views-like-icon-container">
          <FavoriteBorderIcon className="videocard-heart-icons" /> 3.9k
          <VisibilityIcon className="videocard-views-icon" /> 1.4 million
        </div>
      </div> */}
    </div>
  );
};
