import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const NoAuthNav = () => {

  const  { user, isAuthenticated } = useAuth0();


  return (
    !isAuthenticated && (
      <>
        <Link to='/'>
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
        </Link>
      </>
    )
  )
}

export default NoAuthNav