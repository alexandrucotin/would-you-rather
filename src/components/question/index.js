import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./question.css";

import { connect } from "react-redux";

class Question extends Component {
  toQuestion = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/question/${id}`);
  };

  render() {
    const { question, user } = this.props;
    return (
      <div className="question-card">
        <div className="question-avatar">
          <img className="avatar" src={user.avatarURL} alt={user.name} />
          <p className="name">{user.name}</p>
        </div>
        <div className="question-content">
          <div className="question-text">
            <p className="wur">Would you rather?</p>
            <div className="question-question">
              <p>{question.optionOne.text}</p>
              <b>or</b>
              <p>{question.optionTwo.text}</p>
            </div>
          </div>
          <button
            className="button"
            onClick={(e) => this.toQuestion(e, question.id)}
          >
            View poll
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const user = users[question.author];
  return {
    id,
    question: question,
    user,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
