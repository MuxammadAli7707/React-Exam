import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="nav__nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="/home">
            <i className="nav__icon bx bxs-home"></i>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/note">
            <i className="nav__icon bx bx-bell"></i>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/list">
            <i className="nav__icon bx bx-bookmarks"></i>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/stories">
            <i className="nav__icon bx bx-spreadsheet"></i>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/add">
            <i className="nav__icon bx bxs-edit"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
