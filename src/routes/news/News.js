import React, { useState } from "react";
import Rss from "./Rss";
import "./News.css";

const News = ({ nextWeekSchedule: { date, news }, moveDate }) => {
  const [isFlag, setIsFlag] = useState("rss");
  const [newsRss, setNewsRss] = useState([]);
  return (
    <>
      <header>
        <ul>
          <li>해드라인</li>
          <li>증시 스케쥴</li>
        </ul>
      </header>
      <div>
        {isFlag === "rss" ? (
          <Rss rss={newsRss} />
        ) : (
          <div className="nextweeks_news">
            <div className="news__date_field">
              <span>
                <i
                  className="fas fa-arrow-left"
                  onClick={moveDate}
                  data-direction="left"
                ></i>
              </span>
              <h4 className="news__header">{date}</h4>
              <span>
                <i
                  className="fas fa-arrow-right"
                  onClick={moveDate}
                  data-direction="right"
                ></i>
              </span>
            </div>
            <div className="news__body">
              {news.length === 0 ? (
                <div className="news__empty">뉴스 없음</div>
              ) : (
                <ul>
                  {news.map(({ title, description }, index) => {
                    return (
                      <li key={index} className="news">
                        <h4>{title}</h4>
                        <p>{description}</p>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default News;
