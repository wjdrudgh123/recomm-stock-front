import React from "react";

const Companies = ({ name, lowPrice }) => {
  const supportPrice = String(lowPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="companies">
      <div className="companies__company">
        <div className="company__title">
          <h3>{name}</h3>
        </div>
        <div className="company__box">
          <h4 className="supportPrice">{supportPrice}</h4>
        </div>
      </div>
    </div>
  );
};

export default Companies;
