import React from "react";
import "./iframeBanner.css";
import VideoCard from "../VideoCard/VideoCard";

const HomeIframeBanner = ({ videos, setVideoId }) => {
  // Gets first video from api call to display in iframe
  const videoSrc = `https://www.youtube.com/embed/${videos?.[0].videoId.videoId}`;
  return (
    <div className="home-iframe-banner">
      <div className="home-iframe-banner-main-video">
        <iframe
          title="videoPlayer"
          autoPlay={1}
          src={videoSrc}
          className="iframe-banner-main-thumbnail"
        ></iframe>
      </div>{" "}
      <div className="home-iframe-grid">
        {videos?.slice(1, 4).map((data) => {
          return (
            <VideoCard
              homepage
              setVideoId={setVideoId}
              videoId={data.videoId.videoId}
              title={data.snippet?.title}
              thumbnail={data.snippet?.thumbnails?.medium.url}
              channel={data.snippet?.channelTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeIframeBanner;
