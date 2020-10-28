import React from "react";

const Companies = ({ name, lastLow, firstLow }) => {
  const lastSupportPrice = String(lastLow).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  const firstSupportPrice = String(firstLow).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  return (
    <div className="companies">
      <div className="companies__company">
        <div className="company__title">
          <h3>{name}</h3>
        </div>
        <div className="company__box">
          <div className="supportPrice">
            <i className="fas fa-long-arrow-alt-down down_arrow"></i>
            <i className="fas fa-long-arrow-alt-up up_arrow"></i>
            {lastSupportPrice}
          </div>
          <div className="supportPrice">
            <i className="fas fa-long-arrow-alt-down down_arrow"></i>
            <i className="fas fa-long-arrow-alt-up up_arrow"></i>
            {firstSupportPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
