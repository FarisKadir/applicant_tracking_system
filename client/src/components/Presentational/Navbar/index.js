import React from 'react';
import NoAuthNav from '../../Functional/NoAuthNav/index';
import ApplicantNav from '../../Functional/ApplicantNav/index';
import AdminNav from '../../Functional/AdminNav/index';
import LoginButton from '../../Functional//LoginButton/LoginButton';
import LogoutButton from '../../Functional//LogoutButton/LogoutButton';



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
                        <ul className="navbar-nav ml-auto">
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