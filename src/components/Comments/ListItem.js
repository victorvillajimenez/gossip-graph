import React from 'react';

const ListItem = ({comment}) => {
  return (
      <li
        style={{
          margin: '8px',
          padding: '8px',
          borderRadius: '8px',
          backgroundColor: '#EEE'
        }}
      >
        <div>
          <small>
            {comment.email}
          </small>
        </div>
        <h5>
          {comment.name}
        </h5>
        <p>
          {comment.body}
        </p>
      </li>
    );
};

export default ListItem;
