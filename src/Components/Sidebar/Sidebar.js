import React from "react";
import "./sidebar.css";
import youtubeIcon from "../../images/youtubeIcon.png";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={youtubeIcon} className="youtube-icon" />
      <div className="sidebar-section-container">
        <div className="sidebar-first-section">
          <Link to="/">
            <HomeIcon className="sidebar-icon" />
          </Link>
          <Link to="/">
            <WhatshotIcon className="sidebar-icon" />
          </Link>
          <Link to="/">
            <SubscriptionsIcon className="sidebar-icon" />{" "}
          </Link>
        </div>
        <div className="sidebar-second-section">
          <HistoryIcon className="sidebar-icon" />
          <ThumbUpAltIcon className="sidebar-icon" />
          <PlaylistPlayIcon className="sidebar-icon" />
          <AccountCircleIcon className="sidebar-icon" />
          <SettingsIcon className="sidebar-icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
