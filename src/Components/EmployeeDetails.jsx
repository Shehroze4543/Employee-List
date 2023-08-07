import React from "react";
import empProfilePic from "../models/models";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeDetails() {
  return (
    <>
      <div className="emp-main-container">
        <div className="emp-container-1">
          <img
            src={empProfilePic[0]}
            alt=""
            className="emp-details-profile-pic"
          />
        </div>
        <div className="emp-container-2">
          <div className="emp-name">
            <strong>Michael Scott</strong>
          </div>
          <div className="emp-title">
            <span>Regional Manager</span>
          </div>
        </div>
      </div>

      <div className="emp-second-container">
        <div className="emp-left-container">
          <div className="emp-left-container-1">
            <strong>Call Office</strong>
          </div>
          <div className="emp-left-container-2">718-000-0002</div>
        </div>
        <div className="emp-right-container">
          <img
            src="https://img.icons8.com/?size=512&id=9149&format=png"
            alt=""
            className="btn-img"
          />
        </div>
      </div>

      <div className="emp-second-container">
        <div className="emp-left-container">
          <div className="emp-left-container-1">
            <strong>Call Mobile</strong>
          </div>
          <div className="emp-left-container-2">617-000-0002</div>
        </div>
        <div className="emp-right-container">
          <img
            src="https://img.icons8.com/?size=512&id=9149&format=png"
            alt=""
            className="btn-img"
          />
        </div>
      </div>

      <div className="emp-second-container">
        <div className="emp-left-container">
          <div className="emp-left-container-1">
            <strong>SMS</strong>
          </div>
          <div className="emp-left-container-2">617-000-0002</div>
        </div>
        <div className="emp-right-container">
          <img
            src="https://img.icons8.com/?size=512&id=9149&format=png"
            alt=""
            className="btn-img"
          />
        </div>
      </div>

      <div className="emp-second-container">
        <div className="emp-left-container">
          <div className="emp-left-container-1">
            <strong>Email</strong>
          </div>
          <div className="emp-left-container-2">jtaylor@fakemail.com</div>
        </div>
        <div className="emp-right-container">
          <img
            src="https://img.icons8.com/?size=512&id=9149&format=png"
            alt=""
            className="btn-img"
          />
        </div>
      </div>
    </>
  );
}

export default EmployeeDetails;
