import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import pages
import DashBoard from "src/pages/dashboard";
import Desfixforfix from "src/pages/des(fixforfix)";
import Regex from "src/pages/regex";
import Ceasy from "src/pages/ceasy";

export default function Rotas() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <DashBoard />
        </Route>
        <Route path="/regex">
          <Regex />
        </Route>
        <Route path="/desfixforfix">
          <Desfixforfix />
        </Route>
        <Route path="/ceasy">
          <Ceasy />
        </Route>
      </Switch>
    </Router>
  );
}
