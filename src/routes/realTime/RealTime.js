import React from "react";
import "./RealTime.css";

const RealTime = ({ realTime }) => {
  const d = new Date();
  const curTime = d.getHours();
  return (
    <div className="real_search">
      {realTime === "timeout" ? (
        <div className="">
          <span className="">아침 7시부터 저녁 7시까지 검색어가 나옵니다.</span>
        </div>
      ) : (
        <>
          <div className="notice">
            <h2>인기 검색 종목</h2>
            <h3>({curTime}시 10분 기준)</h3>
          </div>
          <div className="real_search__layer">
            <div className="real_search__site">
              <h3 className="real_search__standard">네이버</h3>
              <h3 className="real_search__standard">다음</h3>
            </div>
            <div className="left_layer">
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
