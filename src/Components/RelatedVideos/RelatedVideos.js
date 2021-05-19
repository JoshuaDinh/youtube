import React from "react";
import "./relatedVideos.css";
import Switch from "@material-ui/core/Switch";
import RelatedVideoCard from "../RelatedVideoCard/RelatedVideoCard";

export const RelatedVideos = ({ relatedVideos, setVideoId }) => {
  return (
    <div className="video-suggestions">
      <div className="video-suggestions-header-container">
        <h4 className="video-suggestions-header">Up Next</h4>
        <h4 className="video-suggestions-header">Auto Play:</h4>
        <Switch />
      </div>
      {/* Does NOT display VideoCard if thumbnail is corrupted or missing  */}
      {relatedVideos.map((data) => {
        return (
          data.snippet?.thumbnails && (
            <RelatedVideoCard
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
  );
};
