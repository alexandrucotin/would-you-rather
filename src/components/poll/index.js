import React, { Component } from "react";
import "./poll.css";
import { connect } from "react-redux";

class Poll extends Component {
  render() {
    const { questions } = this.props;
    const { id } = this.props.match.params;
    return (
      <div className="poll-container">
        <div className="info">
          <div className="avatar-container">
            <div className="avatar-img"></div>

            {console.log("La domanda e': ", questions[id])}
            <p className="avatar-name">{questions[id].author} asks:</p>
          </div>
          <p className="question">Would you rather ...</p>
        </div>
        <div className="answer-container">
          <div className="answer first">
            <p></p>
          </div>
          <div className="answer second">
            <p></p>
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
