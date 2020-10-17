import React from "react";
import "./News.css";

const News = ({ name, news }) => {
  return (
    <>
      <h4 className="news__header">※ 종목 뉴스</h4>
      <div className="news__body">
        {news.length === 0 ? (
          <div className="news__empty">{name} 뉴스 없음</div>
        ) : (
          <ul>
            {news.map(({ newsTitle, newsLink }, index) => {
              const splitLink = newsLink.split("/");
              const splitUrl_1 = splitLink[splitLink.length - 1].split("=");
              const newsCode = splitUrl_1[1].split("&");
              const officeCode = splitUrl_1[2].split("&");
              const itemCode = splitUrl_1[3].split("&");
              return (
                <li key={index} className="news">
                  <a
                    href={`https://m.stock.naver.com/item/main.nhn#/stocks/${itemCode[0]}/news/${newsCode[0]}/office/${officeCode[0]}`}
                  >
                    <h4>{newsTitle}</h4>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default News;
