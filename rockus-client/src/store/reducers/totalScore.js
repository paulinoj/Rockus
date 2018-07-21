import { INC_TOTAL_SCORE, 
         RESET_SCORE } from "store/actionTypes";

export default function(state = 0, action) {
  switch (action.type) {
    case INC_TOTAL_SCORE:
      return state + action.payload;
    case RESET_SCORE:
      return 0;
    default:
      return state;
  }
}
