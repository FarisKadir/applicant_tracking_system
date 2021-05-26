
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => loginWithRedirect()}>Login</a>
      </li>
    )
  )
}

export default LoginButton