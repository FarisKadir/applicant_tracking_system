import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

const NavBarAuth = () => {

  const  { user, isAuthenticated } = useAuth0();


    const IsAdmin = () => {
            if (isAuthenticated && user.["http://www.user.app_role"])  {
                return (
                <>
                    <Link to="/">
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    </Link>
                    <Link to="/jobs">
                        <li className="nav-item"><a className="nav-link" href="#">View Jobs</a></li>
                    </Link>
                    <Link to="/usermanagement">
                        <li className="nav-item"><a className="nav-link" href="#">Manage Users</a></li>
                    </Link>
                    <Link to="/profile">
                        <li className="nav-item"><a className="nav-link" href="#">Profile</a></li>
                    </Link>
                    <LogoutButton />
                </>
                )
            } 
            else if (isAuthenticated && !user.["http://www.user.app_role"]) {
                return (
                    <>
                        <Link to="/">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        </Link>
                        <Link to="/submissions">
                            <li className="nav-item"><a className="nav-link" href="#">View Submissions</a></li>
                        </Link>
                        <Link to="/profile">
                            <li className="nav-item"><a className="nav-link" href="#">Profile</a></li>
                        </Link>
                        <LogoutButton />
                    </>
                ) 
            } else  {
                return (
                    <>
                        <Link to="/">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        </Link>
                        <LoginButton />
                    </>
                    )
            }
    };

  return (
    <> 
        {IsAdmin()}
    </>
  )
}

export default NavBarAuth