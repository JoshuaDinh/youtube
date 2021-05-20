import React from "react";
import "./trending.css";
import TrendingVideoCard from "../Trending/TrendingVideoCard";

const Trending = () => {
  const videoSrc = `https://www.youtube.com/embed/L-03Rc4j_9g`;

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
        <TrendingVideoCard />
        <TrendingVideoCard />
        <TrendingVideoCard />
        <TrendingVideoCard />
        <TrendingVideoCard />
        <TrendingVideoCard />
      </div>
    </div>
  );
};

export default Trending;
