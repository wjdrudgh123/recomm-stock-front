import React from "react";

const Companies = ({ name, boxPrice, handleEvnet }) => {
  const { firstBox, secBox } = boxPrice;
  const bigBoxReg = String(secBox[1]).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const bigBoxSup = String(secBox[0]).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const smallBoxReg = String(firstBox[1]).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const smallBoxSup = String(firstBox[0]).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="companies" onClick={handleEvnet}>
      <div className="companies__company" data-name={name}>
        <div className="company__title">
          <h3>{name}</h3>
        </div>
        <div className="company__box">
          <div className="box__big_box">
            <span className="big_box__reg">{bigBoxReg}</span>
            <div className="box__small_box">
              <span className="small_box__reg">{smallBoxReg}</span>
              <span className="small_box__sup">{smallBoxSup}</span>
            </div>
            <span className="big_box__sup">{bigBoxSup}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
