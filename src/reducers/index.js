import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import commentsByPostReducer from './commentsByPostReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  commentsByPost: commentsByPostReducer
});
