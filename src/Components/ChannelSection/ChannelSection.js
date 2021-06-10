import React from "react";
import "./channelSection.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const ChannelSection = ({}) => {
  return (
    <div className="channel-section">
      <div className="channel-section-header">
        <img src="#" alt="" className="channel-section-avatar" />
        <div className="channel-section-info">
          <p className="channel-section-name">channel name</p>
          <p>1.53 M subscribers</p>
        </div>
      </div>
      <ul className="channel-section-nav">
        <li>Home</li>
        <li>Videos</li>
        <li>Playlist</li>
        <li>Community</li>
        <li>Channels</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default ChannelSection;
