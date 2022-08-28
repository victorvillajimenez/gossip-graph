import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../../actions/userActionCreator';

const Author = ({userId, fetchUser, user}) => {

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'start'
      }}
    >
      <small>
        {user.name} - {user.email}
      </small>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};

export default connect(mapStateToProps, {
  fetchUser
})(Author);
