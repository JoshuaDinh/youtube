import React, { useEffect, useState } from "react";
import { VideoPlayer } from "../Components/VideoPlayer/VideoPlayer";
import { RelatedVideos } from "../Components/RelatedVideos/RelatedVideos";
import VideoDetails from "../Components/VideoDetails/VideoDetails";
import { Comments } from "../Components/Comments/Comments";
import requests from "../requests";
import axios from "axios";

import "./watchPage.css";
import HomeIframeBanner from "../Components/IframeBanner/HomeIframeBanner";

const WatchPage = ({ videoId, setVideoId }) => {
  useEffect(() => {
    setVideoId(window.location.pathname.split("/").splice(2));
  }, []);
  return (
    <>
      <div className="watch-page-video-container">
        <VideoPlayer videoId={videoId} />
        <RelatedVideos setVideoId={setVideoId} videoId={videoId} />
      </div>
      <div className="watch-page-information">
        <VideoDetails />
        <Comments videoId={videoId} setVideoId={setVideoId} />
      </div>
    </>
  );
};
export default WatchPage;
