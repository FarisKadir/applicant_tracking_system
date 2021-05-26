import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  // "http://www.user.app_role"



  return (
    isAuthenticated && (
      <div>
      <img src={user.picture} alt={user.name} />
      <h2>Username: {user.name}</h2>
      <p>Email: {user.email}</p>
      <JSONPretty data={user} />
      <JSONPretty data={user.app_metadata} />
      <p>{ user.app_metadata }</p>
    </div>
    )
  )
}

export default Profile