import React from "react";
import "./videoSuggestions.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import jslogo from "../../images/js-logo.png";

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
