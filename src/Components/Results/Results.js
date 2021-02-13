import React from "react";
import "./results.css";
import { ResultCard } from "./ResultCard";
import { Link } from "react-router-dom";
import jslogo from "../../images/js-logo.png";

export const Results = ({ searchResults, setToggleSidebar, toggleSidebar }) => {
  return (
    <Link to="/Watch" className="results-container">
      {searchResults.map((info) => {
        return (
          <ResultCard
            account={info.snippet.channelTitle}
            description={info.snippet.description}
            title={info.snippet.title}
            thumbnail={info.snippet.thumbnails.high.url}
          />
        );
      })}
      <ResultCard
        account="Joshua Dinh"
        description="Sorry due to api quota restrictions dynamic data is not available"
        title="Hope you enjoy a static verison of the website"
        thumbnail={jslogo}
      />
      <ResultCard
        account="Joshua Dinh"
        description="Sorry due to api quota restrictions dynamic data is not available"
        title="Hope you enjoy a static verison of the website"
        thumbnail={jslogo}
      />
      <ResultCard
        account="Joshua Dinh"
        description="Sorry due to api quota restrictions dynamic data is not available"
        title="Hope you enjoy a static verison of the website"
        thumbnail={jslogo}
      />
      <ResultCard
        account="Joshua Dinh"
        description="Sorry due to api quota restrictions dynamic data is not available"
        title="Hope you enjoy a static verison of the website"
        thumbnail={jslogo}
      />
      <ResultCard
        account="Joshua Dinh"
        description="Sorry due to api quota restrictions dynamic data is not available"
        title="Hope you enjoy a static verison of the website"
        thumbnail={jslogo}
      />
    </Link>
  );
};
