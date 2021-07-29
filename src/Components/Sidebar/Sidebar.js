import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import { NavLink } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import StorageIcon from "@material-ui/icons/Storage";
import HttpIcon from "@material-ui/icons/Http";
import WebIcon from "@material-ui/icons/Web";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import LanguageIcon from "@material-ui/icons/Language";

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
          <LanguageIcon className="sidebar-icon" /> <span>Back-End</span>
        </NavLink>
        <NavLink to="/mongo" className="NavLink" activeClassName="is-active">
          <StorageIcon className="sidebar-icon" /> <span>MongoDB</span>
        </NavLink>
        <NavLink
          to="/fullStack"
          className="NavLink"
          activeClassName="is-active"
        >
          <VerticalSplitIcon className="sidebar-icon" /> <span>Full-Stack</span>
        </NavLink>
        <NavLink
          to="/javascript"
          className="NavLink"
          activeClassName="is-active"
        >
          <WebIcon className="sidebar-icon" />
          <span>Javascript</span>
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
