import React from "react";
import "./sidebar.css";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

export const SidebarOption = ({
  title,
  icon,
  link,
  toggleMainSidebar,
  toggleWatchSidebar,
  setToggleSidebar,
  toggleSidebar,
}) => {
  return (
    <Link
      onClick={() => setToggleSidebar(!toggleSidebar)}
      className="router-link"
      to={link}
    >
      <div className="sidebar-option-container">
        <div className="sidebar-option">{icon}</div>
        {toggleMainSidebar && <p className="sidebar-option-title"> {title}</p>}
        {toggleWatchSidebar && <p className="sidebar-option-title"> {title}</p>}
      </div>
    </Link>
  );
};
