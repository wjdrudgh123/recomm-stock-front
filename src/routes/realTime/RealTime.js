import React from "react";
import "./RealTime.css";

const RealTime = ({ realTime }) => {
  console.log(realTime.naver);
  return (
    <div className="real_search">
      {realTime.naver === undefined ? (
        <div className="loading-box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>
          <div className="notice">
            <h2>인기 검색 종목</h2>
            <h3>(10분마다 업뎃)</h3>
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
                    <li key={index}>
                      <span className="real_search__index">{index + 1}.</span>
                      <a
                        href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${company} 특징주`}
                      >
                        <span className="real_search__company">{company}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="right_layer">
              <ul>
                {realTime.daum.map((company, index) => {
                  return (
                    <li key={index}>
                      <span className="real_search__index">{index + 1}.</span>
                      <a
                        href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${company} 특징주`}
                      >
                        <span className="real_search__company">{company}</span>
                      </a>
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
