import React from "react";
import axios from "axios";
import Companies from "./Companies";
import "./App.css";

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
    console.log(data);
    this.setState({
      isLoading: false,
      companies: data,
    });
  };

  componentDidMount() {
    this.getLists();
  }

  render() {
    const { isLoading, companies } = this.state;

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
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
