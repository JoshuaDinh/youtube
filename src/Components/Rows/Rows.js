import React from "react";
import "./rows.css";
import VideoCard from "../VideoCard/VideoCard";

const Rows = ({ searchResults, setVideoId }) => {
  return (
    <div className="rows">
      <h5>Javascript</h5>
      <div className="row-container">
        {searchResults.slice(0, 3).map((data) => {
          return (
            data.snippet?.thumbnails && (
              <VideoCard
                searchResults={searchResults}
                setVideoId={setVideoId}
                videoId={data.id.videoId}
                title={data.snippet?.title}
                thumbnail={data.snippet?.thumbnails?.medium.url}
                channel={data.snippet?.channelTitle}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Rows;
