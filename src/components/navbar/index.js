import React, { Component } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    console.log(window.location.pathname);
    if(window.location.pathname === "/login"){
      return null
    }
    return (
      <nav>
        <NavLink to="/" exact className="logo">
          Would you rather?
        </NavLink>
        <ul>
          <li>
            <NavLink to="/" exact>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/newquestion" exact>
              new question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" exact>
              leaderboard
            </NavLink>
          </li>
        </ul>
        <div className="profile">+</div>
      </nav>
    );
  }
}

export default Navbar;
