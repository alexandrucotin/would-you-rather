import React, { Component } from "react";
import "./leaderboard.css";
import User from "../user";

class Leaderboard extends Component {
  render() {
    return (
      <div className="leaderboard-container">
        <h3 className="leaderboard-title">Leaderboard</h3>
        <ul className="leaderboard-list">
          <User />
          <User />
          <User />
        </ul>
      </div>
    );
  }
}

export default Leaderboard;
