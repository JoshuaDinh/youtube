import React, { useState } from "react";
import "./addComment.css";

export const AddComment = () => {
  const [buttons, setButtons] = useState(false);
  
  return (
    <div className="add-comment">
      <form
        onClick={() => setButtons(!buttons)}
        className={`add-comment-form ${
          buttons && "add-comment-form-underline"
        }`}
      >
        <input
          placeholder="add a public comment.."
          className="add-comment-input"
        />
      </form>
      {buttons && (
        <div className="add-comment-buttons">
          <div
            onClick={() => setButtons(false)}
            className="addc-omment-cancle add-comment-button"
          >
            Cancle
          </div>
          <div
            onClick={() => setButtons(!buttons)}
            className="add-comment-comment add-comment-button"
          >
            Comment
          </div>
        </div>
      )}
    </div>
  );
};
