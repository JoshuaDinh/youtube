import React from "react";
import "./comments.css";

export const Comment = () => {
  return <div className="comment">comment</div>;
};

export const Comments = () => {
  return (
    <div className="comments">
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
