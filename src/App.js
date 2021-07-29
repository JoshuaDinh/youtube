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
import IframeBanner from "./Components/IframeBanner/IframeBanner";
import VideoList from "./Components/VideoList/VideoList";
import Welcome from "./Components/Welcome/Welcome";
import PopularChannels from "./Components/PopularChannels/PopularChannels";
import ChannelBanner from "./Components/ChannelBanner/ChannelBanner";
import ChannelSection from "./Components/ChannelSection/ChannelSection";
import ChannelFrame from "./Components/ChannelFrame/ChannelFrame";
import VideoDetails from "./Components/VideoDetails/VideoDetails";

const App = () => {
  const [searchVideo, setSearchVideo] = useState("");
  const [videoId, setVideoId] = useState("");
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const react = await axios.get("/api/videos/react");
        setReactVideos(react.data);
        const javascript = await axios.get("/api/videos/javascript");
        setJavacriptVideos(javascript.data);
        const frontEnd = await axios.get("/api/videos/frontend");
        setFrontEndVideos(frontEnd.data);
        const backEnd = await axios.get("/api/videos/backend");
        setBackEndVideos(backEnd.data);
        const fullStack = await axios.get("/api/videos/fullStack");
        setFullStackVideos(fullStack.data);
        const mongo = await axios.get("/api/videos/mongo");
        setMongoVideos(mongo.data);
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, []);

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
          <Route path="/watch">
            <div className="Watch">
              <div className="watch-left-container">
                <VideoPlayer videoId={videoId} />
                <VideoDetails
                  selectedVideoData={selectedVideoData}
                  selectedVideoStats={selectedVideoStats}
                />
                <Comments videoId={videoId} />
              </div>
              <RelatedVideos
                relatedVideos={relatedVideos}
                setVideoId={setVideoId}
              />
            </div>
          </Route>
          <Route path="/searchResults">
            <div className="App">
              <VideoList videos={searchResults} setVideoId={setVideoId} />
            </div>
          </Route>
          {/* Video Routes */}
          <Route path="/fullStack">
            <>
              <IframeBanner videos={fullStackVideos} />
              <Rows
                title={"Full-Stack Developer Videos :"}
                setVideoId={setVideoId}
                videos={fullStackVideos}
              />
            </>
          </Route>
          <Route path="/backend">
            <>
              <IframeBanner videos={backEndVideos} />
              <Rows
                title={"Back-End Developer Videos :"}
                setVideoId={setVideoId}
                videos={backEndVideos}
              />
            </>
          </Route>
          <Route path="/frontend">
            <>
              <IframeBanner videos={frontEndVideos} />
              <Rows
                title={"Front-End Developer Videos :"}
                setVideoId={setVideoId}
                videos={frontEndVideos}
              />
            </>
          </Route>

          <Route path="/javascript">
            <>
              <IframeBanner videos={javascriptVideos} />
              <Rows
                title={"Javascript Videos :"}
                setVideoId={setVideoId}
                videos={javascriptVideos}
              />
            </>
          </Route>

          <Route path="/mongo">
            <>
              <IframeBanner videos={mongoVideos} />
              <Rows
                title={"MongoDB  Videos :"}
                setVideoId={setVideoId}
                videos={mongoVideos}
              />
            </>
          </Route>
          {/* HomePage */}
          <Route path="/">
            <>
              <IframeBanner videos={reactVideos} />
              <Rows
                title={"React Developer Videos :"}
                setVideoId={setVideoId}
                videos={reactVideos}
              />
            </>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
