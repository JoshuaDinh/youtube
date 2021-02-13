import React from "react";
import "./videodetails.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ShareIcon from "@material-ui/icons/Share";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

export const VideoDetails = () => {
  return (
    <div className="videodetails">
      <div className="videodetails-left-container">
        <p className="video-title">React Tutorials</p>
        <p className="video-views-date">100k Views , Jun 8th</p>
      </div>
      <div className="videodetails-right-container">
        <ThumbUpIcon className="videodetails-icons" /> 11k
        <ThumbDownIcon className="videodetails-icons" /> 40k
        <ShareIcon className="videodetails-icons" /> share
        <BookmarksIcon className="videodetails-icons" /> save
      </div>
      <hr></hr>
    </div>
  );
};
