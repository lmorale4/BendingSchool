import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  const { search, handleSearchChange } = props;
  console.log('SEARCH', search);
  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light">
      <div className="container px-0">
        <NavLink className="navbar-brand" to="/">
          <img
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Avatar_The_Last_Airbender_logo.svg/1200px-Avatar_The_Last_Airbender_logo.svg.png"
          />
        </NavLink>
        <span
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </span>
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/campuses">
                Campuses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/students">
                Students
              </NavLink>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <div className="input-group">
              <input
                id="search"
                className="form-control"
                value={search}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearchChange}
              />
              <div className="input-group-append">
                <select className="custom-select">
                  <option value="campuses">Campus</option>
                  <option value="students">Student</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
