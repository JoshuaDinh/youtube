import React, { useState, useEffect } from "react";
import "./App.css";
import requests from "./requests";
import { Sidebar } from "./Components/Sidebar/Sidebar";
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
import { NewSidebar } from "./Components/NewSidebar/NewSidebar";
import { ToggleSidebar } from "./Components/NewSidebar/ToggleSidebar";

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [input, setInput] = useState("");
  const [searchVideo, setSearchVideo] = useState("");
  const [videoId, setVideoId] = useState("");
  const [selectedVideoData, setSelectedVideoData] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
            maxResults: 5,
          },
        }
      );
      setSearchResults(searchVideos.data.items);
    };
    // fetchData();
  }, [searchVideo]);
  console.log(searchResults);

  // get selected video data for display
  useEffect(() => {
    const fetchData = async () => {
      const fetchVideoById = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet",
            id: videoId,
            key: API_KEY,
            maxResults: 25,
          },
        }
      );
      setSelectedVideoData(fetchVideoById.data.items[0]);
    };
    if (videoId) {
      // fetchData();
    }
  }, [videoId]);

  console.log(selectedVideoData);
  return (
    <Router>
      <div className="App">
        <div className="app-fixed-header">
          {" "}
          <Searchbar
            input={input}
            setInput={setInput}
            searchVideo={searchVideo}
            setSearchVideo={setSearchVideo}
            setToggleSidebar={setToggleSidebar}
            toggleSidebar={toggleSidebar}
          />
          <SuggestionsRow />
        </div>

        {/* {toggleSidebar ? (
          <ToggleSidebar />
        ) : (
          <NewSidebar toggleSidebar={toggleSidebar} />
        )} */}
        <Switch>
          {toggleSidebar && <Sidebar setToggleSidebar={setToggleSidebar} />}{" "}
          <div className="app-content">
            <Route path="/Watch">
              <WatchVideo videoId={videoId} />
            </Route>
            <Route path="/Results">
              <Results searchResults={searchResults} />
            </Route>
            <Route path="/Home">
              <FeaturedVideoFrame />
              <VideoCardRow
                setVideoId={setVideoId}
                fetchUrl={requests.fetchReact}
                rowTitle="React.Js "
              />{" "}
              <VideoCardRow
                setVideoId={setVideoId}
                fetchUrl={requests.fetchJavascript}
                rowTitle="Javascript"
              />
              <VideoCardRow
                setVideoId={setVideoId}
                fetchUrl={requests.fetchTechnology}
                rowTitle="Technology"
              />
              <VideoCardRow
                setVideoId={setVideoId}
                fetchUrl={requests.fetchBitcoin}
                rowTitle="Bitcoin"
              />{" "}
            </Route>
          </div>{" "}
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
