import React from "react";
import axios from "axios";
import Companies from "./Companies";
import News from "./News";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    companies: [],
  };
  //https://${process.env.REACT_APP_IP}
  getLists = async () => {
    const {
      data: { company, news },
    } = await axios.get(`http://localhost:4000/data`, {
      timeout: 300000,
      withCredentials: "include",
    });
    this.setState({
      isLoading: false,
      companies: company,
      weeksNews: news,
      news: news[0],
      newsFlag: 0,
    });
  };

  componentDidMount() {
    this.getLists();
  }

  handleMoveDate = (evt) => {
    const direct = evt.target.dataset.direction;
    let { newsFlag, weeksNews } = this.state;

    if (direct === "right") {
      if (newsFlag === 6) {
        this.setState({
          newsFlag: 0,
          news: weeksNews[0],
        });
      } else {
        newsFlag += 1;
        this.setState({
          newsFlag: newsFlag,
          news: weeksNews[newsFlag],
        });
      }
    } else if (direct === "left") {
      if (newsFlag === 0) {
        this.setState({
          newsFlag: 6,
          news: weeksNews[6],
        });
      } else {
        newsFlag -= 1;
        this.setState({
          newsFlag: newsFlag,
          news: weeksNews[newsFlag],
        });
      }
    }
  };

  render() {
    const { isLoading, companies, news } = this.state;
    return (
      <div className="App">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <>
            <div className="App layout">
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
                  <News
                    date={news.date}
                    news={news.news}
                    moveDate={this.handleMoveDate}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
