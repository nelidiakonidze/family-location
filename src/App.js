import React from "react";
import "./App.css";
import Dashboard from './Dashboard/Dashboard';
import Map from './Map/Map';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/Family" component={Dashboard} />
      <Route path="/Family-address" component={Map}/>
    </Router>
  );
}

export default App;
