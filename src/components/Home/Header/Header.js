import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">Cyberlearn</NavLink>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "nav-link activeNavItem" : "nav-link"}
              to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "nav-link activeNavItem" : "nav-link"}
              to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "nav-link activeNavItem" : "nav-link"}
              to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "nav-link activeNavItem" : "nav-link"}
              to="/login">
              Login
            </NavLink>

          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "nav-link activeNavItem" : "nav-link"}
              to="/Profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </button>
              <div className="dropdown-menu" aria-labelledby="triggerId">
                <NavLink
                  className={({ isActive }) => `nav-link dropdown-item ${isActive ? "activeNavItem" : ""}`}
                  to="/TodolistRFC">
                  TodolistRFC
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive ? "nav-link dropdown-item activeNavItem" : "nav-link dropdown-item"}
                  to="/Todolistredux">
                  TodolistRedux
                </NavLink>
                <NavLink
                  className={({ isActive }) => `nav-link dropdown-item ${isActive ? "activeNavItem " : ""}`}
                  to="/Todolist">
                  Todolist
                </NavLink>
              </div>
            </div>
           
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "nav-link activeNavItem" : "nav-link"}
              to="/demohocmodal">
              DemoHOCModal
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

