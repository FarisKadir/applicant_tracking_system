
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => logout()}>Logout</a>
      </li>
    )
  )
}

export default LogoutButton