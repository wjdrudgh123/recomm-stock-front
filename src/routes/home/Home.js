import React from "react";
import Company from "../company/Company";
import RealTime from "../realTime/RealTime";
import Slider from "react-slick";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({ company, realTime }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="content">
      <div className="inner-width">
        <div className="interest-companies">
          <h3>관심 종목</h3>
          <h4>
            <span>주의!</span>&nbsp;모든 매매의 책임은 본인한테 있슴
          </h4>
          <Slider {...settings}>
            {company.map(({ name, code }, index) => {
              return <Company name={name} code={code} key={index} />;
            })}
          </Slider>
        </div>

        <div className="real-time">
          <RealTime realTime={realTime} />
        </div>
      </div>
    </div>
  );
};

export default Home;
