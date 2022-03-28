import React from "react";
import bootstrap from "./bootstrap.css"

import { Link } from "react-router-dom";

const BootstrapNav = () => {
  return (
    <nav className="navbar navbar-light light-blue lighten-4">
      <Link to="/" className="navbar-brand" />

      <button
        className="navbar-toggler toggler-example"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="dark-blue-text">
          <i class="fas fa-bars fa-1x"></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="inbox">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
   
  );
};

export default BootstrapNav;
