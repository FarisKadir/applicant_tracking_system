import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AdminNav = () => {

  const  { user, isAuthenticated } = useAuth0();


  const IsAdmin = () => {
        if (isAuthenticated && user.["http://www.user.app_role"])  {
            return true
          } 
          else {
            return false
      }
  }


  return (
    IsAdmin() && (
      <>
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">View Requisitions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Manage Users</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Profile</a>
        </li>

      </>
    )
    
  )
}

export default AdminNav