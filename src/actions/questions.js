import { _saveQuestion } from "../utils/_DATA";
import { updateUserQuestions } from "./users";
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
    const { users, authedUser } = getState();

    dispatch(showLoading());

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(updateUserQuestions(users[authedUser], question.id));
      })
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
