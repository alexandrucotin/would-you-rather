import React, { Fragment } from "react";
import "./app.css";
import Dashboard from "../dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../navbar";
import Poll from "../poll"
import NewQuestion from "../newQuestion"

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="App">
          <Route path="/" exact component={Dashboard} />
          <Route path="/poll" exact component={Poll} />
          <Route path="/newquestion" exact component={NewQuestion} />
          <Route path="/leaderboard" exact component={Poll} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
