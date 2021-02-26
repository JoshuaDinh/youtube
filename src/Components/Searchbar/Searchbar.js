import React, { useState, useEffect } from "react";
import "./searchbar.css";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { loginUrl } from "../../GoogleAuth";
import { Avatar } from "@material-ui/core";

export const Searchbar = ({
  input,
  setInput,
  setSearchVideo,
  ToggleSidebars,
  token,
}) => {
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
        <div className="searchbar-icons-left-container">
          <MenuIcon
            onClick={() => ToggleSidebars()}
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
          <div
            className="router-link"
            onClick={(input) => {
              setSearchVideo(input);
            }}
          >
            {" "}
            <SearchIcon className="searchbar-search-icon" />
          </div>
        </div>
        <div className="searchbar-icons-right-container">
          <Link className="router-link" to="/Home">
            {" "}
            <HomeIcon className="searchbar-home-icon " />
          </Link>{" "}
          {token ? (
            <Avatar className="searchbar-avatar-icon" />
          ) : (
            <a href={loginUrl} className="searchbar-login">
              Log In
            </a>
          )}
        </div>
      </form>
    </header>
  );
};
