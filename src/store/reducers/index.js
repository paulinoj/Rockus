import { combineReducers } from "redux";
import currentUser from "store/reducers/currentUser";
import errors from "store/reducers/errors";
import answer from "store/reducers/answer";

const rootReducer = combineReducers({
  currentUser,
  errors,
  answer
});

export default rootReducer;
