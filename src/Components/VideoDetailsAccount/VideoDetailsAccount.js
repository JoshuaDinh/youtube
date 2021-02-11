import React from "react";
import "./videodetailsaccount.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CheckIcon from "@material-ui/icons/Check";

export const VideoDetailsAccount = () => {
  return (
    <div className="videodetails-account">
      <AccountCircleIcon className="videodetails-avatar-icon" />
      <div className="videodetails-account-info">
        <div className="videodetails-name-subscribers-container">
          <div>
            <p className="videodetails-account-name">
              {" "}
              account name{" "}
              <CheckIcon className="videodetails-account-verified-icon" />
            </p>
            <p className="videodetails-account-subscribers"> 30M subscribers</p>
          </div>
          <button className="videodetails-subscribe-button">Subscribe</button>
        </div>
        <div>
          <p className="videodetails-video-description">
            {" "}
            description Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Repellat tempore architecto dicta vitae sit ut fuga quis
            commodi aut doloremque unde, inventore magni consectetur, sapiente
            doloribus error sequi quidem ipsam.
          </p>
        </div>{" "}
      </div>
    </div>
  );
};
