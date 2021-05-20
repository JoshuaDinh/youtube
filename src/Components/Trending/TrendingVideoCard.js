import React from "react";
import "./trending.css";

const TrendingVideoCard = () => {
  return (
    <div className="trending-video-card">
      {/* <div className="trending-overlay"></div> */}
      <p className="trending-video-card-title"> Javascript</p>
      <img
        src="https://i.ytimg.com/vi/PkZNo7MFNFg/mqdefault.jpg"
        alt="#"
        className="trending-video-thumbnail"
      />
    </div>
  );
};

export default TrendingVideoCard;
