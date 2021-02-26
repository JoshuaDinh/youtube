import React from "react";
import "./sidebar.css";
import { SidebarOption } from "./SidebarOption";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

export const WatchSidebar = ({ toggleWatchSidebar, setToggleWatchSidebar }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-background"></div>
      <div className="sidebar">
        <SidebarOption
          toggleWatchSidebar
          toggleSidebar={toggleWatchSidebar}
          setToggleSidebar={setToggleWatchSidebar}
          title={
            <CloseIcon
              onClick={() => setToggleWatchSidebar(!toggleWatchSidebar)}
              style={{ fontSize: "2rem" }}
            />
          }
        />
        <SidebarOption
          toggleWatchSidebar
          setToggleSidebar={setToggleWatchSidebar}
          toggleSidebar={toggleWatchSidebar}
          icon={<HomeIcon />}
          title="Home"
          link="/Home"
        />
        <SidebarOption
          toggleWatchSidebar
          setToggleSidebar={setToggleWatchSidebar}
          toggleSidebar={toggleWatchSidebar}
          icon={<WhatshotIcon />}
          title="Trending"
        />
        <SidebarOption
          toggleWatchSidebar
          setToggleSidebar={setToggleWatchSidebar}
          toggleSidebar={toggleWatchSidebar}
          icon={<SubscriptionsIcon />}
          title="Subscriptions"
        />
        <SidebarOption
          toggleWatchSidebar
          setToggleSidebar={setToggleWatchSidebar}
          toggleSidebar={toggleWatchSidebar}
          icon={<VideoLibraryIcon />}
          title="Library"
        />
        <SidebarOption
          toggleWatchSidebar
          setToggleSidebar={setToggleWatchSidebar}
          toggleSidebar={toggleWatchSidebar}
          icon={<HistoryIcon />}
          title="History"
        />
        <SidebarOption
          toggleWatchSidebar
          setToggleSidebar={setToggleWatchSidebar}
          toggleSidebar={toggleWatchSidebar}
          icon={<WatchLaterIcon />}
          title="Watch Later "
        />
        <SidebarOption
          toggleWatchSidebar
          setToggleSidebar={setToggleWatchSidebar}
          toggleSidebar={toggleWatchSidebar}
          icon={<ThumbUpIcon />}
          title="Liked Videos"
        />
        <SidebarOption icon={<PlaylistPlayIcon />} title="Turn up" />
      </div>
    </div>
  );
};
