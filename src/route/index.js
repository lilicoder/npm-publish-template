import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Basic from "../examples/basic";
import Split from "../examples/split";
import Warn from "../examples/warn";
import Sm from "../examples/sm";
import Grid from "../examples/grid";
import Ref from "../examples/ref";
const routers = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Grid} />
      <Route exact path="/basic" component={Basic} />
      <Route exact path="/split" component={Split} />
      <Route exact path="/warn" component={Warn} />
      <Route exact path="/sm" component={Sm} />
      <Route exact path="/grid" component={Grid} />
      <Route exact path="/ref" component={Ref} />
    </Switch>
  </Router>
);
export default routers;
