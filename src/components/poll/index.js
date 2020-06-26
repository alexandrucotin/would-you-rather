import React, { Component } from "react";
import "./poll.css";
import { connect } from "react-redux";

class Poll extends Component {
  render() {
    const { questions, users } = this.props;
    const { id } = this.props.match.params;
    const question = questions[id]
    const user = users[question.author]
    return (
      <div className="poll-container">
        <div className="info">
          <div className="avatar-container">
          <img className="avatar" src={user.avatarURL} alt={user.name}/>
            <p className="avatar-name"> {user.name} asks:</p>
          </div>
          <p className="question">Would you rather ...</p>
        </div>
        <div className="answer-container">
          <div className="answer first">
            <p>{question.optionOne.text}</p>
          </div>
          <div className="answer second">
            <p>{question.optionTwo.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }) {
  return {
    questions,
    users
  };
}
export default connect(mapStateToProps)(Poll);
