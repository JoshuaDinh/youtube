import React from "react";
import "./rows.css";
import TrendingVideoCard from "../Trending/TrendingVideoCard";

const Rows = ({ searchResults, setVideoId, title }) => {
  return (
    <div className="rows">
      <h5 className="rows-title">{title}</h5>
      <div className="rows-card-container">
        {searchResults.map((data) => {
          return (
            data.snippet?.thumbnails && (
              <TrendingVideoCard
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
