import React from "react";
import TrendingVideoCard from "../Trending/TrendingVideoCard";
import "./searchedVideoList.css";

const SearchedVideoList = ({ searchResults, title, thumbnail }) => {
  return (
    <div className="searched-video-list">
      {searchResults.map((data) => {
        return (
          <TrendingVideoCard
            title={data.snippet.title}
            thumbnail={data.snippet.thumbnails.medium.url}
          />
        );
      })}
    </div>
  );
};

export default SearchedVideoList;
