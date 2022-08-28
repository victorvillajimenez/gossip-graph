const commentsByPostReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_COMMENTS_BY_POST':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default commentsByPostReducer;