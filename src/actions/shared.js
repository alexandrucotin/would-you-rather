import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getQuestions(), _getUsers()]).then(
      ([questions, users]) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      }
    );
  };
}
