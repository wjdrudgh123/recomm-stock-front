import React, { useState } from "react";
import "./Schedule.css";

const Schedule = ({ schedule }) => {
  const [index, setIndex] = useState(0);

  const handleMoveDate = (e) => {
    const target = e.target;
    const direction = target.dataset.direction;
    if (direction === "left") {
      let minus = index - 1;
      if (index === 0) {
        minus = schedule.length - 1;
      }
      setIndex(minus);
    } else if (direction === "right") {
      let plus = index + 1;
      if (index === 6) {
        plus = 0;
      }
      setIndex(plus);
    }
  };

  return (
    <div className="schedule">
      <div className="inner-width">
        {schedule.length === 0 ? (
          <div className="loading-box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="schedule-content">
            <div className="nextweeks_news">
              <div className="news__date_field">
                <span>
                  <i
                    className="fas fa-arrow-left"
                    data-direction="left"
                    onClick={handleMoveDate}
                  ></i>
                </span>
                <h4 className="news__header">{schedule[index].date}</h4>
                <span>
                  <i
                    className="fas fa-arrow-right"
                    data-direction="right"
                    onClick={handleMoveDate}
                  ></i>
                </span>
              </div>
            </div>
            <div className="news__body">
              <ul>
                {schedule[index].news.map(({ title, description }, index) => {
                  return (
                    <li key={index} className="news">
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
