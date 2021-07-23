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
import { NavLink } from "react-router-dom";
import Welcome from "../Welcome/Welcome";

import StorageIcon from "@material-ui/icons/Storage";
import HttpIcon from "@material-ui/icons/Http";
import SecurityIcon from "@material-ui/icons/Security";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Welcome />
      <div className="sidebar-section-container">
        <NavLink
          exact={true}
          activeClassName="is-active"
          to="/"
          className="NavLink"
        >
          <HomeIcon className="sidebar-icon" /> <span>Home</span>
        </NavLink>
        <p>Catagories</p>
        <NavLink to="/frontend" className="NavLink" activeClassName="is-active">
          <HttpIcon className="sidebar-icon" /> <span>Front-End</span>
        </NavLink>
        <NavLink to="/backend" className="NavLink" activeClassName="is-active">
          <HttpIcon className="sidebar-icon" /> <span>Back-End</span>
        </NavLink>
        <NavLink
          to="/databases"
          className="NavLink"
          activeClassName="is-active"
        >
          <StorageIcon className="sidebar-icon" /> <span>Databases</span>
        </NavLink>
        <NavLink
          to="/ fullstack"
          className="NavLink"
          activeClassName="is-active"
        >
          <VerticalSplitIcon className="sidebar-icon" /> <span>Full-Stack</span>
        </NavLink>
        <NavLink
          to="/websecurity"
          className="NavLink"
          activeClassName="is-active"
        >
          <SecurityIcon className="sidebar-icon" />
          <span>Web Security</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

{
  /* <NavLink className="NavLink">
          <PlaylistPlayIcon className="sidebar-icon" />
          <span>Playlists</span>
        </NavLink> */
}
{
  /* <NavLink className="NavLink">
          <ThumbUpAltIcon className="sidebar-icon" /> <span>Likes</span>
        </NavLink> */
}
{
  /* <NavLink className="NavLink">
          <HistoryIcon className="sidebar-icon" /> <span>History</span>
        </NavLink> */
}
{
  /* <NavLink to="/" className="NavLink">
          <WhatshotIcon className="sidebar-icon" /> <span>Whats Hot</span>
        </NavLink> */
}
{
  /* <NavLink to="/" className="NavLink">
          <SubscriptionsIcon className="sidebar-icon" />{" "}
          <span>Subscriptions</span>
        </NavLink> */
}

{
  /* <NavLink className="NavLink">
<AccountCircleIcon className="sidebar-icon" /> <span>Account</span>
</NavLink>
<NavLink className="NavLink">
<SettingsIcon className="sidebar-icon" /> <span>Settings</span>
</NavLink> */
}
