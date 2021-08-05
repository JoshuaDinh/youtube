import React, { useState, useEffect } from "react";
import "./searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import { loginUrl } from "../../GoogleAuth";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Searchbar = ({ token }) => {
  const [input, setInput] = useState("");

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
      </form>
    </header>
  );
};
