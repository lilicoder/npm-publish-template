import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Basic from "../examples/basic";
import Split from "../examples/split";
import Warn from "../examples/warn";
import Sm from "../examples/sm";
const routers = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Basic} />
      <Route exact path="/basic" component={Basic} />
      <Route exact path="/split" component={Split} />
      <Route exact path="/warn" component={Warn} />
      <Route exact path="/sm" component={Sm} />
    </Switch>
  </Router>
);
export default routers;
