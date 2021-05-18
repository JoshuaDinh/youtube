import React from "react";
import "./rows.css";
import VideoCard from "../VideoCard/VideoCard";

const Rows = () => {
  return (
    <div className="rows">
      <h5>Javascript</h5>
      <div className="row-container">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default Rows;
