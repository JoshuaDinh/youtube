import React, { useState, useEffect } from "react";
import "./App.css";
import requests from "./requests";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import { FeaturedVideoFrame } from "./Components/FeaturedVideoFrame/FeaturedVideoFrame";
import { SuggestionsRow } from "./Components/SuggestionsRow/SuggestionsRow";
import { VideoCardRow } from "./Components/VideoCard/VideoCardRow";
import { Results } from "./Components/Results/Results";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "./requests";
import { Watch } from "@material-ui/icons";
import { WatchVideo } from "./Components/WatchVideo/WatchVideo";
import { WatchSidebar } from "./Components/WatchSidebar/WatchSidebar";
import { MainSidebar } from "./Components/MainSidebar/MainSidebar";
import { VideoCard } from "./Components/VideoCard/VideoCard";
import { getTokenFromUrl } from "./GoogleAuth";
import jslogo from "./images/js-logo.png";

const App = () => {
  const [toggleWatchSidebar, setToggleWatchSidebar] = useState(false);
  const [toggleMainSidebar, setToggleMainSidebar] = useState(false);
  const [input, setInput] = useState("Javacript");
  const [searchVideo, setSearchVideo] = useState("");
  const [videoId, setVideoId] = useState("");
  const [selectedVideoDataTitle, setSelectedVideoDataTitle] = useState("");
  const [selectedVideoDataStats, setSelectedVideoDataStats] = useState("");
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
            maxResults: 1,
          },
        }
      );
      setSearchResults(searchVideos.data.items);
    };
    fetchData();
  }, [searchVideo]);

  // get selected video data for display
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
        setSelectedVideoDataTitle(data.snippet.title);
        setSelectedVideoDataStats(data.snippet.statistics);
      });
    };
    if (videoId) {
      fetchData();
    }
  }, [videoId]);

  console.log(selectedVideoDataStats);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Watch">
            <Searchbar
              input={input}
              setInput={setInput}
              searchVideo={searchVideo}
              setSearchVideo={setSearchVideo}
              ToggleSidebars={() => setToggleWatchSidebar(!toggleWatchSidebar)}
              token={token}
            />
            <SuggestionsRow />
            <div className="app-watch">
              {toggleWatchSidebar && (
                <WatchSidebar
                  toggleWatchSidebar={toggleWatchSidebar}
                  setToggleWatchSidebar={setToggleWatchSidebar}
                />
              )}
              <WatchVideo
                selectedVideoDataTitle={selectedVideoDataTitle}
                videoId={videoId}
              />
            </div>
          </Route>
          <Route path="/">
            <Searchbar
              input={input}
              setInput={setInput}
              searchVideo={searchVideo}
              setSearchVideo={setSearchVideo}
              ToggleSidebars={() => setToggleMainSidebar(!toggleMainSidebar)}
              token={token}
              setToken={setToken}
            />
            <SuggestionsRow setSearchVideo={setSearchVideo} />
            <div className="app-content">
              <MainSidebar
                toggleMainSidebar={toggleMainSidebar}
                setToggleMainSidebar={setToggleMainSidebar}
              />
              <div className="app-home">
                {searchResults.map((video) => {
                  return (
                    <VideoCard
                      setVideoId={() => setVideoId(video.id.videoId)}
                      title="Async-await"
                      title={video.snippet.title}
                      thumbnail={video.snippet.thumbnails.high.url}
                    />
                  );
                })}
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

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

// <Router>
//       <div className="App">
//         <div className="app-fixed-header">
//           {" "}
//           <Searchbar
//             input={input}
//             setInput={setInput}
//             searchVideo={searchVideo}
//             setSearchVideo={setSearchVideo}
//             openWatchSidebar={openWatchSidebar}
//             setOpenWatchSidebar={setOpenWatchSidebar}
//             toggleMainSidebar={toggleMainSidebar}
//             setToggleMainSidebar={setToggleMainSidebar}
//             ToggleSidebars={ToggleSidebars}
//           />
//           <SuggestionsRow />
//         </div>

//         <Switch>
//           <Route path="/Watch">
//             <div className="app-watch">
//               {openWatchSidebar && (
//                 <WatchSidebar
//                   openWatchSidebar={openWatchSidebar}
//                   setOpenWatchSidebar={setOpenWatchSidebar}
//                   ToggleSidebars={ToggleSidebars}
//                 />
//               )}
//               <WatchVideo videoId={videoId} />
//             </div>
//           </Route>
//           <div className="app-content">
//             {toggleMainSidebar ? (
//               <ToggleMainSidebar
//                 setToggleMainSidebar={setToggleMainSidebar}
//                 toggleMainSidebar={toggleMainSidebar}
//               />
//             ) : (
//               <MainSidebar />
//             )}
//             <Route path="/Results">
//               <div className="app-results">
//                 <Results searchResults={searchResults} />
//               </div>
//             </Route>
//             <Route path="/Home">
//               <div className="app-home">
//                 {/* <FeaturedVideoFrame /> */}
//                 <VideoCardRow
//                   setVideoId={setVideoId}
//                   fetchUrl={requests.fetchReact}
//                   rowTitle="React.Js "
//                 />{" "}
//                 <VideoCardRow
//                   setVideoId={setVideoId}
//                   fetchUrl={requests.fetchJavascript}
//                   rowTitle="Javascript"
//                 />
//                 <VideoCardRow
//                   setVideoId={setVideoId}
//                   fetchUrl={requests.fetchTechnology}
//                   rowTitle="Technology"
//                 />
//                 <VideoCardRow
//                   setVideoId={setVideoId}
//                   fetchUrl={requests.fetchBitcoin}
//                   rowTitle="Bitcoin"
//                 />{" "}
//               </div>
//             </Route>
//           </div>{" "}
//         </Switch>
//       </div>
//     </Router>
