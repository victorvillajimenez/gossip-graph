import {API_URL} from './utils';

const _fetchUserWithMemo = () => {
  const memo = {};
  return async (userId, cached, dispatch, getState) => {
    if (!cached && memo[userId]) {
      memo[userId] = undefined;
    }
    if (!memo[userId]) {
      const _user = async (userId, dispatch) => {
        const response = await fetch(`${API_URL}/users/${userId}`);
        const jsonResp = await response.json();
        dispatch({
          type: 'FETCH_USER',
          payload: jsonResp
        });
      };
      memo[userId] = _user(userId, dispatch);
    }
  };
};

const _fetchUser = _fetchUserWithMemo();

export const fetchUser =
  (userId, cached = true) =>
    (dispatch, getState) =>
      _fetchUser(userId, cached, dispatch, getState);

// Original
//
// export const fetchUser = (userId) => async (dispatch, getState) => {
//   const response = await fetch(`${API_URL}/users/${userId}`);
//   const jsonResp = await response.json();
//   dispatch({
//     type: 'FETCH_USER',
//     payload: jsonResp
//   });
// };
