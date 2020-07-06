import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { setAuthedUser } from "../../actions/authedUser";
import "./login.css";

class Login extends Component {
  state = {
    authedUser: "sarahedo",
  };

  handleOnChange = (e) => {
    const selectedUser = e.target.value;
    this.setState(() => ({
      authedUser: selectedUser,
    }));
  };

  handleOnClick = (e) => {
    const { dispatch, history } = this.props;
    dispatch(setAuthedUser(this.state.authedUser));
    history.push(window.location.pathname);
  };

  render() {
    return (
      <div className="login-container">
        <h3 className="title">Login</h3>
        <select
          onChange={this.handleOnChange}
          value={this.state.value}
          className="login-dropdown"
        >
          <option defaultValue disabled value="select a user..." className="dropdown-option">
            select a user...
          </option>
          <option value="sarahedo" className="dropdown-option">
            Sarah
          </option>
          <option value="tylermcginnis" className="dropdown-option">
            Tyler
          </option>
          <option value="johndoe" className="dropdown-option">
            John
          </option>
        </select>
        <button className="button" type="submit" onClick={this.handleOnClick}>
          Login
        </button>
      </div>
    );
  }
}

export default withRouter(connect()(Login));
