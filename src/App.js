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

const App = () => {
  const [input, setInput] = useState("");
  const [searchVideo, setSearchVideo] = useState("");
  const [videoId, setVideoId] = useState("4UZrsTqkcW4");
  const [selectedVideoData, setSelectedVideoData] = useState("");
  const [selectedVideoStats, setSelectedVideoStats] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [techVideos, setTechVideos] = useState([]);
  const [backEndVideos, setBackEndVideos] = useState([]);
  const [frontEndVideos, setFrontEndVideos] = useState([]);
  const [FullStackVideos, setFullStackVideos] = useState([]);
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
            relatedToVideoId: videoId,
            type: "video",
            key: API_KEY,
            maxResults: 6,
          },
        }
      );
      setRelatedVideos(relatedVideos.data.items);
    };
    if (videoId) {
      fetchData();
    }
  }, [videoId]);

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
  //             maxResults: 12,
  //           },
  //         }
  //       );
  //       setSearchResults(searchVideos.data.items);
  //     };
  //     if (input) {
  //        fetchData();
  //     }
  //   }, 1500);
  //   return () => clearTimeout(timer);
  // }, [searchVideo, input]);

  // Search Videos for Iframe Banner / HomePage Rows
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const techVideos = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/search",
  //       {
  //         params: {
  //           part: "snippet",
  //           q: "React.js",
  //           type: "video",
  //           key: API_KEY,
  //           maxResults: 7,
  //         },
  //       }
  //     );
  //     const frontEndVideos = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/search",
  //       {
  //         params: {
  //           part: "snippet",
  //           q: "Front End development",
  //           type: "video",
  //           key: API_KEY,
  //           maxResults: 4,
  //         },
  //       }
  //     );
  //     const backEndVideos = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/search",
  //       {
  //         params: {
  //           part: "snippet",
  //           q: "Back End development",
  //           type: "video",
  //           key: API_KEY,
  //           maxResults: 4,
  //         },
  //       }
  //     );
  //     const fullStackVideos = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/search",
  //       {
  //         params: {
  //           part: "snippet",
  //           q: "Full Stack development",
  //           type: "video",
  //           key: API_KEY,
  //           maxResults: 4,
  //         },
  //       }
  //     );
  //     setTechVideos(techVideos.data.items);
  //     setFrontEndVideos(frontEndVideos.data.items);
  //     setBackEndVideos(backEndVideos.data.items);
  //     setFullStackVideos(fullStackVideos.data.items);
  //   };
  //    fetchData();
  // }, []);

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
  console.log(videoId);
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
                <IframeBanner techVideos={techVideos} />
                <Rows
                  title={"Front End Development"}
                  setVideoId={setVideoId}
                  videos={frontEndVideos}
                />
                <Rows
                  title={"Back End Development"}
                  setVideoId={setVideoId}
                  videos={backEndVideos}
                />
                <Rows
                  title={"Full Stack Development"}
                  setVideoId={setVideoId}
                  videos={FullStackVideos}
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
