import {API_URL} from './utils';

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await fetch(`${API_URL}/posts`);
  const jsonResp = await response.json();
  dispatch({
    type: 'FETCH_POSTS',
    payload: jsonResp
  });
};
