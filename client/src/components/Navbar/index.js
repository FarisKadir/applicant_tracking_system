import React from 'react';
import NoAuthNav from '../NoAuthNav';
import ApplicantNav from '../ApplicantNav';
import AdminNav from '../AdminNav';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';



const Navbar = () =>  {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="./assets/images/logo200x200.png" height="100" width="100"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav justify-content-end navbar-nav ml-auto">
                            <NoAuthNav />
                            <ApplicantNav />
                            <AdminNav />
                            <LoginButton />
                            <LogoutButton />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar