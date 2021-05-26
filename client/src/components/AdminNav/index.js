import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
        </Link>
        <Link to="/requisitions">
          <li className="nav-item"><a className="nav-link" href="#">View Requisitions</a></li>
        </Link>
        <Link to="/usermanagement">
          <li className="nav-item"><a className="nav-link" href="#">Manage Users</a></li>
        </Link>
        <Link to="/profile">
          <li className="nav-item"><a className="nav-link" href="#">Profile</a></li>
        </Link> 
      </>
    )
    
  )
}

export default AdminNav