import React from "react";
import { Link } from "react-router-dom";
import { BiLogIn, BiCog } from 'react-icons/bi';
import { FaDropbox } from 'react-icons/fa';
import './Navbar.css';

export default function NavbarComponent() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FaDropbox className="navbar-icon" />
        <Link to="/" className="navbar-title">Dropbox</Link>
      </div>
      <div className="navbar-links">
        <Link to="/user" className="navbar-link">
          <BiCog className="navbar-icon-right" />Profile
        </Link>
        <Link to="/login" className="navbar-link">
          <BiLogIn className="navbar-icon-light" />Sign out
        </Link>
      </div>
    </nav>
  );
}
