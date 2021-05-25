import React from "react";
import "./relatedVideos.css";
import Switch from "@material-ui/core/Switch";
import RelatedVideoCard from "../RelatedVideoCard/RelatedVideoCard";

export const RelatedVideos = ({ relatedVideos, setVideoId }) => {
  return (
    <div className="related-video">
      <div className="related-video-header-container">
        <h4 className="related-video-header">Up Next</h4>
        <h4 className="related-video-header">Auto Play:</h4>
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
