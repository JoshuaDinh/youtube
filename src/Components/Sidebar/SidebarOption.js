import React from "react";
import "./sidebar.css";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import { ToggleSidebar } from "../NewSidebar/ToggleSidebar";

export const SidebarOption = ({
  title,
  icon,
  link,
  toggleSidebar,
  setToggleSidebar,
}) => {
  return (
    <Link
      onClick={() => setToggleSidebar(!ToggleSidebar)}
      className="router-link"
      to={link}
    >
      {" "}
      <div className="sidebar-option-container">
        <div className="sidebar-option">
          {icon}
          <p className="sidebar-option-title"> {title}</p>
        </div>
      </div>
    </Link>
  );
};
