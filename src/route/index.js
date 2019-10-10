import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import App from "../App";
import Basic from "../examples/basic";
import Split from "../examples/split";
import Warn from "../examples/warn";
const routers = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/basic" component={Basic} />
      <Route exact path="/split" component={Split} />
      <Route exact path="/warn" component={Warn} />
    </Switch>
  </Router>
);
export default routers;
