import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Details } from "./pages/Details";
import { List } from "./pages/List";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/details" exact component={Details} />
      </Switch>
    </Router>
  );
}
