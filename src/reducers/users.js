import { RECEIVE_USERS, UPDATE_USER_QUESTIONS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case UPDATE_USER_QUESTIONS:
      const { user, qId } = action;
      return {
        ...state,
        [user.id]: {
          ...state[user.id],
          questions: state[user.id].questions.concat(qId),
        },
      };
    default:
      return state;
  }
}
