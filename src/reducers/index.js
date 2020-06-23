import { combineReducers } from "redux";
import authedUser from "./authedUser";
import questions from "./querstions";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authedUser,
  questions,
  loadingBar: loadingBarReducer,
});
