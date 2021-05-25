import React from 'react';


const LoginButton = () => {
  const log = ""

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

export default LoginButton