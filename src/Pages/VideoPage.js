import React, { useState, useEffect } from "react";
import Rows from "../Components/Rows/Rows";
import IframeBanner from "../Components/IframeBanner/IframeBanner";
import axios from "axios";

const VideoPage = ({ setVideoId, endPoint }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const videoData = await axios.get(endPoint);
        setVideos(videoData.data);
        setLoading(false);
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <IframeBanner videos={videos} />
      <Rows
        title={"React Developer Videos :"}
        setVideoId={setVideoId}
        videos={videos}
      />
    </>
  );
};

export default VideoPage;
