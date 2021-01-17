import React, { useState, useEffect } from "react";
import "./App.css";
import requests from "./requests";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import { FeaturedVideoFrame } from "./Components/FeaturedVideoFrame/FeaturedVideoFrame";
import { SuggestionsRow } from "./Components/SuggestionsRow/SuggestionsRow";
import { VideoCardRow } from "./Components/VideoCard/VideoCardRow";

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="App">
      <div className="app-fixed-header">
        {" "}
        <Searchbar setToggleSidebar={setToggleSidebar} />
        <SuggestionsRow />
      </div>

      {toggleSidebar && <Sidebar setToggleSidebar={setToggleSidebar} />}
      <div className="app-content">
        <FeaturedVideoFrame />
        <VideoCardRow
          fetchUrl={requests.fetchReact}
          rowTitle="React.Js "
        />{" "}
        <VideoCardRow
          fetchUrl={requests.fetchJavascript}
          rowTitle="Javascript"
        />
        <VideoCardRow
          fetchUrl={requests.fetchTechnology}
          rowTitle="Technology"
        />
        <VideoCardRow fetchUrl={requests.fetchBitcoin} rowTitle="Bitcoin" />
      </div>
    </div>
  );
};

export default App;
