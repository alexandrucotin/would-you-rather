import React, { Component } from "react";
import "./poll.css";

class Poll extends Component {
  render() {
    return (
      <div className="poll-container">
        <div className="info">
          <div className="avatar-container">
            <div className="avatar-img"></div>
            <p className="avatar-name">Alex Cotin asks:</p>
          </div>
          <p className="question">Would you rather ...</p>
        </div>
        <div className="answer-container">
          <div className="answer first">
            <p>find $50 yourself</p>
          </div>
          <div className="answer second">
            <p>have your best friend find $500</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Poll;
