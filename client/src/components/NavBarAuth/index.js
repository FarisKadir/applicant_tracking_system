import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

const NavBarAuth = () => {

  const  { user, isAuthenticated } = useAuth0();

  




    const IsAdmin = () => {
            if (isAuthenticated && user.email.search("faris.com") !== -1)  {
                return (
                <>
                    <Link to="/jobs">
                        <li className="nav-item"><span className="nav-link" >Manage Job Openings</span></li>
                    </Link>
                    <Link to="/profile">
                        <li className="nav-item"><span className="nav-link" >Profile</span></li>
                    </Link>
                    <LogoutButton />
                </>
                )
            } 
            else if (isAuthenticated && !user.["http://www.user.app_role"]) {
                return (
                    <>
                        <Link to="/jobs">
                            <li className="nav-item"><span className="nav-link" >View Job Openings</span></li>
                        </Link>
                        <Link to="/submissions">
                            <li className="nav-item"><span className="nav-link" >View My Submissions</span></li>
                        </Link>
                        <Link to="/profile">
                            <li className="nav-item"><span className="nav-link" >Profile</span></li>
                        </Link>
                        <LogoutButton />
                    </>
                ) 
            } else  {
                return (
                    <>
                        <Link to="/">
                            <li className="nav-item"><span className="nav-link" >Home</span></li>
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