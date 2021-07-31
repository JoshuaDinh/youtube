import React, { useState, useEffect } from "react";
import Rows from "../Components/Rows/Rows";
import IframeBanner from "../Components/IframeBanner/IframeBanner";
import Loading from "../Components/Loading/Loading";
import axios from "axios";

const VideoPage = ({ setVideoId, endPoint, title }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const videoData = await axios.get(endPoint);
        setVideos(videoData.data);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, [endPoint]);
  return (
    <>
      {loading && <Loading />}
      <IframeBanner videos={videos} />
      <Rows
        title={title}
        setVideoId={setVideoId}
        videos={videos}
        link={endPoint}
      />
    </>
  );
};

export default VideoPage;
