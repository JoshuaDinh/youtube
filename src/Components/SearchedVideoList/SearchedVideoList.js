import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./searchedVideoList.css";

const SearchedVideoList = ({ searchResults, title, thumbnail }) => {
  return (
    <div className="searched-video-list">
      {searchResults.map((data) => {
        return (
          <VideoCard
            title={data.snippet.title}
            thumbnail={data.snippet.thumbnails.medium.url}
          />
        );
      })}
    </div>
  );
};

export default SearchedVideoList;
