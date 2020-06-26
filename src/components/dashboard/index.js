import React, { Component } from "react";
import Question from "../question";
import "./dashboard.css";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { authedUser, questions } = this.props;
    if (authedUser === null) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div className="container">
          <div className="questions-list">
            <h3 className="title">Unanswer questions</h3>
            {Object.keys(questions).map((key) => {
              if (
                questions[key].optionOne.votes.includes(authedUser) === false &&
                questions[key].optionTwo.votes.includes(authedUser) === false
              ) {
                return (
                  <Question
                    key={questions[key].timestamp}
                    id={questions[key].id}
                  />
                );
              }
            })}
          </div>
          <div className="questions-list">
            <h3 className="title">Answer questions</h3>
            {Object.keys(questions).map((key) => {
              if (
                questions[key].optionOne.votes.includes(authedUser) === true ||
                questions[key].optionTwo.votes.includes(authedUser) === true
              ) {
                return (
                  <Question
                    key={questions[key].timestamp}
                    id={questions[key].id}
                  />
                );
              }
            })}
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questions,
  };
}

export default connect(mapStateToProps)(Dashboard);
