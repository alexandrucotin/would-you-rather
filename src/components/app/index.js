import React, { Fragment, Component } from "react";
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
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {loading === true ? null : (
            <div className="App">
              <Navbar />
              <Route path="/" exact component={Dashboard} />
              <Route path="/question/:id" exact component={Poll} />
              <Route path="/newquestion" exact component={NewQuestion} />
              <Route path="/leaderboard" exact component={Leaderboard} />
              <Route path="/login" exact component={Login} />
            </div>
          )}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
