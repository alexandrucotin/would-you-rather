import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <h3 className="title">Login</h3>
        <select className="login-dropdown">
          <option className="dropdown-option">Sarah</option>
          <option className="dropdown-option">Tyler</option>
          <option className="dropdown-option">John</option>
        </select>
        <button className="button" type="submit">
          Login
        </button>
      </div>
    );
  }
}

export default Login;
