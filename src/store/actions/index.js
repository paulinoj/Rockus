import { SET_ANSWER,
         SET_TIME_REMAINING } from "store/actionTypes";

export function setAnswer(answer) {
  return {
    type: SET_ANSWER,
    payload: answer
  }
};

export function setTimeRemaining(secs) {
  return {
    type: SET_TIME_REMAINING,
    payload: secs
  }
};
