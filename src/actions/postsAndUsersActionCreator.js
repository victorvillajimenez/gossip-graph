import {fetchPosts} from './postsActionCreator';
import {fetchUser} from './userActionCreator';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  getState().posts
    .reduce((acc, post) =>
      acc.includes(post.userId) ? acc : [...acc, post.userId], [])
    .forEach(userId => 
      dispatch(fetchUser(userId, false)));
};
