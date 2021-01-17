import React, { useState, useEffect } from "react";
import "./featuredvideoframe.css";
import axios from "axios";

export const FeaturedVideoFrame = () => {
  const [featuredVideo, setFeaturedVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const getFeaturedVideos = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=Javascript+Tutorials&key=AIzaSyDhH1Pv_8hlOVJr0dFrkngzaMLkU9JzXGE"
      );
      setFeaturedVideo(getFeaturedVideos.data.items[0].id.videoId);
    };
    // fetchData();
  }, []);

  const videoSrc = `https://www.youtube.com/embed/${featuredVideo}`;
  return (
    <div className="featured-video-frame-container">
      <h5 className="featured-video-header">Featured</h5>
      <div className="featured-video-frame">
        <iframe
          className="featured-video"
          title="videoPlayer"
          autoplay={1}
          src={videoSrc}
        />
      </div>
    </div>
  );
};
