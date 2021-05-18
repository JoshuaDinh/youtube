import React from "react";
import "./videoSuggestions.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Switch from "@material-ui/core/Switch";

// const VideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
//   return (
//     <div onClick={() => setVideoId(videoId)} className="video-card">
//       <div className="video-card-overlay">
//         <p className="video-card-title">{title}</p>
//         <PlayCircleOutlineIcon className="video-card-play-icon" />
//       </div>
//       <img className="video-card-img" src={thumbnail} alt="#" />
//     </div>
//   );
// };

const VideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
  return (
    <div onClick={() => setVideoId(videoId)} className="video-card">
      <div className="video-card-overlay">
        <PlayCircleOutlineIcon className="video-card-play-icon" />
      </div>
      <img className="video-card-img" src={thumbnail} alt="#" />
      <p className="video-card-title">{title}</p>
    </div>
  );
};

export const VideoSuggestions = ({ searchResults, setVideoId }) => {
  return (
    <div className="video-suggestions">
      <div className="video-suggestions-header-container">
        <h4 className="video-suggestions-header">Up Next</h4>
        <h4 className="video-suggestions-header">Auto Play:</h4>
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
