import React, { Component } from "react";
import { connect } from "react-redux";

import { setAuthedUser } from "../../actions/authedUser";
import "./login.css";

class Login extends Component {
  state = {
    authedUser: "select a user",
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
    history.push("/")
  };

  render() {
    return (
      <div className="login-container">
        <h3 className="title">Login</h3>
        <select
          onChange={this.handleOnChange}
          defaultValue={this.state.value}
          className="login-dropdown"
        >
          <option
            value="select a user"
            selected={true}
            disabled="disabled"
            className="dropdown-option"
          >
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

export default connect()(Login);
