import { apiCall } from "services/api";
import { addError } from "store/actions/errors";
import { LOAD_SONG_LIST, REMOVE_SONG_LIST } from "store/actionTypes";

export const loadSongList = songList => ({
  type: LOAD_SONG_LIST,
  payload: songList
});

export const fetchSongList = (userId, category) => {
  return dispatch => {
    return new Promise(((resolve, reject) => {
      return apiCall("post",
      `/api/users/${userId}/songList`,
      { category })
      .then(res => {
        dispatch(loadSongList(res));
        resolve();
      })
      .catch(err => {
        dispatch(addError(err.message));
        reject();
      });
    }))
  };
};

export const postNewHighScore = (totalScore, userId, songListId) => {
  return dispatch => {
    return new Promise(((resolve, reject) => {
      return apiCall("put",
      `/api/users/${userId}/songList/${songListId}`,
      { totalScore })
      .then(res => {
        dispatch(loadSongList(res));
        resolve();
      })
      .catch(err => {
        dispatch(addError(err.message));
        reject();
      });
    }))
  };
};
