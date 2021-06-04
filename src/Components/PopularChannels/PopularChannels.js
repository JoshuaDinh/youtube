import React from "react";
import "./popularChannels.css";

const PopularChannels = ({ profileImg }) => {
  return (
    <div className="popular-channels">
      <h4>
        Popular <span className="popular-channels-span">Channels </span>:
      </h4>
      <img
        src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s88-c-k-c0x00ffffff-no-rj"
        className="popular-channel-avatar"
        id="UC8butISFwT-Wl7EV0hUK0BQ"
        name="FreeCodeCamp.Org"
      />
      <img
        src="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s88-c-k-c0x00ffffff-no-rj"
        className="popular-channel-avatar"
        id="UC29ju8bIPH5as8OGnQzwJyA"
        name="Traversy Media"
      />
      <img
        src="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s800-c-k-c0x00ffffff-no-rj"
        className="popular-channel-avatar"
        id="UCqrILQNl5Ed9Dz6CGMyvMTQ"
        name="Clever Programmer"
      />
      <img
        src="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s800-c-k-c0x00ffffff-no-rj"
        className="popular-channel-avatar"
        id="UCFbNIlppjAuEX4znoulh0Cw"
        name="Web Dev Simplified"
      />
      <img
        src="https://yt3.ggpht.com/ytc/AAUvwnhnGW-L982DVkS9_1rpwPYq_X8xZ-_lMbs2hUE8pw=s800-c-k-c0x00ffffff-no-rj"
        className="popular-channel-avatar"
        id="UCzyuZJ8zZ-Lhfnz41DG5qLw"
        name="Dani Krossing"
      />
      <img
        src="https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqQWg=s800-c-k-c0x00ffffff-no-rj"
        className="popular-channel-avatar"
        id="UCWv7vMbMWH4-V0ZXdmDpPBA"
        name="Programming with Mosh"
      />
    </div>
  );
};

export default PopularChannels;
