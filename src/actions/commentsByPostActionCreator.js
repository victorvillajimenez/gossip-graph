import {API_URL} from './utils';

export const fetchCommentsByPost = (postId) => async (dispatch, getState) => {
  const response = await fetch(`${API_URL}/posts/${postId}/comments`);
  const jsonResp = await response.json();
  dispatch({
    type: 'FETCH_COMMENTS_BY_POST',
    payload: {[postId]: jsonResp}
  });
};
