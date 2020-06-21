import { _getQuestions } from "../utils/_DATA";
import { receiveQuestions } from "../actions/questions";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
