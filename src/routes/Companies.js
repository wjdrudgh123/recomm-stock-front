import React from "react";

const Companies = ({ name }) => {
  return (
    <div className="companies">
      <div className="companies__company">
        <div className="company__title">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Companies;
