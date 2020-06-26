import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getQuestions(), _getUsers()]).then(
      ([questions, users]) => {
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
        dispatch(hideLoading());
      }
    );
  };
}
