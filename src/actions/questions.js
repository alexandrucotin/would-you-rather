const ADD_QUESTION = "ADD_QUESTION";
const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
const TOGGLE_QUESTION = "TOGGLE_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function toggleQuestion({ id, authedUser, optionChoosed }) {
  return {
    type: TOGGLE_QUESTION,
    id,
    authedUser,
    optionChoosed,
  };
}
