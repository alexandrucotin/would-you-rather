import React, { Component } from "react";
import "./leaderboard.css";
import { connect } from "react-redux";
import User from "../user";

class Leaderboard extends Component {
  render() {
    return (
      <div className="leaderboard-container">
        <h3 className="leaderboard-title">Leaderboard</h3>
        <ul className="leaderboard-list">
        {this.props.userIds.map((id) => (
              <User key={id} id={id} />
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users).sort(
      (a, b) =>
        users[b].questions.length +
        Object.keys(users[b].answers).length -
        (users[a].questions.length + Object.keys(users[a].answers).length)
    ),
  };
}

export default connect(mapStateToProps)(Leaderboard);
