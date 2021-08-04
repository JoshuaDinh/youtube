import React from "react";
import "./comments.css";
import { Avatar } from "@material-ui/core";

const Comment = ({ author, profileImage, text }) => {
  return (
    <div className="comment">
      <div className="comment-author">
        <Avatar src={profileImage} />
        <h5 className=" comment-author-name">{author}</h5>
      </div>
      <div className="comment-text">{text}</div>
    </div>
  );
};

export default Comment;
