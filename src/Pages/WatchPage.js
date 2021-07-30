import React, { useEffect, useState } from "react";
import { VideoPlayer } from "../Components/VideoPlayer/VideoPlayer";
import { RelatedVideos } from "../Components/RelatedVideos/RelatedVideos";
import VideoDetails from "../Components/VideoDetails/VideoDetails";
import { Comments } from "../Components/Comments/Comments";
import axios from "axios";

import "./watchPage.css";

const WatchPage = ({ videoId, setVideoId, relatedVideos }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = axios.get(`/api/videos/watch/${videoId}`);
    };
  }, []);
  return (
    <div className="watch-page">
      <div className="watch-page-video-container">
        <VideoPlayer videoId={videoId} />{" "}
        <RelatedVideos relatedVideos={relatedVideos} setVideoId={setVideoId} />
      </div>
      <VideoDetails
      //   selectedVideoData={selectedVideoData}
      //   selectedVideoStats={selectedVideoStats}
      />
      <Comments videoId={videoId} />
    </div>
  );
};
export default WatchPage;
