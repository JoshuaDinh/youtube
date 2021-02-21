import React from "react";
import "./recommended.css";
import jslogo from "../../images/js-logo.png";

export const RecommendedVideoCard = ({ title, account, views }) => {
  return (
    <div className="recommendedvideocard">
      {/* <div className="recommended-thumbnail"></div> */}
      <img className="recommended-thumbnail" src={jslogo} />
      <div className="recommended-video-info-container">
        <p className="recommended-title">{title}</p>
        <p className="recommended-account">{account}</p>
        <p className="recommended-views">{views}</p>
      </div>
    </div>
  );
};

export const Recommended = () => {
  return (
    <div className="recommended">
      <RecommendedVideoCard
        title="Javacript Tutorials"
        account="joshua dinh"
        views="11k"
      />
      <RecommendedVideoCard
        title="Javacript Tutorials"
        account="joshua dinh"
        views="11k"
      />
      <RecommendedVideoCard
        title="Javacript Tutorials"
        account="joshua dinh"
        views="11k"
      />
      <RecommendedVideoCard
        title="Javacript Tutorials"
        account="joshua dinh"
        views="11k"
      />
      <RecommendedVideoCard
        title="Javacript Tutorials"
        account="joshua dinh"
        views="11k"
      />
    </div>
  );
};
