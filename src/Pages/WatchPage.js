import React, { useEffect, useState } from "react";
import { VideoPlayer } from "../Components/VideoPlayer/VideoPlayer";
import { RelatedVideos } from "../Components/RelatedVideos/RelatedVideos";
import VideoDetails from "../Components/VideoDetails/VideoDetails";
import { Comments } from "../Components/Comments/Comments";
import Loading from "../Components/Loading/Loading";
import requests from "../requests";
import axiosConfig from "../axiosConfig";
import "./watchPage.css";
import Searchbar from "../Components/Searchbar/Searchbar";

const WatchPage = ({ videoId, setVideoId, loading, setLoading }) => {
  const [videoData, setVideoData] = useState({});
  const [likes, setLikes] = useState();
  const [dislikes, setDislikes] = useState();

  useEffect(() => {
    setVideoId(window.location.pathname.split("/").splice(2));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosConfig.get(
          `${requests.fetchVideoById}/${videoId}`
        );
        setVideoData(response.data.snippet);
        setLikes(response.data.likes);
        setDislikes(response.data.dislikes);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 700);
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, [videoId]);

  return (
    <>
      <Searchbar />
      <div className="watch-page-video-container">
        {loading && <Loading />}
        <VideoPlayer videoId={videoId} />
        <RelatedVideos setVideoId={setVideoId} videoId={videoId} />
      </div>
      <VideoDetails
        videoData={videoData}
        videoId={videoId}
        likes={likes}
        dislikes={dislikes}
        setLikes={setLikes}
        setDislikes={setDislikes}
      />
      <Comments videoId={videoId} setVideoId={setVideoId} />
    </>
  );
};
export default WatchPage;
