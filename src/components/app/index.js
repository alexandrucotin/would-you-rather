import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../../actions/shared";

// CSS FILE
import "./app.css";

// COMPONENTS
import Dashboard from "../dashboard";
import Navbar from "../navbar";
import Poll from "../poll";
import NewQuestion from "../newQuestion";
import Leaderboard from "../leaderboard";
import Login from "../login";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="App">
          <Route path="/" exact component={Dashboard} />
          <Route path="/question/:id" exact component={Poll} />
          <Route path="/newquestion" exact component={NewQuestion} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route path="/login" exact component={Login} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
