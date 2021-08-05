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
  const [videoId, setVideoId] = useState("");
  const [selectedVideoData, setSelectedVideoData] = useState("");
  const [selectedVideoStats, setSelectedVideoStats] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [token, setToken] = useState([]);
  const [loading, setLoading] = useState(false);

  // Sets authorization token from Google_OAuth
  // useEffect(() => {
  //   const _token = getTokenFromUrl();
  //   if (_token) {
  //     setToken(_token);
  //   }
  // }, []);

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
          <Route path="/watch/:videoId">
            <WatchPage
              videoId={videoId}
              setVideoId={setVideoId}
              loading={loading}
              setLoading={setLoading}
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
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route path="/Node">
            <VideoPage
              endPoint={requests.Node}
              title="Node.js Videos"
              setVideoId={setVideoId}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route path="/Html-Css">
            <VideoPage
              endPoint={requests.htmlcss}
              title="Html & Css  Videos"
              setVideoId={setVideoId}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route path="/Javascript">
            <VideoPage
              endPoint={requests.Javascript}
              title="Javascript Videos"
              setVideoId={setVideoId}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route path="/MongoDB">
            <VideoPage
              endPoint={requests.MongoDB}
              title="MongoDB Videos"
              setVideoId={setVideoId}
              loading={loading}
              setLoading={setLoading}
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
