import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./header/Nav";
import Rss from "../routes/rss/Rss";
import Home from "../routes/home/Home";
import Schedule from "../routes/schedule/Schedule";
const AppRouter = ({ data: { company, news, realTime, schedule } }) => {
  const editorName = Object.keys(news[0]);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home company={company} realTime={realTime} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/rss">
          <Rss news={news} editorName={editorName[0]} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/sche">
          <Schedule schedule={schedule} />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
