import React from "react";
import EmployeeListItem from "./EmployeeListItem";
import empProfilePic from "../models/models";
function EmployeeList() {
  return (
    <div className="emp-list">
      <EmployeeListItem
        image={empProfilePic[0]}
        name="Michael Scott"
        title="Regional Manager"
      />
      <EmployeeListItem
        image={empProfilePic[1]}
        name="Dwight Schrute"
        title="Assistant Regional Manager"
      />

      <EmployeeListItem
        image={empProfilePic[2]}
        name="Jim Halpert"
        title="Salesman"
      />
      <EmployeeListItem
        image={empProfilePic[3]}
        name="Pam Beesly"
        title="Receptionist"
      />
      <EmployeeListItem
        image={empProfilePic[4]}
        name="Oscar Martinez"
        title="Chief Accountant"
      />
      <EmployeeListItem
        image={empProfilePic[5]}
        name="Kevin Malone"
        title="Accountant"
      />
    </div>
  );
}

export default EmployeeList;
