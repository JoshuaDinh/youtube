import React from "react";
import "./videoSuggestions.css";
import Switch from "@material-ui/core/Switch";
import VideoCard from "../VideoCard/VideoCard";

export const VideoSuggestions = ({ relatedVideos, setVideoId }) => {
  return (
    <div className="video-suggestions">
      <div className="video-suggestions-header-container">
        <h4 className="video-suggestions-header">Up Next</h4>
        <h4 className="video-suggestions-header">Auto Play:</h4>
        <Switch />
      </div>
      {relatedVideos.map((data) => {
        return (
          <VideoCard
            setVideoId={setVideoId}
            videoId={data.id.videoId}
            title={data.snippet?.title}
            thumbnail={data.snippet?.thumbnails?.medium.url}
          />
        );
      })}
    </div>
  );
};
