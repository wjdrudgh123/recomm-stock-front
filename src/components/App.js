import React from "react";
import axios from "axios";
import AppRouter from "./AppRouter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], isLoading: true };
  }

  initFunc = async () => {
    const { data } = await axios.get(
      `https://${process.env.REACT_APP_IP}/data`
      //`http://localhost:4000/data`
    );

    this.setState({
      data: data,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.initFunc();
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <div className="App">
        {isLoading ? (
          <div className="loading-box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <AppRouter data={data} />
        )}
      </div>
    );
  }
}

export default App;
