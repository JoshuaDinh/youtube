import React from "react";
import "./rows.css";
import VideoCard from "../VideoCard/VideoCard";
import { Link } from "react-router-dom";

const Rows = ({ videos, setVideoId, title, link, homepage }) => {
  // Displays Link if user is on the homepage
  const viewAllBtn = () => {
    if (window.location.pathname === "/") {
      return (
        <Link to={link}>
          <div className="view-link">View All</div>
        </Link>
      );
    }
  };

  return (
    <div className="rows">
      <h5 className="rows-title">{title}</h5>
      {viewAllBtn()}
      <div className="rows-card-container">
        {/* Determine how many videos to display */}
        {homepage
          ? videos?.slice(1, 5).map((data) => {
              return (
                data.snippet?.thumbnails && (
                  <VideoCard
                    setVideoId={setVideoId}
                    videoId={data.videoId.videoId}
                    title={data.snippet?.title}
                    thumbnail={data.snippet?.thumbnails?.medium.url}
                    channel={data.snippet?.channelTitle}
                  />
                )
              );
            })
          : videos?.slice(1).map((data) => {
              return (
                data.snippet?.thumbnails && (
                  <VideoCard
                    setVideoId={setVideoId}
                    videoId={data.videoId.videoId}
                    title={data.snippet?.title}
                    thumbnail={data.snippet?.thumbnails?.medium.url}
                    channel={data.snippet?.channelTitle}
                  />
                )
              );
            })}
      </div>
    </div>
  );
};

export default Rows;
