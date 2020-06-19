import React, { Component } from "react";
import "./question.css"
class Question extends Component {
  render() {
    return (
      <div className="question-card">
        <div className="question-avatar">
          <div className="avatar"></div>
          <p className="name">Alex Cotin</p>
        </div>
        <div className="question-content">
          <div className="question-text">
            <p className="wur">Would you rather?</p>
            <p className="question-question">.... or ....</p>
          </div>
          <button className="button question">View poll</button>
        </div>
      </div>
    );
  }
}

export default Question;
