import React from 'react';
import NavBarAuth from '../NavBarAuth';


const Navbar = () =>  {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="./assets/images/logo200x200.png" height="100" width="100" alt="logo"/></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                        <ul className="nav navbar-nav">
                            <NavBarAuth />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar