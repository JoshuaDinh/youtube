import React, { useState, useEffect } from "react";
import "./App.css";
import requests from "./requests";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import { FeaturedVideoFrame } from "./Components/FeaturedVideoFrame/FeaturedVideoFrame";
import { SuggestionsRow } from "./Components/SuggestionsRow/SuggestionsRow";
import { VideoCardRow } from "./Components/VideoCard/VideoCardRow";

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  // Sets authorization token from Google_OAuth
  //  useEffect(() => {
  //   const _token = getTokenFromUrl();
  //   if (_token) {
  //     setToken(_token);
  //   }
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const getLikedVideos = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/videos?access_token=${token}`,
  //       {
  //         params: {
  //           part: "snippet,contentDetails,statistics",
  //           key: API_KEY,
  //           myRating: "like",
  //           maxResults: 25,
  //         },
  //       }
  //     );
  //     const getSubscriptions = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/subscriptions?access_token=${token}`,
  //       {
  //         params: {
  //           part: "snippet",
  //           key: API_KEY,
  //           mine: true,
  //           maxResults: 25,
  //         },
  //       }
  //     );
  //     const getPlayLists = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/playlists?access_token=${token}`,
  //       {
  //         params: {
  //           part: "snippet,contentDetails",
  //           key: API_KEY,
  //           mine: true,
  //           maxResults: 25,
  //         },
  //       }
  //     );
  //     setPlayLists(getPlayLists.data.items);
  //     setSubscriptions(getSubscriptions.data.items);
  //     setLikedVideos(getLikedVideos.data.items);
  //   };
  //   fetchData();
  // }, [token]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const getSearchedVideos = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/search",
  //       {
  //         params: {
  //           part: "snippet",
  //           q: input,
  //           key: API_KEY,
  //           maxResults: 25,
  //         },
  //       }
  //     );
  //     setVideos(getSearchedVideos.data.items);
  //   };

  //   const timeoutId = setTimeout(() => {
  //     if (input) {
  //       fetchData();
  //     }
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [input]);

  // useEffect(() => {
  //   async function fetchVideoInfoById() {
  //     const videoById = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/videos",
  //       {
  //         params: {
  //           part: "snippet",
  //           id: videoId,
  //           key: API_KEY,
  //           maxResults: 25,
  //         },
  //       }
  //     );
  //     const fetchComments = await axios.get(
  //       "https:www.googleapis.com/youtube/v3/commentThreads",
  //       {
  //         params: {
  //           part: "snippet",
  //           videoId: videoId,
  //           key: API_KEY,
  //           maxResults: 25,
  //         },
  //       }
  //     );
  //     setCommentThreads(fetchComments.data.items);
  //     setVideoInfoById(videoById.data.items[0]);
  //   }
  //   if (videoId) {
  //     fetchVideoInfoById();
  //   }
  // }, [videoId]);

  return (
    <div className="App">
      <div className="app-fixed-header">
        {" "}
        <Searchbar setToggleSidebar={setToggleSidebar} />
        <SuggestionsRow />
      </div>

      {toggleSidebar && <Sidebar setToggleSidebar={setToggleSidebar} />}
      <div className="app-content">
        <FeaturedVideoFrame />
        <VideoCardRow
          fetchUrl={requests.fetchReact}
          rowTitle="React.Js "
        />{" "}
        <VideoCardRow
          fetchUrl={requests.fetchJavascript}
          rowTitle="Javascript"
        />
        <VideoCardRow
          fetchUrl={requests.fetchTechnology}
          rowTitle="Technology"
        />
        <VideoCardRow fetchUrl={requests.fetchBitcoin} rowTitle="Bitcoin" />
      </div>
    </div>
  );
};

export default App;
