import React, { Fragment } from "react";
import "./videoDetails.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { Avatar } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

const VideoDetails = ({ selectedVideoData, selectedVideoStats }) => {
  return (
    <div className="video-details">
      {selectedVideoData ? (
        <h1 className="video-details-title">{selectedVideoData.title}</h1>
      ) : (
        <h1 className="video-details-title">Demo Title</h1>
      )}
      <div className="video-details-account">
        <div className="video-details-name">
          <Avatar className="video-details-avatar" />
          {selectedVideoData ? (
            <p>{selectedVideoData.channelTitle}</p>
          ) : (
            <p>Demo account Joshua Dinh </p>
          )}
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

{
  /* <div className="video-details-stats">
<h3>{selectedVideoData.title}</h3>
</div>
<div className="video-details-info">
<div className="video-details-account">
  <Avatar className="video-details-avatar" />
  <p>{selectedVideoData.channelTitle}</p>
  <div className="video-details-subscribe">Subscribe</div>
  <div />
</div>
<div className="video-details-icon-container">
  <div className="video-details-likes">
    <ThumbUpIcon className="video-details-icon" />
    {selectedVideoStats.likeCount}
  </div>
  <div className="video-details-dislikes">
    <ThumbDownIcon className="video-details-icon" />
    {selectedVideoStats.dislikeCount}
  </div>
  <div className="video-details-views">
    <VisibilityIcon className="video-details-icon" />
    {selectedVideoStats.viewCount}
  </div>
</div>
</div> */
}
