import React from 'react';
import UserProfile from '../components/user/User';

const User = (props) => {
  return <UserProfile user={props.user} email={props.email} />;
};

export default User;
