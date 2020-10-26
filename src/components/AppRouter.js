import React from "react";
import Home from "../routes/home/Home";
import News from "../routes/news/News";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Footer from "./Footer";

const AppRouter = ({ companies, realTime, news, newsFlag, moveDate }) => {
  console.log(news[newsFlag]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home companies={companies} realTime={realTime} />
        </Route>
        <Route exact path="/nextWeeks">
          <News nextWeekSchedule={news[newsFlag]} moveDate={moveDate} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
