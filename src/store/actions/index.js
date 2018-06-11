import { SET_ANSWER } from "store/actionTypes";

export function setAnswer(answer) {
  return {
    type: SET_ANSWER,
    payload: answer
  }
};
