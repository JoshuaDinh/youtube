import React from "react";
import "./videoSuggestions.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Switch from "@material-ui/core/Switch";

const VideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
  return (
    <div onClick={() => setVideoId(videoId)} className="video-card">
      <div className="video-card-overlay">
        <p className="video-card-title">{title}</p>
        <PlayCircleOutlineIcon className="video-card-play-icon" />
      </div>
      <img className="video-card-img" src={thumbnail} alt="#" />
    </div>
  );
};

export const VideoSuggestions = ({ searchResults, setVideoId }) => {
  return (
    <div className="video-suggestions">
      <div className="video-suggestions-header-container">
        <h2 className="video-suggestions-header">Up Next</h2>
        <h2 className="video-suggestions-header">Auto Play:</h2>
        <Switch />
      </div>
      {searchResults.map((data) => {
        return (
          <VideoCard
            setVideoId={setVideoId}
            videoId={data.id.videoId}
            title={data.snippet.title}
            thumbnail={data.snippet.thumbnails.medium.url}
          />
        );
      })}
    </div>
  );
};
