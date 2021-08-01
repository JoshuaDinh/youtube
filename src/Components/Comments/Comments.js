import React, { useState, useEffect } from "react";
import "./comments.css";
import axios from "axios";
import requests from "../../requests";
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

  useEffect(() => {
    const fetchData = async () => {
      // const fillCommentDB = await axios.get(`${requests.fillCommentDB}/${videoId}`)
      const response = await axios.get(
        `${requests.fetchCommentsById}/${videoId}`
      );
      setComments(response.data);
    };
    if (videoId) {
      fetchData();
    }
  }, [videoId]);

  console.log(comments);

  return (
    <div className="comments">
      <h3 className="comments-header">Comments</h3>
      {comments.map((comment) => {
        return (
          <Comment
            author={comment.snippet.authorDisplayName}
            profileImage={comment.snippet.authorProfileImageUrl}
            text={comment.snippet.textOriginal}
            likes={comment.snippet.likeCount}
          />
        );
      })}
    </div>
  );
};

// {comments.length <= 0 && (
//   <h3 className="comments-header">No Results / Comments Unavailable</h3>
// )}
// {comments.length > 1 ? (
//   comments.map((comment) => {
//     return (
//       <Comment
//         author={comment.snippet.topLevelComment.snippet.authorDisplayName}
//         profileImage={
//           comment.snippet.topLevelComment.snippet.authorProfileImageUrl
//         }
//         text={comment.snippet.topLevelComment.snippet.textOriginal}
//         likes={comment.snippet.topLevelComment.snippet.likeCount}
//       />
//     );
//   })
// ) : (
//   <>
//     <Comment
//       author="Demo Display Name"
//       profileImage=""
//       text="Great video! cant wait to see more!"
//       likes=""
//     />
//     <Comment
//       author="Demo Display Name"
//       profileImage=""
//       text="Great video! cant wait to see more!"
//       likes=""
//     />
//     <Comment
//       author="Demo Display Name"
//       profileImage=""
//       text="Great video! cant wait to see more!"
//       likes=""
//     />
//     <Comment
//       author="Demo Display Name"
//       profileImage=""
//       text="Great video! cant wait to see more!"
//       likes=""
//     />
//   </>
// )}
