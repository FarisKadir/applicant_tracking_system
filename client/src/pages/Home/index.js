import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {API} from '../../utils/API';

const Home = () =>  {

    //This retrieves the state of the user logged into Auto0
    const {user, isAuthenticated} = useAuth0();
    
    

    useEffect(() => {
        if (isAuthenticated) {
          const auth0Id = user.sub.split("|",2)[1];
          const auth0_provider = user.sub.split("|",2)[0];
          let auth0_role_id = 2;
          
          
          if (user.[`http://www.user.app_role`]) {
            auth0_role_id = 1;
          }
          
          API.getData(`users/${auth0Id}`)
            .then(res => {
      
              const userObj = res.data;
      
              if (userObj === null) {
                
                API.createData(`users`, [{
                  id: auth0Id,
                  external_id_provider: auth0_provider,
                  first_name: user.given_name,
                  last_name: user.family_name,
                  role_id: auth0_role_id,
                  email: user.email,
                  profile_pic: user.picture
                }])
                  .then(res => {
                    console.log("New user created: " + res.data);
                  })
                  .catch(err => console.log("User not created: " + err));
              } {
                API.updateData(`users/${auth0Id}`,{
                  role_id: auth0_role_id,
                  email: user.email,
                  profile_pic: user.picture
                }).then(res => console.log("user updated"))
              }
            })
            .catch(err => console.log("Error: " + err));
        } 
       },[user, isAuthenticated]);


    return (
        <>
            
        </>
    )
};

export default Home