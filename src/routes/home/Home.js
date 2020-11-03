import React from "react";
import Companies from "../Companies";
import RealTime from "../realTime/RealTime";
import Slider from "react-slick";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({ companies, realTime, moveSlide }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="content">
      <div className="top_layer">
        <div className="title">
          <h2>관심 종목</h2>
          <div className="notice">
            <h3>&#8251; 주의</h3>
            <ul>
              <li>주관적인 관심 종목일 뿐, 주식 매매 참고자료입니다.</li>
              <li>
                <strong>주식 매매의 책임은 본인에게 있습니다.</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="top_layer__companies">
          <div className="companies__company">
            <Slider {...settings}>
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
            </Slider>
          </div>
        </div>
      </div>
      <div className="bottom_layer">
        <RealTime realTime={realTime} />
      </div>
    </div>
  );
};

export default Home;
