import React, { Component } from "react";
import "./newQuestion.css";

class NewQuestion extends Component {
  state = {
    questionOne: "",
    questionTwo: "",
  };
  render() {
    return (
      <div className="new-question-container">
        <div>
          <div className="titles-container">
            <h2 className="title">Submit new poll</h2>
            <p className="subtitle">Complete the question</p>
          </div>
          <p className="wur">Would you rather ...</p>
          <div className="answer-options-container">
            <input className="answer-option" />
            <h4>or</h4>
            <input className="answer-option" />
          </div>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </div>
    );
  }
}

export default NewQuestion;
