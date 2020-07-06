import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { handleInitialData } from "../../actions/shared";
import { setAuthedUser } from "../../actions/authedUser";

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

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} />
        ) : (
          // <Redirect
          //   to={{ pathname: "/login", state: { from: props.location } }}
          // />
          <Login />
        )
      }
    />
  );
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
  };
  render() {
    const { authed, authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            <Navbar authedUser={authedUser} handleLogout={this.handleLogout} />
            <PrivateRoute
              authed={authed}
              path="/"
              exact
              component={Dashboard}
            />
            <PrivateRoute
              authed={authed}
              path="/question/:id"
              exact
              component={Poll}
            />
            <PrivateRoute
              authed={authed}
              path="/add"
              exact
              component={NewQuestion}
            />
            <PrivateRoute
              authed={authed}
              path="/leaderboard"
              exact
              component={Leaderboard}
            />
            <Route path="/login" exact component={Login} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authed: authedUser !== null,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
