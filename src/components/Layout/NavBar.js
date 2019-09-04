import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({ logout, currentUser }) => {

  const links = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
    </>
  );

  const authLinks = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
      </li>
      <li className="nav-item">
        <span className="nav-link" onClick={logout} style={{ cursor: 'pointer' }}>Logout</span>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Skate Spots</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto">
            { currentUser ? authLinks : links }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
