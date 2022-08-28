import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions/postsActionCreator';
// import {fetchPostsAndUsers} from '../../actions/postsAndUsersActionCreator';
import ListItem from './ListItem';

const List = ({posts, fetchPosts}) => {
  useEffect(() => {
    fetchPosts();
    // fetchPostsAndUsers
  }, []);

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        maxWidth: '790px',
        margin: '0 auto'
      }}
    >
      <ul
        style={{
          margin: '2rem',
          listStyleType: 'none',
          paddingInlineStart: 0
        }}
      >
        {posts.map(post =>
          <ListItem
            key={post.id}
            post={post}
          />)}
      </ul>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, {
  fetchPosts
  // fetchPostsAndUsers
})(List);
