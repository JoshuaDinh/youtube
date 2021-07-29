import React, { Fragment } from "react";
import "./videoDetails.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { Avatar } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

const VideoDetails = ({ selectedVideoData, selectedVideoStats }) => {
  const videoTitle = selectedVideoData ? (
    <h1 className="video-details-title">{selectedVideoData.title}</h1>
  ) : (
    <h1 className="video-details-title">Demo Title</h1>
  );

  const videoInfo = selectedVideoData ? (
    <p>{selectedVideoData.channelTitle}</p>
  ) : (
    <p>Demo account - Joshua Dinh </p>
  );

  return (
    <div className="video-details">
      {videoTitle}
      <div className="video-details-account">
        <div className="video-details-name">
          <Avatar className="video-details-avatar" />
          {videoInfo}
          <button className="video-details-subscribe">Subscribe</button>
        </div>
        <div className="video-details-icon-container">
          <ThumbUpIcon className="video-details-icon" />
          {selectedVideoStats ? selectedVideoStats.likeCount : 5000}
          <ThumbDownIcon className="video-details-icon" />
          {selectedVideoStats ? selectedVideoStats.dislikeCount : 2200}
          <VisibilityIcon className="video-details-icon" />
          {selectedVideoStats ? selectedVideoStats.viewCount : 5000}
        </div>
      </div>
    </div>
  );
};
export default VideoDetails;
