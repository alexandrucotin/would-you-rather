import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => (
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
    {props.authedUser && <p>Hi {props.authedUser}!</p>}
    {props.authedUser && (
      <button className="button" onClick={props.handleLogout}>
        Logout
      </button>
    )}
  </nav>
);

export default Navbar;
