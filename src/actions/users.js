export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS"

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function updateUserQuestions(user, qId) {

  console.log("This is the user: ", user, "This is the question id: ", qId)
  return {
    type: UPDATE_USER_QUESTIONS,
    user,
    qId
  };
}
