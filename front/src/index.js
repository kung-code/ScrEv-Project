import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import ConsoleLayout from "layouts/ConsoleAdmin.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/console" render={(props) => <ConsoleLayout {...props} />} />
    <Route path="/admin/:IdProjeto" render={(props) => <AdminLayout {...props} />} />
    <Redirect to="/console/project" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
