import React from "react";
import Companies from "../Companies";
import RealTime from "../realTime/RealTime";
import "./Home.css";

const Home = ({ companies, realTime }) => {
  return (
    <div className="content">
      <div className="top_layer">
        {companies.map(({ name, lowPrice, todayLow }, index) => {
          return (
            <Companies
              name={name}
              lastLow={lowPrice}
              firstLow={todayLow}
              key={index}
            />
          );
        })}
      </div>
      <div className="bottom_layer">
        <RealTime realTime={realTime} />
      </div>
    </div>
  );
};

export default Home;
