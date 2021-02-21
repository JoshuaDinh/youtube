import React, { useState, useEffect } from "react";
import "./videocard.css";
import jslogo from "../../images/js-logo.png";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import axios from "axios";

export const VideoCardRow = ({ fetchUrl, rowTitle, videos, setVideoId }) => {
  const [homePageVideoRows, sethomePageVideoRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      sethomePageVideoRows(request.data.items);
    };
    // fetchData();
  }, [fetchUrl]);

  return (
    <div className="videocard-row-container">
      <p className="videocard-row-title">{rowTitle}</p>
      <div className="videocard-row">
        <VideoCard title="Programming" thumbnail={jslogo} />
        <VideoCard title="React.Js" thumbnail={jslogo} />
        <VideoCard title="Front-End Dev" thumbnail={jslogo} />
        <VideoCard title="Async-await" thumbnail={jslogo} />
        <VideoCard title="Programming" thumbnail={jslogo} />
        <VideoCard title="React.Js" thumbnail={jslogo} />
        <VideoCard title="Front-End Dev" thumbnail={jslogo} />
        <VideoCard title="Async-await" thumbnail={jslogo} />
      </div>
    </div>
  );
};
/* <p className="videocard-row-title">{rowTitle}</p>
{homePageVideoRows.length > 1 ? (
  homePageVideoRows?.map((video) => {
    return (
      <div className="videocard-row">
        <VideoCard
          title={video.snippet.title}
          channelTitle={video.snippet.channelTitle}
          thumbnail={video.snippet.thumbnails.medium.url}
          posted={video.snippet.publishTime}
        />{" "}
      </div>
    );
  })
) : (
  <div className="videocard-row">
    <VideoCard title="Programming" thumbnail={jslogo} />
    <VideoCard title="React.Js" thumbnail={jslogo} />
    <VideoCard title="Front-End Dev" thumbnail={jslogo} />
    <VideoCard title="Async-await" thumbnail={jslogo} />
    <VideoCard title="Programming" thumbnail={jslogo} />
    <VideoCard title="React.Js" thumbnail={jslogo} />
    <VideoCard title="Front-End Dev" thumbnail={jslogo} />
    <VideoCard title="Async-await" thumbnail={jslogo} />
    <VideoCard title="Programming" thumbnail={jslogo} />
    <VideoCard title="React.Js" thumbnail={jslogo} />
    <VideoCard title="Front-End Dev" thumbnail={jslogo} />
    <VideoCard title="Async-await" thumbnail={jslogo} />
  </div>
)} */

// {homePageVideoRows?.map((video) => {
//   return (
//     <Link to="/Watch" onClick={() => setVideoId(video.id.videoId)}>
//       <VideoCard
//         title={video.snippet.title}
//         channelTitle={video.snippet.channelTitle}
//         thumbnail={video.snippet.thumbnails.medium.url}
//         posted={video.snippet.publishTime}
//       />{" "}
//     </Link>
//   );
// })}
