import React from "react";
import "../sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        →
      </button>
      <ul>
        <li>Transaction</li>
        <li>Documents</li>
        <li>E-Mails</li>
        <li>Reports</li>
        <li>Management Panel</li>
        <li>Transaction Calendar</li>
      </ul>
    </div>
  );
};

export default Sidebar;
