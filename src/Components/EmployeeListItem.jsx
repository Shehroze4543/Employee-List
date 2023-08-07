import React from "react";
// import empProfilePic from "../models/models";

function EmployeeListItem(props) {
  return (
    <div className="emp-list-container">
      <div className="emp-pic">
        <img src={props.image} alt="" className="profile-pic" />
      </div>

      <div className="emp-info">
        <div className="emp-name">
          <strong>{props.name}</strong>
        </div>
        <div className="emp-title">
          <span>{props.title}</span>
        </div>
      </div>
    </div>
  );
}

export default EmployeeListItem;
