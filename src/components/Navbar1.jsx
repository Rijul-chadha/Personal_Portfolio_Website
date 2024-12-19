import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import './Navbar1.css'; // Import custom CSS for the navbar styling

function Navbar1() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom rounded-pill shadow-lg">
        <div className="container-fluid">
          <a className="navbar-brand me-5" href="#">
            {/* Replace GiHumanTarget with Bootstrap icon */}
            <i className="bi bi-person-fill navbar-icon me-2"></i>
            <span className="navbar-name">Rijul Chadha</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link nav-item-hover" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-item-hover" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-item-hover" to="/skills">
                  Skills
                </Link>
              </li>
              {/* Updated the "Email-Me" link to use mailto */}
              <li className="nav-item">
                <a
                  className="nav-link nav-item-hover"
                  href="mailto:r1chadha@torontomu.ca?subject=Inquiry&body=Hello Rijul,"
                >
                  Email-Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
