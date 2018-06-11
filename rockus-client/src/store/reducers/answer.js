import { SET_ANSWER } from "store/actionTypes";

export default function(state = "", action) {
  switch (action.type) {
    case SET_ANSWER:
      return action.payload
    default:
      return state;
  }
};
