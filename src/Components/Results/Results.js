import React from "react";
import "./results.css";
import { ResultCard } from "./ResultCard";

export const Results = ({ searchResults }) => {
  return (
    <div className="results-container">
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
    </div>
  );
};
