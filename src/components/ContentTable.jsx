import React from "react";
import "../contenttable.css";

const ContentTable = () => {
  return (
    <div className="content-table">
      <div className="table-header">
        <span>Phase</span>
        <span>Status</span>
        <span>Document</span>
        <span>Responsible Party</span>
        <span>Update Date</span>
      </div>
      <div className="table-row">
        <span>1</span>
        <span>Continuing</span>
        <span>W6</span>
        <span>Goksu Safi</span>
        <span>11.12.2022</span>
      </div>
      {/* Add more rows as needed */}
    </div>
  );
};

export default ContentTable;
