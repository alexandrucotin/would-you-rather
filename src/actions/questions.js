import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { updateUserQuestions, updateUserAnswers } from "./users";
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

function toggleQuestion(authedUser, qid, answer) {
  return {
    type: TOGGLE_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleToggleQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then(() => {
      dispatch(toggleQuestion(authedUser, qid, answer));
      dispatch(updateUserAnswers(authedUser, qid, answer));
    });
  };
}
