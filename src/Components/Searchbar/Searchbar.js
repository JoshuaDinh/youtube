import React, { useState, useEffect } from "react";
import "./searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import { loginUrl } from "../../GoogleAuth";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../requests";

export const Searchbar = ({ token, setSearchResults }) => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  // Search Videos based on user input
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const searchVideos = await axios.get(
  //         "https://www.googleapis.com/youtube/v3/search",
  //         {
  //           params: {
  //             part: "snippet",
  //             type: "video",
  //             q: query,
  //             key: API_KEY,
  //             maxResults: 8,
  //           },
  //         }
  //       );
  //       setSearchResults(searchVideos.data.items);
  //     } catch (err) {
  //       alert(err);
  //     }
  //   };
  //   fetchData();
  // }, [query]);

  // Wait untill user stops typing before setting query
  useEffect(() => {
    const timer = setTimeout(() => setQuery(input), 1500);
    return () => clearTimeout(timer);
  }, [input]);

  console.log(query);
  return (
    <header className="searchbar">
      <form className="searchbar-form">
        <div className="searchbar-input-container">
          <input
            className="searchbar-input"
            placeholder="Search.."
            type="text"
            onChange={(e) => setInput(e.target.value)}
            name={input}
          ></input>
          <Link to="/searchResults">
            <SearchIcon className="searchbar-search-icon" />
          </Link>
        </div>
        <div className="searchbar-icon-container">
          {token.length > 1 ? (
            <Avatar className="searchbar-avatar-icon" />
          ) : (
            <a href={loginUrl} className="searchbar-login">
              Sign In
            </a>
          )}
        </div>
      </form>
    </header>
  );
};
