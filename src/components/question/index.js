import React, { Component } from "react";
import { withRouter} from "react-router-dom"
import "./question.css";

import { connect } from "react-redux";

class Question extends Component {
  toQuestion = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/question/${id}`);
  };

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
          <button
            className="button"
            onClick={(e) => this.toQuestion(e, question.id)}
          >View poll</button>
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

export default withRouter(connect(mapStateToProps)(Question));
