import React, { Component } from "react";
import "./user.css";

class User extends Component {
  render() {
    return (
      <li className="user-container">
        <div className="avatar-img"></div>
        <div className="content-container">
          <div className="personal-info">
            <p className="user-name">Alex</p>
            <p className="user-answered">Answered questions: 7</p>
            <p className="user-created">Created questions: 3</p>
          </div>
          <div className="score-container">
            <p className="user-score">Score</p>
            <div className="points">
              <p>10</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default User;
