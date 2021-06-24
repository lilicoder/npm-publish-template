import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Grid from "../examples/grid";
const routers = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Grid} />
    </Switch>
  </Router>
);
export default routers;
