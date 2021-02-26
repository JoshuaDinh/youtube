import React from "react";
import "./watchvideo.css";
import { Comments } from "../Comments/Comments";
import { VideoDetails } from "../VideoDetails/VideoDetails";
import { VideoDetailsAccount } from "../VideoDetailsAccount/VideoDetailsAccount";
import { Recommended } from "../Recommended/Recommended";

export const VideoPlayer = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  // video id needed for video
  return (
    <div className="videoplayer-container">
      <iframe
        className="videoplayer"
        title="videoPlayer"
        autoplay={1}
        src={videoSrc}
      />
    </div>
  );
};

export const WatchVideo = ({ selectedVideoDataTitle, videoId }) => {
  return (
    <div className="watchvideo">
      <div className="video-left-container">
        <VideoPlayer videoId={videoId} />
        <VideoDetails selectedVideoDataTitle={selectedVideoDataTitle} />
        <hr></hr>
        <VideoDetailsAccount />
        <hr></hr>
        <Comments />
      </div>
      {/* <Recommended /> */}
    </div>
  );
};
