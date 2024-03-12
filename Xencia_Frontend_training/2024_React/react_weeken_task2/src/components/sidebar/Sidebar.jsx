  import React from "react";
  import { FaHome, FaUsers, FaCog, FaInfoCircle,FaBars } from "react-icons/fa";
  import "./Sidebar.css";
  
  const Sidebar = () => {
    return (
      <div className="sidebar">
        <ul className="sidebar-list">
        <li>
            <FaBars className="sidebar-icon toggle" />
            <a href="#bars"></a>
          </li>
          <li>
            <FaHome className="sidebar-icon" />
            <a href="#home"></a>
          </li>
          <li>
            <FaUsers className="sidebar-icon" />
            <a href="#users"></a>
          </li>
          <li>
            <FaCog className="sidebar-icon" />
            <a href="#settings"></a>
          </li>
          <li>
            <FaInfoCircle className="sidebar-icon" />
            <a href="#about"></a>
          </li>
        </ul>
      </div>
    );
  };
  
export default Sidebar;
