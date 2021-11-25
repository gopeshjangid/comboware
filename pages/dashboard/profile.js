import React from 'react';
import Admin from 'layouts/Admin.js';
import ProfileComponent from 'components/Modules/Profile';

function Profile() {
  return <ProfileComponent />;
}

Profile.layout = Admin;

export default Profile;
