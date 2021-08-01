import React, { useState } from "react";
import axiosConfig from "../../axiosConfig";
import requests from "../../requests";
import "./comments.css";

const CommentInput = ({ videoId }) => {
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    comment: "",
    commentId: videoId,
  });

  const { comment, name, avatar, commentId } = formData;

  // Update formData based off of name attributes on input fields
  const updateFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosConfig.post(requests.postComment, formData);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form className="comment-form" onSubmit={(e) => onSubmit(e)}>
      <h3>Add Comment:</h3>
      <div className="comment-input-container">
        <div className="comment-input-wrapper">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => updateFormData(e)}
          />
          <input
            type="upload"
            placeholder="avatar"
            name="avatar"
            value={avatar}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div className="comment-button-container">
          <button>Cancle</button>
          <input type="submit" />
        </div>
      </div>

      <input
        className="comment-input"
        placeholder="Add Comment"
        name="comment"
        value={comment}
        onChange={updateFormData}
      />
    </form>
  );
};

export default CommentInput;
