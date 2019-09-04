import React from 'react';

const Profile = ({ profile: { username, email, signup_date }}) => {
  // const Profile = (props) => {
    // const { username } = props.user;
  // console.log('Profile Props = ', props);
  return (
    <div>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Signup Date:</strong> {new Date(signup_date).toLocaleString()}</p>
    </div>
  );
};

export default Profile;
