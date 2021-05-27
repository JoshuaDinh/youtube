import React, { useState, useEffect } from "react";
import "./App.css";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { VideoPlayer } from "./Components/VideoPlayer/VideoPlayer";
import { Comments } from "./Components/Comments/Comments";
import Rows from "./Components/Rows/Rows";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "./requests";
import { getTokenFromUrl } from "./GoogleAuth";
import { RelatedVideos } from "./Components/RelatedVideos/RelatedVideos";
import Trending from "./Components/IframeBanner/IframeBanner";
import SearchedVideoList from "./Components/SearchedVideoList/SearchedVideoList";
import IframeBanner from "./Components/IframeBanner/IframeBanner";
import { CompassCalibrationOutlined } from "@material-ui/icons";
import Welcome from "./Components/Welcome/Welcome";
import PopularChannels from "./Components/PopularChannels/PopularChannels";

const App = () => {
  const [input, setInput] = useState("");
  const [searchVideo, setSearchVideo] = useState("");
  const [videoId, setVideoId] = useState("");
  const [selectedVideoData, setSelectedVideoData] = useState("");
  const [selectedVideoStats, setSelectedVideoStats] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [techVideos, setTechVideos] = useState([]);
  const [channels, setChannels] = useState([]);

  const [token, setToken] = useState([]);

  // Sets authorization token from Google_OAuth
  useEffect(() => {
    const _token = getTokenFromUrl();
    if (_token) {
      setToken(_token);
    }
  }, []);

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

  // Search Videos based on user input
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const fetchData = async () => {
  //       const searchVideos = await axios.get(
  //         "https://www.googleapis.com/youtube/v3/search",
  //         {
  //           params: {
  //             part: "snippet",
  //             type: "video",
  //             q: input,
  //             key: API_KEY,
  //             maxResults: 4,
  //           },
  //         }
  //       );
  //       setSearchResults(searchVideos.data.items);
  //     };
  //     if (input) {
  //       fetchData();
  //     }
  //   }, 1500);
  //   return () => clearTimeout(timer);
  // }, [searchVideo, input]);

  // Get selected video data for display
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchVideoById = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/videos",
  //       {
  //         params: {
  //           part: "snippet,contentDetails,statistics",
  //           id: videoId,
  //           key: API_KEY,
  //           maxResults: 1,
  //         },
  //       }
  //     );
  //     fetchVideoById.data.items.map((data) => {
  //       setSelectedVideoData(data.snippet);
  //       setSelectedVideoStats(data.statistics);
  //     });
  //   };
  // if (videoId) {
  // fetchData();
  // }
  // }, [videoId]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const techVideos = await axios.get(
  //       "https:www.googleapis.com/youtube/v3/search",
  //       {
  //         params: {
  //           part: "snippet",
  //           q: "React.js",
  //           type: "video",
  //           key: API_KEY,
  //           maxResults: 23,
  //         },
  //       }
  //     );

  //     setTechVideos(techVideos.data.items);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const channelsById = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/channels",
  //       {
  //         params: {
  //           part: "snippet",
  //           key: API_KEY,
  //           id: "1ofGXYJ1pTI4tmmMjX5Rog",
  //         },
  //       }
  //     );
  //     setChannels(channelsById.data.items[0].snippet);
  //   };
  //   fetchData();
  // }, []);

  // console.log(channels.thumbnails?.high?.url);

  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/watch">
          <div className="Watch">
            <Searchbar
              input={input}
              setInput={setInput}
              searchVideo={searchVideo}
              setSearchVideo={setSearchVideo}
              token={token}
              setToken={setToken}
            />
            <VideoPlayer
              videoId={videoId}
              selectedVideoData={selectedVideoData}
              selectedVideoStats={selectedVideoStats}
            />
            <RelatedVideos
              relatedVideos={relatedVideos}
              setVideoId={setVideoId}
            />
          </div>
        </Route>
        <Route path="/searchResults">
          <div className="App">
            <Searchbar
              input={input}
              setInput={setInput}
              searchVideo={searchVideo}
              setSearchVideo={setSearchVideo}
              token={token}
              setToken={setToken}
            />
            <SearchedVideoList
              searchResults={searchResults}
              setVideoId={setVideoId}
            />
          </div>
        </Route>
        <Route path="/">
          <div className="App">
            <Searchbar
              input={input}
              setInput={setInput}
              searchVideo={searchVideo}
              setSearchVideo={setSearchVideo}
              token={token}
              setToken={setToken}
            />
            <div className="app-header">
              <Welcome />
              <PopularChannels />
            </div>

            <IframeBanner techVideos={techVideos} />
            <Rows
              title={"React Developer Videos :"}
              setVideoId={setVideoId}
              videos={techVideos}
            />
            {/* <Rows
              title={"Back End Development"}
              setVideoId={setVideoId}
              videos={backEndVideos}
            />
            <Rows
              title={"Full Stack Development"}
              setVideoId={setVideoId}
              videos={FullStackVideos}
            /> */}
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
