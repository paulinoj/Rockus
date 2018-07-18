import { INC_PLAYABLE_SONG_COUNT,
         RESET_PLAYABLE_SONG_COUNT } from "store/actionTypes";

export default (state = 0, action) => {
  switch (action.type) {
    case INC_PLAYABLE_SONG_COUNT:
      return state + 1;
    case RESET_PLAYABLE_SONG_COUNT:
      return 0;
    default:
      return state;
  }
};
