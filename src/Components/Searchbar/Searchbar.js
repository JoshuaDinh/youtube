import React from "react";
import "./searchbar.css";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { loginUrl } from "../../GoogleAuth";
import { Avatar } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export const Searchbar = ({ input, setInput, setSearchVideo, token }) => {
  const submitSearch = (e) => {
    e.preventDefault(e);
    setSearchVideo(input);
  };

  return (
    <header className="searchbar">
      <form
        className="searchbar-form"
        onSubmit={(e) => {
          submitSearch(e);
        }}
      >
        <div className="searchbar-input-container">
          <input
            className="searchbar-input"
            placeholder="Search.."
            type="text"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <div
            className="searchbar-search-icon-container"
            onClick={(input) => {
              setSearchVideo(input);
            }}
          >
            <SearchIcon className="searchbar-search-icon" />
          </div>
        </div>
        <div className="searchbar-icon-container">
          {token.length > 1 ? (
            <Avatar className="searchbar-avatar-icon" />
          ) : (
            <a href={loginUrl} className="searchbar-login">
              Sign In
            </a>
          )}
          <VideoCallIcon className="searchbar-video-icon" />
          <MoreVertIcon className="searchbar-vert-icon" />
        </div>
      </form>
    </header>
  );
};
