import React, { useState } from "react";
import "./comments.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

export const AddComment = () => {
  const [buttons, setButtons] = useState(false);
  return (
    <div className="addcomment">
      <div className="addcomment-form-container">
        {" "}
        <AccountCircleIcon className="addcomment-avatar-icon" />
        <form
          onClick={() => setButtons(!buttons)}
          className={`addcomment-form ${
            buttons && "addcomment-form-underline"
          }`}
        >
          <input
            placeholder="add a public comment.."
            className="addcomment-input"
          />
        </form>{" "}
      </div>
      {buttons && (
        <div className="addcomment-buttons">
          <div
            onClick={() => setButtons(false)}
            className="addcomment-cancle addcomment-button"
          >
            Cancle
          </div>
          <div
            onClick={() => setButtons(!buttons)}
            className="addcomment-comment addcomment-button"
          >
            Comment
          </div>
        </div>
      )}
    </div>
  );
};

export const CommentCard = ({ selectedVideoData }) => {
  return (
    <div className="commentcard">
      <div class="commentcard-account">
        <AccountCircleIcon className="addcomment-avatar-icon" />
        <p> account name</p>
        <div className="commentcard-comment-posted-date"> 1 year ago</div>
      </div>
      <div className="commentcard-comment">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quaerat
        cumque rem quisquam omnis, harum pariatur, ullam aliquid odit doloremque
        sed. Culpa unde recusandae sapiente temporibus quaerat obcaecati impedit
        dignissimos!
      </div>
      <div className="commentcard-icons-container">
        <div className="commentcard-icon-container">
          <ThumbUpIcon className="commentcard-icon" />{" "}
          <p className="commentcard-likes-dislikes-amount">40k</p>
        </div>
        <div className="commentcard-icon-container">
          {" "}
          <ThumbDownIcon className="commentcard-icon" />
          <p className="commentcard-likes-dislikes-amount">465</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export const Comments = ({ selectedVideoData }) => {
  return (
    <div className="comments">
      <div className="comments-header-container">
        <h2 className="comments-comment-amount">20000</h2>
        <h2 className="comments-header">Comments</h2>
      </div>
      <AddComment />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  );
};
