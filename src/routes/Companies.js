import React from "react";

const Companies = ({ name }) => {
  return (
    <div className="company">
      <h3 className="company__title">{name}</h3>
    </div>
  );
};

export default Companies;
