import React, { useState, useEffect } from "react";
import "./rows.css";
import VideoCard from "../VideoCard/VideoCard";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const PaginatedRows = ({ videos, setVideoId, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPerPage] = useState(4);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  console.log(currentVideos);
  return (
    <div className="rows">
      <h5 className="rows-title">{title}</h5>
      <div className="rows-card-container">
        {currentVideos.map((data) => {
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

export default PaginatedRows;
