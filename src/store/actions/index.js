import { SET_ANSWER,
         SET_TIME_REMAINING,
         INC_PLAYABLE_SONG_COUNT } from "store/actionTypes";

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

export function incPlayableSongCount() {
  return {
    type: INC_PLAYABLE_SONG_COUNT
  }
};