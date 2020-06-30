import React, { Component } from "react";
import { connect } from "react-redux";

import "./user.css";

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <li className="user-container">
        <img className="avatar" src={user.avatarURL} alt={user.name} />
        <div className="content-container">
          <div className="personal-info">
            <p className="user-name">{user.name}</p>
            <p className="user-answered">
              Answered questions: {Object.keys(user.answers).length}
            </p>
            <p className="user-created">
              Created questions: {user.questions.length}
            </p>
          </div>
          <div className="score-container">
            <p className="user-score">Score</p>
            <div className="points">
              <p>{Object.keys(user.answers).length + user.questions.length}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user,
  };
}

export default connect(mapStateToProps)(User);
