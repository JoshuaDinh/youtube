import React, { useState, useEffect } from "react";
import "./comments.css";
import axios from "axios";
import { API_KEY } from "../../requests";
import { Avatar } from "@material-ui/core";

export const Comment = ({ author, profileImage, text }) => {
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

export const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchComments = await axios.get(
  //       "https:www.googleapis.com/youtube/v3/commentThreads",
  //       {
  //         params: {
  //           part: "snippet",
  //           videoId: videoId,
  //           key: API_KEY,
  //           maxResults: 10,
  //         },
  //       }
  //     );
  //     setComments(fetchComments.data.items);
  //   };
  //   if (videoId) {
  //     fetchData();
  //   }
  // }, [videoId]);

  return (
    <div className="comments">
      <h3 className="comments-header">Comments</h3>
      {/* Displays error message if comments are unavailable */}
      {comments.length <= 0 && (
        <h3 className="comments-header">No Results / Comments Unavailable</h3>
      )}
      {comments.length > 1 ? (
        comments.map((comment) => {
          return (
            <Comment
              author={comment.snippet.topLevelComment.snippet.authorDisplayName}
              profileImage={
                comment.snippet.topLevelComment.snippet.authorProfileImageUrl
              }
              text={comment.snippet.topLevelComment.snippet.textOriginal}
              likes={comment.snippet.topLevelComment.snippet.likeCount}
            />
          );
        })
      ) : (
        <>
          <Comment
            author="Demo Display Name"
            profileImage=""
            text="Great video! cant wait to see more!"
            likes=""
          />
          <Comment
            author="Demo Display Name"
            profileImage=""
            text="Great video! cant wait to see more!"
            likes=""
          />
          <Comment
            author="Demo Display Name"
            profileImage=""
            text="Great video! cant wait to see more!"
            likes=""
          />
          <Comment
            author="Demo Display Name"
            profileImage=""
            text="Great video! cant wait to see more!"
            likes=""
          />
        </>
      )}
    </div>
  );
};
