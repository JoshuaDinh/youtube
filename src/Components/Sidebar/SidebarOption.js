import React from "react";
import "./sidebar.css";
// import { Link } from "react-scroll";

export const SidebarOption = ({ title, icon }) => {
  return (
    <div className="sidebar-option-container">
      <div className="sidebar-option">
        {icon}
        <p className="sidebar-option-title"> {title}</p>
      </div>
    </div>
  );
};
