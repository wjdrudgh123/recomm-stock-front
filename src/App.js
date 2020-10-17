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
    console.log("start");
    // const { data } = await axios.get(
    //   `https://${process.env.REACT_APP_IP}/data`,
    //   {
    //     timeout: 300000,
    //     withCredentials: "include",
    //   }
    // );

    const data = [
      {
        companyName: "양지사",
        boxPrice: {
          firstBox: [9256, 9977],
          secBox: [9025, 10232],
        },
        news: [],
      },
      {
        companyName: "신화실업",
        boxPrice: {
          firstBox: [19446, 21142],
          secBox: [19128, 21494],
        },
        news: [],
      },
      {
        companyName: "현대제철",
        boxPrice: {
          firstBox: [27170, 28723],
          secBox: [25987, 30030],
        },
        news: [
          {
            newsTitle:
              "`철강주의 부활`(?) US스틸·현대제철 이달 20%↑…원자재 철광석 ...",
            newsLink:
              "https://finance.naver.com/item/news_read.nhn?article_id=0004675835&office_id=009&code=004020&page=&sm=title_entity_id.basic",
          },
        ],
      },
      {
        companyName: "디지탈옵틱",
        boxPrice: {
          firstBox: [733, 732],
          secBox: [662, 811],
        },
        news: [],
      },
    ];
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
