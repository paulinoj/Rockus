import { SET_TIME_REMAINING } from "store/actionTypes";

export default (state = 0, action) => {
  switch (action.type) {
    case SET_TIME_REMAINING:
      return action.payload;
    default:
      return state;
  }
};
