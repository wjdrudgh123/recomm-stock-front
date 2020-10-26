import React from "react";
import "./News.css";

const News = ({ nextWeekSchedule: { date, news }, moveDate }) => {
  return (
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
  );
};

export default News;
