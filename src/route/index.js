import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Basic from "../examples/basic";
import Split from "../examples/split";
import Warn from "../examples/warn";
import Sm from "../examples/sm";
import Grid from "../examples/grid";
import Ref from "../examples/ref";
import FormTable from "../examples/editgrid/form";
import TableCell from "../examples/editgrid/cell";
import AcGrid from "../examples/ac-grid";
import AcMoreSearch from "../examples/ac-more-seach";
import AcSeachPanel from "../examples/ac-seach";
import AcSplit from "../examples/ac-split";
import AcSingle from "../examples/ac-single";
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
      <Route exact path="/form-table" component={FormTable} />
      <Route exact path="/table-cell" component={TableCell} />
      <Route exact path="/ac-grid" component={AcGrid} />
      <Route exact path="/ac-more-search" component={AcMoreSearch} />
      <Route exact path="/ac-search" component={AcSeachPanel} />
      <Route exact path="/ac-split" component={AcSplit} />
      <Route exact path="/ac-single" component={AcSingle} />
    </Switch>
  </Router>
);
export default routers;
