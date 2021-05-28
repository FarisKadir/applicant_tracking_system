import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const ApplicantNav = () => {

  const  { user, isAuthenticated } = useAuth0();


  const IsApplicant = () => {
        if (isAuthenticated && !user.["http://www.user.app_role"])  {
            return true
          } 
          else {
            return false
      }
  }


  return (
    IsApplicant() && (
      <>
        <Link to="/">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
        </Link>
        <Link to="/jobs">
          <li className="nav-item"><a className="nav-link" href="#">Jobs</a></li>
        </Link>
        <Link to="/profile">
          <li className="nav-item"><a className="nav-link" href="#">Profile</a></li>
        </Link>
      </>
    )
    
  )
}

export default ApplicantNav