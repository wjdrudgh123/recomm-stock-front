import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./header/Nav";
import Rss from "../routes/rss/Rss";
import Home from "../routes/home/Home";

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/rss">
          <Rss />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
