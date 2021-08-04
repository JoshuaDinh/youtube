import React, { useEffect, useState } from "react";
import { VideoPlayer } from "../Components/VideoPlayer/VideoPlayer";
import { RelatedVideos } from "../Components/RelatedVideos/RelatedVideos";
import VideoDetails from "../Components/VideoDetails/VideoDetails";
import { Comments } from "../Components/Comments/Comments";
import requests from "../requests";
import axios from "axios";

import "./watchPage.css";

const WatchPage = ({ videoId, setVideoId, relatedVideos }) => {
  return (
    <div className="watch-page">
      <div className="watch-page-video-container">
        <VideoPlayer videoId={videoId} />
        <RelatedVideos relatedVideos={relatedVideos} setVideoId={setVideoId} />
      </div>
      <div className="watch-page-information">
        <VideoDetails />
        <Comments videoId={videoId} />
      </div>
    </div>
  );
};
export default WatchPage;
