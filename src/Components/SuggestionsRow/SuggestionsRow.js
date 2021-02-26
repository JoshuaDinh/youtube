import React, { useState, useEffect } from "react";
import "./suggestionsrow.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const SuggestionItem = ({ suggestion, setSearchVideo }) => {
  return (
    <div onClick={() => setSearchVideo(suggestion)} className="suggestion-item">
      <span>{suggestion}</span>
    </div>
  );
};

export const SuggestionsRow = ({ setSearchVideo }) => {
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
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Programming"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Javascript"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"React.js"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"React.js"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"J.s Tutorials"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Technology"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Front-end"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Node.Js"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Fin-Tech"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Developer"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Web Dev"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Back-end"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Finance"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Bitcoin"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Functions"}
        />
        <SuggestionItem setSearchVideo={setSearchVideo} suggestion={"Python"} />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Web Dev"}
        />
        <SuggestionItem setSearchVideo={setSearchVideo} suggestion={"Css"} />
        <SuggestionItem setSearchVideo={setSearchVideo} suggestion={"Java"} />
        <SuggestionItem setSearchVideo={setSearchVideo} suggestion={"Jsx"} />
        <SuggestionItem setSearchVideo={setSearchVideo} suggestion={"Tech"} />
        <SuggestionItem setSearchVideo={setSearchVideo} suggestion={"Html"} />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Programmer"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Computers"}
        />
        <SuggestionItem setSearchVideo={setSearchVideo} suggestion={"Swift"} />
        <SuggestionItem setSearchVideo={setSearchVideo} suggestion={"Code"} />
        <SuggestionItem setSearchVideo={setSearchVideo} suggestion={"GSAP"} />
        <SuggestionItem setSearchVideo={setSearchVideo} suggestion={"Vue"} />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Leet-code"}
        />
        <SuggestionItem
          setSearchVideo={setSearchVideo}
          suggestion={"Recursion"}
        />
        <SuggestionItem setSearchVideo={setSearchVideo} suggestion={"Loops"} />
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
