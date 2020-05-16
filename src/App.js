import React from "react";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Map from "./Map/Map";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/family-address/:id">
          <Map />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
