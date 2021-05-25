import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  let profile ='';


  if (user[Object.values({user})[0]] == "admin") {
    profile =  ( 
      <div>
         <img src={user.picture} alt={user.name} />
         <h2>Username: {user.name}</h2>
         <p>Email: {user.email}</p>
         <JSONPretty data={user} />
       </div>
     );
  } ;
  


  return (
    isAuthenticated && (
      {profile}
    )
  )
}

export default Profile