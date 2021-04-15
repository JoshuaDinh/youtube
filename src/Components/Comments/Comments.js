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

  useEffect(() => {
    const fetchData = async () => {
      const fetchComments = await axios.get(
        "https:www.googleapis.com/youtube/v3/commentThreads",
        {
          params: {
            part: "snippet",
            videoId: videoId,
            key: API_KEY,
            maxResults: 10,
          },
        }
      );
      setComments(fetchComments.data.items);
    };
    if (videoId) {
      fetchData();
    }
  }, [videoId]);
  console.log(comments);
  return (
    <div className="comments">
      {comments.map((comment) => {
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
      })}
      {/* <Comment text="In academic writing, most paragraphs include at least three sentences, though rarely more than ten. So, how many paragraphs are enough, and how many are too many? For historical writing, there should be between four and six paragraphs in a two-page paper, or six and twelve in a five-page essay. In academic writing, most paragraphs include at least three sentences, though rarely more than ten. So, how many paragraphs are enough, and how many are too many? For historical writing, there should be between four and six paragraphs in a two-page paper, or six and twelve in a five-page essay. In academic writing, most paragraphs include at least three sentences, though rarely more than ten. So, how many paragraphs are enough, and how many are too many? For historical writing, there should be between four and six paragraphs in a two-page paper, or six and twelve in a five-page essay." /> */}
    </div>
  );
};
