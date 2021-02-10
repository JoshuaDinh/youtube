import React, { useState, useEffect } from "react";
import "./searchbar.css";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import { SuggestionsRow } from "../SuggestionsRow/SuggestionsRow";
import { API_KEY } from "../../requests";
import axios from "axios";

export const Searchbar = ({
  setToggleSidebar,
  input,
  setInput,
  searchVideo,
  setSearchVideo,
}) => {
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
    };
    // fetchData();
  }, []);

  const submitSearch = (e) => {
    e.preventDefault(e);
    setSearchVideo(input);
  };

  return (
    <header className="searchbar">
      <form
        className="searchbar-form"
        onSubmit={() => {
          submitSearch();
        }}
      >
        <div className="searchbar-icons-left-container">
          <MenuIcon
            onClick={() => setToggleSidebar(true)}
            className="searchbar-menu-icon"
          />
          <img className="youtube-logo" src={logo} alt="youtube-logo" />
        </div>
        <div className="searchbar-input-container">
          <input
            className="searchbar-input"
            placeholder="Search.."
            type="text"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <SearchIcon
            className="searchbar-search-icon"
            onClick={(input) => {
              setSearchVideo(input);
            }}
          />
        </div>
        <div className="searchbar-icons-right-container">
          <HomeIcon className="searchbar-home-icon" />
          <NotificationsIcon className="searchbar-notifications-icon" />
          <AccountCircleIcon className="searchbar-avatar-icon" />
        </div>
      </form>
    </header>
  );
};
