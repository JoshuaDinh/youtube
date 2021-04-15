import React, { useState, useEffect } from "react";
import "./comments.css";
import axios from "axios";
import { API_KEY } from "../../requests";
import { SentimentSatisfied } from "@material-ui/icons";

export const Comment = ({ author, profileImage, text }) => {
  return <div className="comment"></div>;
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
  //           maxResults: 1,
  //         },
  //       }
  //     );
  //     setComments(fetchComments.data.items);
  //   };
  //   fetchData();
  // }, [videoId]);
  console.log(comments);
  return (
    <div className="comments">
      {/* {comments.map((comment) => {
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
      })} */}
      <Comment />
      <Comment />
    </div>
  );
};
