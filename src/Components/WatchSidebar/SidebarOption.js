import React from "react";
import "./sidebar.css";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

export const SidebarOption = ({
  title,
  icon,
  link,
  toggleMainSidebar,
  openWatchSidebar,
}) => {
  return (
    <Link className="router-link" to={link}>
      <div className="sidebar-option-container">
        <div className="sidebar-option">{icon}</div>
        {toggleMainSidebar && <p className="sidebar-option-title"> {title}</p>}
        {openWatchSidebar && <p className="sidebar-option-title"> {title}</p>}
      </div>
    </Link>
  );
};
