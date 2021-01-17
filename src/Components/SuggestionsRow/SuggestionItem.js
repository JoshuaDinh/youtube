import React from "react";
import "./suggestionsrow.css";

export const SuggestionItem = ({ suggestion }) => {
  return (
    <div className="suggestion-item">
      <span>{suggestion}</span>
    </div>
  );
};
