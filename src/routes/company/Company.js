import React from "react";
import "./company.css";

const Company = ({ name }) => {
  return (
    <a
      href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${name} 관련주`}
    >
      <div className="company">
        <span className="company-name">{name}</span>
      </div>
    </a>
  );
};

export default Company;
