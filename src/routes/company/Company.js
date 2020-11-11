import React from "react";
import "./company.css";

const Company = ({ companyName }) => {
  return (
    <div className="company">
      <h3 className="company__title">{companyName}</h3>
    </div>
  );
};

export default Company;
