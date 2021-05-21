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
import Trending from "./Components/Trending/Trending";
import SearchedVideoList from "./Components/SearchedVideoList/SearchedVideoList";

const App = () => {
  const [input, setInput] = useState("");
  const [searchVideo, setSearchVideo] = useState("");
  const [videoId, setVideoId] = useState("4UZrsTqkcW4");
  const [selectedVideoData, setSelectedVideoData] = useState("");
  const [selectedVideoStats, setSelectedVideoStats] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [techVideos, setTechVideos] = useState([]);
  const [token, setToken] = useState([]);

  // Sets authorization token from Google_OAuth
  // useEffect(() => {
  //   const _token = getTokenFromUrl();
  //   if (_token) {
  //     setToken(_token);
  //   }
  // }, []);

  // Get related videos to selected video ID
  useEffect(() => {
    const fetchData = async () => {
      const relatedVideos = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            relatedToVideoId: "4UZrsTqkcW4",
            type: "video",
            key: API_KEY,
            maxResults: 6,
          },
        }
      );
      setRelatedVideos(relatedVideos.data.items);
    };
    // fetchData();
  }, [videoId]);

  // Search Videos based on user input
  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchData = async () => {
        const searchVideos = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              type: "video",
              q: input,
              key: API_KEY,
              maxResults: 12,
            },
          }
        );
        setSearchResults(searchVideos.data.items);
      };
      if (input) {
        // fetchData();
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [searchVideo, input]);

  // Search Videos for homepage display
  useEffect(() => {
    const fetchData = async () => {
      const techVideos = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            q: "React.js",
            type: "video",
            key: API_KEY,
            maxResults: 7,
          },
        }
      );
      setTechVideos(techVideos.data.items);
    };
    fetchData();
  }, []);

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
            {searchResults.length > 3 ? (
              <SearchedVideoList
                searchResults={searchResults}
                title="title"
                thumbnail=""
              />
            ) : (
              <>
                <Trending techVideos={techVideos} />
                <Rows
                  title={"Trending"}
                  setVideoId={setVideoId}
                  searchResults={searchResults}
                />
              </>
            )}
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

// <Rows
// title={"Javascript"}
// setVideoId={setVideoId}
// searchResults={searchResults}
// />
// <Rows
// title={"Typescript"}
// setVideoId={setVideoId}
// searchResults={searchResults}
// />
