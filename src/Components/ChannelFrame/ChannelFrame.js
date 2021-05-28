import React from "react";
import "./channelFrame.css";

const ChannelFrame = () => {
  const videoSrc = `https://www.youtube.com/embed/s_LDtEkcdNM`;

  return (
    <div className="channel-frame">
      <iframe
        className="channel-iframe-player"
        title="videoPlayer"
        autoPlay={1}
        src={videoSrc}
      />{" "}
    </div>
  );
};

export default ChannelFrame;
