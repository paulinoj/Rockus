import { INC_TOTAL_SCORE } from "store/actionTypes";

export default function(state = 0, action) {
  switch (action.type) {
    case INC_TOTAL_SCORE:
      return state + action.payload;
    default:
      return state;
  }
}
