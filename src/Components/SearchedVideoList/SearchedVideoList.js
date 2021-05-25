import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./searchedVideoList.css";

const SearchedVideoList = ({ searchResults, setVideoId }) => {
  return (
    <div className="searched-video-list">
      {searchResults.map((data) => {
        return (
          <VideoCard
            title={data.snippet.title}
            thumbnail={data.snippet.thumbnails.medium.url}
            setVideoId={setVideoId}
            videoId={data.id.videoId}
          />
        );
      })}
    </div>
  );
};

export default SearchedVideoList;
