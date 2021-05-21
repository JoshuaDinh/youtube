import React from "react";
import "./iframeBanner.css";
import VideoCard from "../VideoCard/VideoCard";

const IframeBanner = ({ techVideos }) => {
  // Gets first video from api call to display in iframe
  const videoSrc = `https://www.youtube.com/embed/${techVideos[0]?.id.videoId}`;

  return (
    <div className="iframe-banner">
      <div className="iframe-banner-main-video">
        <iframe
          title="videoPlayer"
          autoPlay={1}
          src={videoSrc}
          className="iframe-banner-main-thumbnail"
        ></iframe>
      </div>
      <div className="iframe-banner-videos-container">
        {/* Removes first video from api call - video is displayed in iframe above */}
        {techVideos.slice(1).map((data) => {
          return (
            <VideoCard
              thumbnail={data.snippet.thumbnails.medium.url}
              title={data.snippet.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IframeBanner;
