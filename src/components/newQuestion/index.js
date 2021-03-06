import React, { Component } from "react";
import { handleAddQuestion } from "../../actions/questions";
import { connect } from "react-redux";
import "./newQuestion.css";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  handleChangeOptionOne = (e) => {
    const optionOne = e.target.value;
    this.setState(() => ({
      optionOne,
    }));
  };

  handleChangeOptionTwo = (e) => {
    const optionTwo = e.target.value;
    this.setState(() => ({
      optionTwo,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state;
    const { dispatch, history } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
    }));
    history.push("/");
  };

  render() {
    const { optionOne, optionTwo } = this.state;
    return (
      <div className="new-question-container">
        <div>
          <div className="titles-container">
            <h2 className="title">Submit new poll</h2>
            <p className="subtitle">Complete the question</p>
          </div>
          <p className="wur">Would you rather ...</p>
          <form
            className="answer-options-container"
            onSubmit={this.handleSubmit}
          >
            <input
              className="answer-option"
              onChange={this.handleChangeOptionOne}
              value={optionOne}
            />
            <h4>or</h4>
            <input
              className="answer-option"
              onChange={this.handleChangeOptionTwo}
              value={optionTwo}
            />

            <button
              className="button"
              type="submit"
              disabled={optionOne === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
