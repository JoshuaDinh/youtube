import React, { useState, useEffect } from "react";
import "./searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";

export const Searchbar = ({ token }) => {
  const [input, setInput] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

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
      </form>{" "}
      <ExpandMoreIcon
        className="searchbar-mobile-nav-icon"
        onClick={toggleMobileNav}
      />
      {mobileNav && <MobileNav toggleMobileNav={toggleMobileNav} />}
    </header>
  );
};
