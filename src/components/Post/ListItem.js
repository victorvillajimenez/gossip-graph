import React from 'react';
import Author from './Author';
import Comments from '../Comments';

const ListItem = ({post}) => {
  return (
    <li
      style={{
        border: '1px solid black',
        borderRadius: '8px',
        padding: '1rem 2rem',
        margin: '1rem 0'
      }}
    >
      <Author userId={post.userId} />
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <Comments postId={post.id} />
    </li>
  );
};

export default ListItem;
