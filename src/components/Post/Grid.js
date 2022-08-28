import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions/postsActionCreator';
import Card from './Card';

const Grid = ({posts, fetchPosts}) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        maxWidth: 'calc(100vw - 30%)',
        margin: '2rem auto',
        alignItems: 'start',
        gap: '0 20px',
        gridAutoRows: '20px'
        // gridAutoFlow: 'row'
      }}
    >
      {posts.map(post =>
        <Card
          key={post.id}
          post={post}
        />
      )}
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
})(Grid);
