import React from "react";
import "./rows.css";
import VideoCard from "../VideoCard/VideoCard";

const Rows = ({ videos, setVideoId, title }) => {
  return (
    <div className="rows">
      <h5 className="rows-title">{title}</h5>
      <div className="rows-card-container">
        {videos.slice(7).map((data) => {
          return (
            data.snippet?.thumbnails && (
              <VideoCard
                setVideoId={setVideoId}
                videoId={data.id.videoId}
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
