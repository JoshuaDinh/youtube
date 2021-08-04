import React, { Fragment } from "react";
import "./videoDetails.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { Avatar } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

const VideoDetails = () => {
  return (
    <div className="video-details">
      <div className="video-details-account">
        <div className="video-details-name">
          <Avatar className="video-details-avatar" />
          <button className="video-details-subscribe">Subscribe</button>
        </div>
        <div className="video-details-icon-container">
          <ThumbUpIcon className="video-details-icon" />
          <ThumbDownIcon className="video-details-icon" />
        </div>
      </div>
    </div>
  );
};
export default VideoDetails;
