import React, { useState, useEffect } from "react";
import "./suggestionsrow.css";
import { SuggestionItem } from "./SuggestionItem";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const SuggestionsRow = () => {
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className="suggestedrow">
      {filter === 0 ? (
        <div className="suggestions-start-icon">Enjoy these topics</div>
      ) : (
        <div className="suggestions-row-left-icon-container">
          <ArrowBackIosIcon
            onClick={() => setFilter(filter + 35)}
            className="suggestions-row-icons"
          />{" "}
        </div>
      )}
      <div
        style={{
          transform: `translateX(${filter}%)`,
        }}
        className="suggestrow-filtered-row"
      >
        <SuggestionItem suggestion={"Programming"} />
        <SuggestionItem suggestion={"Javascript"} />
        <SuggestionItem suggestion={"React.js"} />
        <SuggestionItem suggestion={"J.s Tutorials"} />
        <SuggestionItem suggestion={"Technology"} />
        <SuggestionItem suggestion={"Front-end"} />
        <SuggestionItem suggestion={"Node.Js"} />
        <SuggestionItem suggestion={"Fin-Tech"} />
        <SuggestionItem suggestion={"Developer"} />
        <SuggestionItem suggestion={"Web Dev"} />
        <SuggestionItem suggestion={"Back-end"} />
        <SuggestionItem suggestion={"Finance"} />
        <SuggestionItem suggestion={"Bitcoin"} />
        <SuggestionItem suggestion={"Functions"} />
        <SuggestionItem suggestion={"Python"} />
        <SuggestionItem suggestion={"Web Dev"} />
        <SuggestionItem suggestion={"Css"} />
        <SuggestionItem suggestion={"Java"} />
        <SuggestionItem suggestion={"Jsx"} />
        <SuggestionItem suggestion={"Tech"} />
        <SuggestionItem suggestion={"Html"} />
        <SuggestionItem suggestion={"Programmer"} />
        <SuggestionItem suggestion={"Computers"} />
        <SuggestionItem suggestion={"Swift"} />
        <SuggestionItem suggestion={"Code"} />
        <SuggestionItem suggestion={"GSAP"} />
        <SuggestionItem suggestion={"Vue"} />
        <SuggestionItem suggestion={"Leet-code"} />
        <SuggestionItem suggestion={"Recursion"} />
        <SuggestionItem suggestion={"Loops"} />
      </div>
      {filter < -180 ? null : (
        <div className="suggestions-row-right-icon-container">
          <ArrowForwardIosIcon
            onClick={() => setFilter(filter - 35)}
            className="suggestions-row-icons"
          />
        </div>
      )}
    </div>
  );
};
