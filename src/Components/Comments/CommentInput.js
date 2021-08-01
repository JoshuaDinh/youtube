import React from "react";
import "./comments.css";

const CommentInput = () => {
  return (
    <form className="comment-form">
      <h3>Add Comment:</h3>
      <div className="comment-input-container">
        <input type="text" placeholder="Name" name="author" />
        <input type="upload" placeholder="avatar" name="avatar" />
      </div>
      <textarea className="comment-text-area" />
    </form>
  );
};

export default CommentInput;
