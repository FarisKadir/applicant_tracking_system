import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {


  return (
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
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">View Requisitions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Manage Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar