import React, { useState } from "react";
import "./videoPlayer.css";
import { Comments } from "../Comments/Comments";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { Avatar } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

const VideoDetails = ({ selectedVideoData, selectedVideoStats }) => {
  return (
    <div className="video-details">
      <div className="video-details-stats">
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
      </div>
    </div>
  );
};

export const VideoPlayer = ({
  videoId,
  selectedVideoData,
  selectedVideoStats,
}) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  // video id needed for video

  return (
    <div className="video-player">
      <iframe
        className="video-player-iframe"
        title="videoPlayer"
        autoPlay={1}
        src={videoSrc}
      />
      {
        <VideoDetails
          videoId={videoId}
          selectedVideoData={selectedVideoData}
          selectedVideoStats={selectedVideoStats}
        />
      }
      <Comments videoId={videoId} />
    </div>
  );
};
