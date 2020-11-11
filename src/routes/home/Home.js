import React, { useState, useEffect } from "react";
import axios from "axios";
import Company from "../company/Company";
import RealTime from "../realTime/RealTime";
import Slider from "react-slick";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [state, setState] = useState({
    loading: true,
    companies: [],
    error: null,
  });

  useEffect(() => {
    axios("http://localhost:4000/data")
      .then(({ data: { company } }) => {
        setState({
          loading: false,
          companies: company,
        });
      })
      .catch((error) => {
        setState({
          loading: false,
          error: error,
        });
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="content">
      <div className="inner-width">
        <div className="interest-companies">
          <h3>관심 종목</h3>
          <Slider {...settings}>
            {state.loading ? (
              <div className="loading"></div>
            ) : (
              state.companies.map(({ name }, index) => {
                return <Company companyName={name} key={index} />;
              })
            )}
            <Company />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
