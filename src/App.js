import React from "react";
import axios from "axios";
import Companies from "./Companies";
import "./App.css";
import News from "./News";

class App extends React.Component {
  state = {
    isLoading: true,
    companies: [],
    targetCompany: "",
  };

  getLists = async () => {
    const { data } = await axios.get(
      `https://${process.env.REACT_APP_IP}/data`,
      {
        timeout: 300000,
        withCredentials: "include",
      }
    );
    const initNews = data[0].companyName;
    this.setState({
      isLoading: false,
      companies: data,
      targetCompany: initNews,
    });
  };

  componentDidMount() {
    this.getLists();
  }

  getTargetCompany = (evt) => {
    let target = evt.target;
    if (target.className !== "companies__company") {
      target = target.parentNode;
      if (
        target.className === "company__box" ||
        target.className === "company__title"
      ) {
        target = target.parentNode;
      } else if (target.className === "box__big_box") {
        target = target.parentNode.parentNode;
      } else if (target.className === "box__small_box") {
        target = target.parentNode.parentNode.parentNode;
      }
      const companyName = target.dataset.name;
      this.setState({ targetCompany: companyName });
    }
  };

  render() {
    const { isLoading, companies, targetCompany } = this.state;

    return (
      <div className="App">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <>
            <div className="App layout">
              <div className="top_layout">
                {companies.map(({ companyName, boxPrice }, index) => {
                  return (
                    <Companies
                      name={companyName}
                      boxPrice={boxPrice}
                      handleEvnet={this.getTargetCompany}
                      key={index}
                    />
                  );
                })}
              </div>
              <div className="bottom_layout">
                {companies.map(({ companyName, news }, key) => {
                  if (companyName === targetCompany) {
                    return <News name={targetCompany} news={news} key={key} />;
                  }
                  return <News name={""} news={[]} key={key} />;
                })}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
