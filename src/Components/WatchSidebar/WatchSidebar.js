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

export const WatchSidebar = ({ openWatchSidebar, setOpenWatchSidebar }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-background"></div>
      <div className="sidebar">
        <SidebarOption
          openWatchSidebar={openWatchSidebar}
          setOpenWatchSidebar={setOpenWatchSidebar}
          title={
            <CloseIcon
              onClick={() => setOpenWatchSidebar(!openWatchSidebar)}
              style={{ fontSize: "2rem" }}
            />
          }
        />
        <SidebarOption
          openWatchSidebar={openWatchSidebar}
          setopenWatchSidebar={setOpenWatchSidebar}
          icon={<HomeIcon />}
          title="Home"
          link="/Home"
        />
        <SidebarOption
          openWatchSidebar={openWatchSidebar}
          setopenWatchSidebar={setOpenWatchSidebar}
          icon={<WhatshotIcon />}
          title="Trending"
        />
        <SidebarOption
          openWatchSidebar={openWatchSidebar}
          setopenWatchSidebar={setOpenWatchSidebar}
          icon={<SubscriptionsIcon />}
          title="Subscriptions"
        />
        <SidebarOption
          openWatchSidebar={openWatchSidebar}
          setopenWatchSidebar={setOpenWatchSidebar}
          icon={<VideoLibraryIcon />}
          title="Library"
        />
        <SidebarOption
          openWatchSidebar={openWatchSidebar}
          setopenWatchSidebar={setOpenWatchSidebar}
          icon={<HistoryIcon />}
          title="History"
        />
        <SidebarOption
          openWatchSidebar={openWatchSidebar}
          setopenWatchSidebar={setOpenWatchSidebar}
          icon={<WatchLaterIcon />}
          title="Watch Later "
        />
        <SidebarOption
          openWatchSidebar={openWatchSidebar}
          setopenWatchSidebar={setOpenWatchSidebar}
          icon={<ThumbUpIcon />}
          title="Liked Videos"
        />
        <SidebarOption icon={<PlaylistPlayIcon />} title="Turn up" />
      </div>
    </div>
  );
};
