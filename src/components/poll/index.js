import React, { Component } from "react";
import "./poll.css";
import { connect } from "react-redux";

class Poll extends Component {
  handleRender = (users, authedUser, question) => {
    const optionOneTotal = question.optionOne.votes.length;
    const optionTwoTotal = question.optionTwo.votes.length;
    const total =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    if (question.optionOne.votes.includes(users[authedUser].id)) {
      return (
        <div className="answer-container">
          <div className="answer first selected">
            <p className="selected-answer">You selected</p>
            <h3>{question.optionOne.text}</h3>
            <p className="total-answers">
              {optionOneTotal} of {total}
            </p>
          </div>
          <div className="answer second">
            <h3>{question.optionTwo.text}</h3>
            <p className="total-answers">
              {optionTwoTotal} of {total}
            </p>
          </div>
        </div>
      );
    } else if (question.optionTwo.votes.includes(users[authedUser].id)) {
      return (
        <div className="answer-container">
          <div className="answer first">
            <h3>{question.optionOne.text}</h3>
            <p className="total-answers">
              {optionOneTotal} of {total}
            </p>
          </div>
          <div className="answer second selected">
            <p className="selected-answer">You selected</p>
            <h3>{question.optionTwo.text}</h3>
            <p className="total-answers">
              {optionTwoTotal} of {total}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="answer-container">
          <button type="submit" onClick={this.handleOnClick} className="answer first">{question.optionOne.text}</button>
          <button type="submit" onClick={this.handleOnClick} className="answer second">{question.optionTwo.text}</button>
        </div>
      );
    }
  };

  handleOnClick = (e) => {
    console.log(e.target)
  }

  render() {
    const { questions, users, authedUser } = this.props;
    const { id } = this.props.match.params;
    const question = questions[id];
    const user = users[question.author];

    return (
      <div className="poll-container">
        <div className="info">
          <div className="avatar-container">
            <img className="avatar" src={user.avatarURL} alt={user.name} />
            <p className="avatar-name"> {user.name} asks:</p>
          </div>
          <p className="question">Would you rather ...</p>
        </div>
        {this.handleRender(users, authedUser, question)}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser,
  };
}
export default connect(mapStateToProps)(Poll);
