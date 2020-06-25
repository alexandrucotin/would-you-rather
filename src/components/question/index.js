import React, { Component } from "react";
import "./question.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
class Question extends Component {
  render() {
    const { question } = this.props;
    return (
      <div className="question-card">
        <div className="question-avatar">
          <div className="avatar"></div>
          <p className="name">{question.author}</p>
        </div>
        <div className="question-content">
          <div className="question-text">
            <p className="wur">Would you rather?</p>
            <p className="question-question">
              {question.optionOne.text} <b>or</b> {question.optionTwo.text}
            </p>
          </div>
          <Link to={"/question/:"+question.id} className="button">
            View poll
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions }, { id }) {
  const question = questions[id];
  return {
    id,
    question: question,
  };
}

export default connect(mapStateToProps)(Question);
