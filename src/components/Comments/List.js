import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchCommentsByPost} from '../../actions/commentsByPostActionCreator';
import ListItem from './ListItem';

const ZERO = 'No comments';
const ONE = '1 comment';
const MANY = 'comments';

const List = ({isOpen, postId, fetchCommentsByPost, comments = []}) => {

  useEffect(() => {
    if (!isOpen) return;
    fetchCommentsByPost(postId);
  }, [isOpen, postId]);

  if (!isOpen) return null;

  let sizeLbl = !comments.length ?
    ZERO : comments.length === 1 ?
      ONE : `${comments.length} ${MANY}`;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'end'
        }}
      >
        {sizeLbl}
      </div>
      {!!comments.length &&
        <ul
          style={{
            margin: '1rem 0',
            listStyleType: 'none',
            paddingInlineStart: 0
          }}
        >
          {comments.map(comment =>
            <ListItem
              key={comment.id}
              comment={comment}
            />
          )}
        </ul>}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.commentsByPost[ownProps.postId]
  };
};

export default connect(mapStateToProps, {fetchCommentsByPost})(List);
