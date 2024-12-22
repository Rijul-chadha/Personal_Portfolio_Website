import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "./Navbar1.css"; // Import custom CSS

function Navbar1() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i className="bi bi-person-fill navbar-icon"></i>
          <span className="navbar-name">Rijul Chadha</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={closeNavbar}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={closeNavbar}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="mailto:r1chadha@torontomu.ca?subject=Inquiry&body=Hello Rijul,"
                onClick={closeNavbar}
              >
                Email-Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
