import React from "react";
import "./company.css";

const Company = ({ name }) => {
  return (
    <div className="company">
      <span className="company-name">{name}</span>
    </div>
  );
};

export default Company;
