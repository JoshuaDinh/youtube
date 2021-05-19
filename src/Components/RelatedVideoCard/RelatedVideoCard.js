import React from "react";
import "./relatedVideoCard.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const RelatedVideoCard = ({
  title,
  thumbnail,
  setVideoId,
  videoId,
  channel,
}) => {
  return (
    <div onClick={() => setVideoId(videoId)} className="related-video-card">
      <div className="related-video-card-overlay">
        <PlayCircleOutlineIcon className="related-video-card-play-icon" />
      </div>
      <img
        className="related-video-card-img"
        src={thumbnail}
        alt="thumbnail unavailable"
      />
      <div className="related-video-card-information">
        <p className="related-video-card-title">{title}</p>
        <p className="related-video-card-channel">-{channel}</p>
      </div>
    </div>
  );
};
export default RelatedVideoCard;
