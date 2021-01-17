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

export const Sidebar = ({ setToggleSidebar }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-background"></div>
      <div className="sidebar">
        <SidebarOption
          title={
            <CloseIcon
              onClick={() => setToggleSidebar(false)}
              style={{ fontSize: "2rem" }}
            />
          }
        />
        <SidebarOption icon={<HomeIcon />} title="Home" />
        <SidebarOption icon={<WhatshotIcon />} title="Trending" />
        <SidebarOption icon={<SubscriptionsIcon />} title="Subscriptions" />
        <SidebarOption icon={<VideoLibraryIcon />} title="Library" />
        <SidebarOption icon={<HistoryIcon />} title="History" />
        <SidebarOption icon={<WatchLaterIcon />} title="Watch Later " />
        <SidebarOption icon={<ThumbUpIcon />} title="Liked Videos" />
        <SidebarOption icon={<PlaylistPlayIcon />} title="Turn up" />
      </div>
    </div>
  );
};
