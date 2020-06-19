import React, { Fragment } from "react";
import "./app.css";
import Dashboard from "../dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../navbar";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="App">
          <Route path="/" exact component={Dashboard} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
