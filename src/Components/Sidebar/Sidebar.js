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
        <Link to="/" className="link">
          <HomeIcon className="sidebar-icon" /> <span>Home</span>
        </Link>
        <p>Catagories</p>
        <Link to="/" className="link">
          <HttpIcon className="sidebar-icon" /> <span>Front-End</span>
        </Link>
        <Link to="/" className="link">
          <HttpIcon className="sidebar-icon" /> <span>Back-End</span>
        </Link>
        <Link className="link">
          <StorageIcon className="sidebar-icon" /> <span>Databases</span>
        </Link>
        <Link className="link">
          <VerticalSplitIcon className="sidebar-icon" /> <span>Full-Stack</span>
        </Link>
        <Link className="link">
          <SecurityIcon className="sidebar-icon" />
          <span>Web Security</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

{
  /* <Link className="link">
          <PlaylistPlayIcon className="sidebar-icon" />
          <span>Playlists</span>
        </Link> */
}
{
  /* <Link className="link">
          <ThumbUpAltIcon className="sidebar-icon" /> <span>Likes</span>
        </Link> */
}
{
  /* <Link className="link">
          <HistoryIcon className="sidebar-icon" /> <span>History</span>
        </Link> */
}
{
  /* <Link to="/" className="link">
          <WhatshotIcon className="sidebar-icon" /> <span>Whats Hot</span>
        </Link> */
}
{
  /* <Link to="/" className="link">
          <SubscriptionsIcon className="sidebar-icon" />{" "}
          <span>Subscriptions</span>
        </Link> */
}

{
  /* <Link className="link">
<AccountCircleIcon className="sidebar-icon" /> <span>Account</span>
</Link>
<Link className="link">
<SettingsIcon className="sidebar-icon" /> <span>Settings</span>
</Link> */
}
