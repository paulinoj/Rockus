import { SET_ANSWER,
         SET_TIME_REMAINING,
         INC_PLAYABLE_SONG_COUNT,
         RESET_PLAYABLE_SONG_COUNT,
         INC_TOTAL_SCORE } from "store/actionTypes";

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

export function resetPlayableSongCount() {
  return {
    type: RESET_PLAYABLE_SONG_COUNT
  }
};

export function incTotalScore(value) {
  return {
    type: INC_TOTAL_SCORE,
    payload: value
  }
};
