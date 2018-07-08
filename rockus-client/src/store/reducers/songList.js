import { LOAD_SONG_LIST, REMOVE_SONG_LIST } from "store/actionTypes";

export default (state = { songs: [] }, action) => {
  switch (action.type) {
    case LOAD_SONG_LIST:
      return action.payload;
    default:
      return state;
  }
}