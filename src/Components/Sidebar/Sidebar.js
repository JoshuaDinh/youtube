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

export const Sidebar = ({ setToggleSidebar, toggleSidebar }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-background"></div>
      <div className="sidebar">
        <SidebarOption
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          title={
            <CloseIcon
              onClick={() => setToggleSidebar(false)}
              style={{ fontSize: "2rem" }}
            />
          }
        />
        <SidebarOption
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          icon={<HomeIcon />}
          title="Home"
          link="/Home"
        />
        <SidebarOption
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          icon={<WhatshotIcon />}
          title="Trending"
        />
        <SidebarOption
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          icon={<SubscriptionsIcon />}
          title="Subscriptions"
        />
        <SidebarOption
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          icon={<VideoLibraryIcon />}
          title="Library"
        />
        <SidebarOption
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          icon={<HistoryIcon />}
          title="History"
        />
        <SidebarOption
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          icon={<WatchLaterIcon />}
          title="Watch Later "
        />
        <SidebarOption
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          icon={<ThumbUpIcon />}
          title="Liked Videos"
        />
        <SidebarOption icon={<PlaylistPlayIcon />} title="Turn up" />
      </div>
    </div>
  );
};
