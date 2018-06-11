import { INC_PLAYABLE_SONG_COUNT } from "store/actionTypes";

export default (state = 0, action) => {
  switch (action.type) {
    case INC_PLAYABLE_SONG_COUNT:
      return state + 1;
    default:
      return state;
  }
};
