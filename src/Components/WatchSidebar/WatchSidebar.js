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
          toggleWatchSidebar={toggleWatchSidebar}
          title={
            <CloseIcon
              onClick={() => setToggleWatchSidebar(!toggleWatchSidebar)}
              style={{ fontSize: "2rem" }}
            />
          }
        />
        <SidebarOption
          toggleWatchSidebar={toggleWatchSidebar}
          setToggleWatchSidebar={setToggleWatchSidebar}
          icon={<HomeIcon />}
          title="Home"
          link="/Home"
        />
        <SidebarOption
          toggleWatchSidebar={toggleWatchSidebar}
          setToggleWatchSidebar={setToggleWatchSidebar}
          icon={<WhatshotIcon />}
          title="Trending"
        />
        <SidebarOption
          toggleWatchSidebar={toggleWatchSidebar}
          setToggleWatchSidebar={setToggleWatchSidebar}
          icon={<SubscriptionsIcon />}
          title="Subscriptions"
        />
        <SidebarOption
          toggleWatchSidebar={toggleWatchSidebar}
          setToggleWatchSidebar={setToggleWatchSidebar}
          icon={<VideoLibraryIcon />}
          title="Library"
        />
        <SidebarOption
          toggleWatchSidebar={toggleWatchSidebar}
          setToggleWatchSidebar={setToggleWatchSidebar}
          icon={<HistoryIcon />}
          title="History"
        />
        <SidebarOption
          toggleWatchSidebar={toggleWatchSidebar}
          setToggleWatchSidebar={setToggleWatchSidebar}
          icon={<WatchLaterIcon />}
          title="Watch Later "
        />
        <SidebarOption
          toggleWatchSidebar={toggleWatchSidebar}
          setToggleWatchSidebar={setToggleWatchSidebar}
          icon={<ThumbUpIcon />}
          title="Liked Videos"
        />
        <SidebarOption icon={<PlaylistPlayIcon />} title="Turn up" />
      </div>
    </div>
  );
};
