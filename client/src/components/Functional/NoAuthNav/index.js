import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const NoAuthNav = () => {

  const  { user, isAuthenticated } = useAuth0();


  return (
    !isAuthenticated && (
      <>
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
      </>
    )
  )
}

export default NoAuthNav