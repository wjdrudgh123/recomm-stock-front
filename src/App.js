import React from "react";
import axios from "axios";
import Companies from "./Companies";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    companies: [],
  };

  getLists = async () => {
    console.log("start");
    const { data } = await axios.get("http://localhost:5000/data", {
      timeout: 300000,
    });
    console.log(data);
    this.setState({ isLoading: false, companies: data });
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
            {companies.map(({ companyName, news }, index) => {
              return <Companies name={companyName} news={news} key={index} />;
            })}
          </>
        )}
      </div>
    );
  }
}

export default App;
