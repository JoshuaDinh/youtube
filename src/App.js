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
import { VideoSuggestions } from "./Components/VideoSuggestions/VideoSuggestions";

const App = () => {
  const [input, setInput] = useState("Javascript");
  const [searchVideo, setSearchVideo] = useState("");
  const [videoId, setVideoId] = useState("4UZrsTqkcW4");
  const [selectedVideoData, setSelectedVideoData] = useState("");
  const [selectedVideoStats, setSelectedVideoStats] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [token, setToken] = useState([]);

  // Sets authorization token from Google_OAuth
  // useEffect(() => {
  //   const _token = getTokenFromUrl();
  //   if (_token) {
  //     setToken(_token);
  //   }
  // }, []);

  // search video database for results of input
  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchData = async () => {
        const searchVideos = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              q: input,
              key: API_KEY,
              maxResults: 6,
            },
          }
        );
        setSearchResults(searchVideos.data.items);
      };
      // fetchData();
    }, 1500);
    return () => clearTimeout(timer);
  }, [searchVideo, input]);

  console.log(videoId);

  // Get selected video data for display
  useEffect(() => {
    const fetchData = async () => {
      const fetchVideoById = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet,contentDetails,statistics",
            id: videoId,
            key: API_KEY,
            maxResults: 1,
          },
        }
      );
      fetchVideoById.data.items.map((data) => {
        setSelectedVideoData(data.snippet);
        setSelectedVideoStats(data.statistics);
      });
    };
    if (videoId) {
      // fetchData();
    }
  }, [videoId]);

  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/watch">
          <div className="App">
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
            <VideoSuggestions
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
            <Rows />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
