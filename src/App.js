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
  const [techVideos, setTechVideos] = useState([]);
  // const [channels, setChannels] = useState([]);
  // const [channelVideos, setChannelVideos] = useState([]);
  // const [channelId, setChannelId] = useState("");

  const [token, setToken] = useState([]);

  // Sets authorization token from Google_OAuth
  // useEffect(() => {
  //   const _token = getTokenFromUrl();
  //   if (_token) {
  //     setToken(_token);
  //   }
  // }, []);

  // Get Videos by ChannelId
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const channelVideos = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/search",
  //       {
  //         params: {
  //           part: "snippet",
  //           channelId: channelId,
  //           key: API_KEY,
  //           maxResults: 25,
  //         },
  //       }
  //     );
  //     setChannelVideos(channelVideos.data.items);
  //   };
  //   if (channelId) {
  //     fetchData();
  //   }
  // }, [channelId]);

  // Get information by ChannelId
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const channelVideos = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/search",
  //       {
  //         params: {
  //           part: "snippet",
  //           channelId: channelId,
  //           key: API_KEY,
  //           maxResults: 25,
  //         },
  //       }
  //     );
  //     setChannelVideos(channelVideos.data.items);
  //   };
  //   if (channelId) {
  //     fetchData();
  //   }
  // }, [channelId]);

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const techVideos = await axios.get(
  //         "https:www.googleapis.com/youtube/v3/search",
  //         {
  //           params: {
  //             part: "snippet",
  //             q: "React.js",
  //             type: "video",
  //             key: API_KEY,
  //             maxResults: 23,
  //           },
  //         }
  //       );

  //       setTechVideos(techVideos.data.items);
  //     } catch (err) {
  //       alert(err);
  //     }
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
      <Sidebar />{" "}
      <div className="App">
        <Searchbar
          setSearchResults={setSearchResults}
          token={token}
          setToken={setToken}
        />
        <Switch>
          <Route path="/channel">
            {/* <ChannelSection />
            <div className="channel">
              <ChannelFrame />
              <VideoList videos={channelVideos} setVideoId={setVideoId} />
            </div> */}
          </Route>
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
          <Route path="/">
            <>
              {/* <div className="app-header">
              <Welcome />
              <PopularChannels setChannelId={setChannelId} />
            </div> */}

              <IframeBanner techVideos={techVideos} />
              <Rows
                title={"React Developer Videos :"}
                setVideoId={setVideoId}
                videos={techVideos}
              />
            </>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
