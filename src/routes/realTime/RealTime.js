import React from "react";
import "./RealTime.css";

const RealTime = ({ realTime: { naver, daum } }) => {
  return (
    <div className="real_search">
      <h2>인기 검색 종목</h2>
      <div className="left_layer">
        <h3 className="real_search__standard">네이버</h3>
        <ul>
          {naver.map((company, index) => {
            return (
              <li>
                <span className="real_search__index">{index + 1}.</span>
                <span className="real_search__company">{company}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right_layer">
        <h3 className="real_search__standard">다음</h3>
        <ul>
          {daum.map((company, index) => {
            return (
              <li>
                <span className="real_search__index">{index + 1}.</span>
                <span className="real_search__company">{company}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RealTime;
