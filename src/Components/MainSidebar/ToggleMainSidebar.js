import React from "react";
import "./mainSidebar.css";
import { SidebarOption } from "../WatchSidebar/SidebarOption";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

export const ToggleMainSidebar = (
  setToggleMainSidebar,
  toggleMainSidebar,
  ToggleSidebars
) => {
  return (
    <div className="toggle-main-sidebar">
      <SidebarOption
        setToggleMainSidebar={setToggleMainSidebar}
        toggleMainSidebar={toggleMainSidebar}
        ToggleSidebars={ToggleSidebars}
        icon={<HomeIcon />}
        title="Home"
        link="/Home"
      />
      <SidebarOption
        setToggleMainSidebar={setToggleMainSidebar}
        toggleMainSidebar={toggleMainSidebar}
        ToggleSidebars={ToggleSidebars}
        icon={<WhatshotIcon />}
        title="Trending"
      />
      <SidebarOption
        setToggleMainSidebar={setToggleMainSidebar}
        toggleMainSidebar={toggleMainSidebar}
        ToggleSidebars={ToggleSidebars}
        icon={<SubscriptionsIcon />}
        title="Subscriptions"
      />
      <SidebarOption
        setToggleMainSidebar={setToggleMainSidebar}
        toggleMainSidebar={toggleMainSidebar}
        ToggleSidebars={ToggleSidebars}
        icon={<VideoLibraryIcon />}
        title="Library"
      />
      <SidebarOption
        setToggleMainSidebar={setToggleMainSidebar}
        toggleMainSidebar={toggleMainSidebar}
        ToggleSidebars={ToggleSidebars}
        icon={<HistoryIcon />}
        title="History"
      />
      <SidebarOption
        setToggleMainSidebar={setToggleMainSidebar}
        toggleMainSidebar={toggleMainSidebar}
        ToggleSidebars={ToggleSidebars}
        icon={<WatchLaterIcon />}
        title="Watch Later "
      />
    </div>
  );
};
