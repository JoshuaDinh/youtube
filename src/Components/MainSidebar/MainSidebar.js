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

export const MainSidebar = ({ toggleSidebar, setToggleSidebar }) => {
  return (
    <div className="main-sidebar">
      <SidebarOption
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
        icon={<HomeIcon />}
        link="/Home"
      />
      <SidebarOption
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
        icon={<WhatshotIcon />}
      />
      <SidebarOption
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
        icon={<SubscriptionsIcon />}
      />
      <SidebarOption
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
        icon={<VideoLibraryIcon />}
      />
      <SidebarOption
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
        icon={<HistoryIcon />}
      />
    </div>
  );
};

// <div className="newsidebar">
// <SidebarOption icon={<HomeIcon />} title="Home" link="/Home" />
// <SidebarOption icon={<WhatshotIcon />} title="Trending" />
// <SidebarOption icon={<SubscriptionsIcon />} title="Subscriptions" />
// <SidebarOption icon={<VideoLibraryIcon />} title="Library" />
// <SidebarOption icon={<HistoryIcon />} title="History" />
// <SidebarOption icon={<WatchLaterIcon />} title="Watch Later " />
// <SidebarOption icon={<ThumbUpIcon />} title="Liked Videos" />
// <SidebarOption icon={<PlaylistPlayIcon />} title="Turn up" />
// </div>
