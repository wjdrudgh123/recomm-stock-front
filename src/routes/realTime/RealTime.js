import React from "react";
import "./RealTime.css";

const RealTime = ({ realTime }) => {
  return (
    <div className="real_search">
      {realTime === "timeout" ? (
        <div className="">
          <span className="">아침 7시부터 저녁 7시까지 검색어가 나옵니다.</span>
        </div>
      ) : (
        <>
          <h2>인기 검색 종목</h2>
          <div className="real_search__layer">
            <div className="left_layer">
              <h3 className="real_search__standard">네이버</h3>
              <ul>
                {realTime.naver.map((company, index) => {
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
                {realTime.daum.map((company, index) => {
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
        </>
      )}
    </div>
  );
};

export default RealTime;
