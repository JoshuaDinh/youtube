import React from "react";
import "./recommended.css";
import jslogo from "../../images/js-logo.png";

export const RecommendedVideoCard = () => {
  return (
    <div className="recommendedvideocard">
      {/* <div className="recommended-thumbnail"></div> */}
      <img className="recommended-thumbnail" src={jslogo} />
      <div className="recommended-video-info-container">
        <p className="recommended-title">Javacript Tutorials</p>
        <p className="recommended-account">Joshua Dinh</p>
        <p className="recommended-views">11k Views</p>
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
