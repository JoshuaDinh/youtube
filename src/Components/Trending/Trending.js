import React from "react";
import "./trending.css";
import TrendingVideoCard from "../Trending/TrendingVideoCard";

const Trending = ({ techVideos }) => {
  // Gets first video from api call to display in iframe
  const videoSrc = `https://www.youtube.com/embed/${techVideos[0]?.id.videoId}`;

  return (
    <div className="trending">
      <div className="trending-main-video">
        <iframe
          title="videoPlayer"
          autoPlay={1}
          src={videoSrc}
          className="trending-main-thumbnail"
        ></iframe>
      </div>
      <div className="trending-videos-container">
        {/* Removes first video from api call - video is displayed in iframe above */}
        {techVideos.slice(1).map((data) => {
          return (
            <TrendingVideoCard
              thumbnail={data.snippet.thumbnails.medium.url}
              title={data.snippet.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
