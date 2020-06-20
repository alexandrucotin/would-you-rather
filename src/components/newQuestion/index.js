import React, { Component } from "react";
import "./newQuestion.css";

class NewQuestion extends Component {
  render() {
    return (
      <div className="new-question-container">
        <h2 className="title">Submit new poll</h2>
        <p className="subtitle">Complete the question:</p>
        <p className="wur">Would you rather ...</p>
        <div className="answer-options-container">
          <input className="answer-option" />
          <h4>or</h4>
          <input className="answer-option" />
        </div>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default NewQuestion;
