import { _saveQuestion } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_QUESTION = "ADD_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const TOGGLE_QUESTION = "TOGGLE_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function toggleQuestion({ id, authedUser, optionChosen }) {
  return {
    type: TOGGLE_QUESTION,
    id,
    authedUser,
    optionChosen,
  };
}
