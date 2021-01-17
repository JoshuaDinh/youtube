import React from "react";
import "./searchbar.css";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import { SuggestionsRow } from "../SuggestionsRow/SuggestionsRow";

export const Searchbar = ({ setToggleSidebar }) => {
  return (
    <header className="searchbar">
      <form className="searchbar-form">
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
          ></input>
          <SearchIcon className="searchbar-search-icon" />
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
