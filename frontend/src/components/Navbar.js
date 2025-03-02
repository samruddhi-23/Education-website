import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/admissions">Admissions</Link></li>
        <li><Link to="/alumni">Alumni</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
