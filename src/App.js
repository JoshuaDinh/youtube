import React, { useState, useEffect } from "react";
import "./App.css";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Rows from "./Components/Rows/Rows";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
// import { API_KEY } from "./requests";
// import { getTokenFromUrl } from "./GoogleAuth";
import IframeBanner from "./Components/IframeBanner/IframeBanner";
import VideoList from "./Components/VideoList/VideoList";
import requests from "./requests";
import VideoPage from "./Pages/VideoPage";
import WatchPage from "./Pages/WatchPage";
import HomePage from "./Pages/HomePage";

const App = () => {
  const [searchVideo, setSearchVideo] = useState("");
  const [videoId, setVideoId] = useState("Ke90Tje7VS0");
  const [selectedVideoData, setSelectedVideoData] = useState("");
  const [selectedVideoStats, setSelectedVideoStats] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [reactVideos, setReactVideos] = useState([]);
  const [frontEndVideos, setFrontEndVideos] = useState([]);
  const [backEndVideos, setBackEndVideos] = useState([]);
  const [fullStackVideos, setFullStackVideos] = useState([]);
  const [javascriptVideos, setJavacriptVideos] = useState([]);
  const [mongoVideos, setMongoVideos] = useState([]);
  const [token, setToken] = useState([]);

  // Sets authorization token from Google_OAuth
  // useEffect(() => {
  //   const _token = getTokenFromUrl();
  //   if (_token) {
  //     setToken(_token);
  //   }
  // }, []);

  // Get related videos to selected video ID
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const relatedVideos = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/search",
  //       {
  //         params: {
  //           part: "snippet",
  //           relatedToVideoId: videoId,
  //           type: "video",
  //           key: API_KEY,
  //           maxResults: 6,
  //         },
  //       }
  //     );
  //     setRelatedVideos(relatedVideos.data.items);
  //   };
  //   if (videoId) {
  //     fetchData();
  //   }
  // }, [videoId]);

  // Get selected video data for display
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const fetchVideoById = await axios.get(
  //         "https://www.googleapis.com/youtube/v3/videos",
  //         {
  //           params: {
  //             part: "snippet,contentDetails,statistics",
  //             id: videoId,
  //             key: API_KEY,
  //             maxResults: 1,
  //           },
  //         }
  //       );
  //       fetchVideoById.data.items.map((data) => {
  //         setSelectedVideoData(data.snippet);
  //         setSelectedVideoStats(data.statistics);
  //       });
  //     } catch (err) {
  //       alert(err);
  //     }
  //   };
  //   if (videoId) {
  //     fetchData();
  //   }
  // }, [videoId]);

  return (
    <Router>
      <Sidebar />
      <div className="App">
        <Searchbar
          setSearchResults={setSearchResults}
          token={token}
          setToken={setToken}
        />
        <Switch>
          <Route path="/channel"></Route>
          <Route path="/view/:videoId">
            <WatchPage
              videoId={videoId}
              setVideoId={setVideoId}
              relatedVideos={relatedVideos}
            />
          </Route>
          <Route path="/searchResults">
            <div className="App">
              <VideoList videos={searchResults} setVideoId={setVideoId} />
            </div>
          </Route>
          {/* Video Routes */}
          <Route path="/React">
            <VideoPage
              endPoint={requests.React}
              title="React Videos"
              setVideoId={setVideoId}
            />
          </Route>
          <Route path="/Node">
            <VideoPage
              endPoint={requests.Node}
              title="Node.js Videos"
              setVideoId={setVideoId}
            />
          </Route>
          <Route path="/Html-Css">
            <VideoPage
              endPoint={requests.htmlcss}
              title="Html & Css  Videos"
              setVideoId={setVideoId}
            />
          </Route>
          <Route path="/Javascript">
            <VideoPage
              endPoint={requests.Javascript}
              title="Javascript Videos"
              setVideoId={setVideoId}
            />
          </Route>
          <Route path="/MongoDB">
            <VideoPage
              endPoint={requests.MongoDB}
              title="MongoDB Videos"
              setVideoId={setVideoId}
            />
          </Route>
          {/* HomePage */}
          <Route path="/">
            <HomePage setVideoId={setVideoId} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
