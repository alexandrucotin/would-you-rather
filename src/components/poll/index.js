import React, { Component } from "react";
import "./poll.css";
import { connect } from "react-redux";

class Poll extends Component {
  render() {
    const { questions } = this.props;
    const { id } = this.props.match.params;
    const question = questions[id]
    return (
      <div className="poll-container">
        <div className="info">
          <div className="avatar-container">
            <div className="avatar-img"></div>
            {console.log("La domanda e': ", question.id)}
            <p className="avatar-name"> {question.author} asks:</p>
          </div>
          <p className="question">Would you rather ...</p>
        </div>
        <div className="answer-container">
          <div className="answer first">
            <p>{question.optionOne.text}</p>
          </div>
          <div className="answer second">
            <p>{question.optionTwo.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}
export default connect(mapStateToProps)(Poll);
