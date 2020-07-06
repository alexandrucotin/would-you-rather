import React, { Component } from "react";
import Question from "../question";
import "./dashboard.css";

import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;
    return (
      <div className="container">
        <div className="questions-list">
          <h3 className="title">Unanswer questions</h3>
          {unansweredQuestions.map((question) => (
            <Question key={question} id={question} />
          ))}
        </div>
        <div className="questions-list">
          <h3 className="title">Answer questions</h3>
          {answeredQuestions.map((question) => (
            <Question key={question} id={question} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  const answeredQuestions = Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    .filter(
      (key) =>
        questions[key].optionOne.votes.includes(authedUser) ||
        questions[key].optionTwo.votes.includes(authedUser)
    );
  const unansweredQuestions = Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    .filter(
      (key) =>
        questions[key].optionOne.votes.includes(authedUser) === false &&
        questions[key].optionTwo.votes.includes(authedUser) === false
    );
  return {
    unansweredQuestions,
    answeredQuestions,
    authedUser,
    questions,
  };
}

export default connect(mapStateToProps)(Dashboard);
