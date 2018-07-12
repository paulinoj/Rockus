import { combineReducers } from "redux";
import currentUser from "store/reducers/currentUser";
import errors from "store/reducers/errors";
import answer from "store/reducers/answer";
import timeRemaining from "store/reducers/timeRemaining";
import songList from "store/reducers/songList";
import totalScore from "store/reducers/totalScore";

const rootReducer = combineReducers({
  currentUser,
  errors,
  answer,
  timeRemaining,
  songList,
  totalScore
});

export default rootReducer;
