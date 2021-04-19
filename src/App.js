import React, { useState, useEffect } from "react";
import "./App.css";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import { VideoPlayer } from "./Components/VideoPlayer/VideoPlayer";
import { Comments } from "./Components/Comments/Comments";
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
  useEffect(() => {
    const _token = getTokenFromUrl();
    if (_token) {
      setToken(_token);
    }
  }, []);

  // search video database for results of input
  useEffect(() => {
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
    fetchData();
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
      fetchData();
    }
  }, [videoId]);

  return (
    <Router>
      <Switch>
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
            <VideoPlayer
              videoId={videoId}
              selectedVideoData={selectedVideoData}
              selectedVideoStats={selectedVideoStats}
            />
            <Comments videoId={videoId} />
            <VideoSuggestions
              searchResults={searchResults}
              setVideoId={setVideoId}
            />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
