import { combineReducers } from "redux";
import currentUser from "store/reducers/currentUser";
import errors from "store/reducers/errors";
import answer from "store/reducers/answer";
import timeRemaining from "store/reducers/timeRemaining";

const rootReducer = combineReducers({
  currentUser,
  errors,
  answer,
  timeRemaining
});

export default rootReducer;
