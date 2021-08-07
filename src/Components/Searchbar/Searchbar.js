import React, { useState, useEffect } from "react";
import "./searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MobileNav from "../MobileNav/MobileNav";
import { useHistory } from "react-router-dom";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  const history = useHistory();

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleSubmit = (e, input) => {
    e.preventDefault();
    setQuery(input);
  };

  // Without resetting the query changing the search input on any other page auto-redirects to Results page
  const handleInput = (e) => {
    setQuery("");
    setInput(e.target.value);
  };

  if (query) {
    history.push("/search_results=" + query);
  }
  console.log(history);
  return (
    <header className="searchbar">
      <form className="searchbar-form" onSubmit={(e) => handleSubmit(e, input)}>
        <div className="searchbar-input-container">
          <input
            className="searchbar-input"
            placeholder="Search.."
            type="text"
            onChange={(e) => handleInput(e)}
            name={input}
          ></input>
          <SearchIcon
            className="searchbar-search-icon"
            onClick={(e) => handleSubmit(e, input)}
          />
        </div>
      </form>
      <ExpandMoreIcon
        className={`searchbar-mobile-nav-icon ${
          mobileNav && "searchbar-mobile-nav-close"
        }`}
        onClick={toggleMobileNav}
      />
      {mobileNav && <MobileNav toggleMobileNav={toggleMobileNav} />}
    </header>
  );
};

export default Searchbar;
