import React from "react";
import "./recommended.css";
import jslogo from "../../images/js-logo.png";

export const RecommendedVideoCard = () => {
  return (
    <div className="recommendedvideocard">
      {/* <div className="recommended-thumbnail"></div> */}
      <img className="recommended-thumbnail" src={jslogo} />
      <div className="recommended-video-info-container">
        <p>TITLE</p>
        <p>account name</p>
        <p>views</p>
      </div>
    </div>
  );
};

export const Recommended = () => {
  return (
    <div className="recommended">
      <RecommendedVideoCard />
      <RecommendedVideoCard />
      <RecommendedVideoCard />
      <RecommendedVideoCard />
      <RecommendedVideoCard />
      <RecommendedVideoCard />
      <RecommendedVideoCard />
      <RecommendedVideoCard />
      <RecommendedVideoCard />
    </div>
  );
};
