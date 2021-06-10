import React from "react";
import "./channelFrame.css";

const ChannelFrame = ({ channel }) => {
  const videoSrc = `https://www.youtube.com/embed/s_LDtEkcdNM`;

  return (
    <div className="channel-frame">
      <iframe
        className="channel-iframe-player"
        title="videoPlayer"
        autoPlay={1}
        src={videoSrc}
      />
      <div className="channel-frame-info">
        <h5 className="channel-frame-title">{channel.name}</h5>
        <p className="channel-frame-views"> Views - 4 months ago</p>
        <p className="channel-frame-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis
          facere nam explicabo vel commodi assumenda sequi. Qui praesentium,
          delectus minus saepe, deserunt earum veniam totam cupiditate
          reiciendis tempora libero.
        </p>
      </div>
    </div>
  );
};

export default ChannelFrame;
