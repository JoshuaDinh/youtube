import React from "react";
import "./results.css";
import jslogo from "../../images/js-logo.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const ResultCard = ({ title, account, description, thumbnail }) => {
  return (
    <div className="result-card">
      {" "}
      <div
        className="result-card-img"
        alt="img"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>{" "}
      <div className="result-video-info">
        <p className="result-title">{title}</p>
        <div className="result-account">
          {" "}
          <AccountCircleIcon className="result-avatar" />
          <p className="result-account-name">{account}</p>
        </div>
        <p className="result-description">{description}</p>
      </div>
    </div>
  );
};
