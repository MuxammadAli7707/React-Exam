import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Nav() {
  return(
    <div className="nav">
        <div className="nav__main">
          <div className="nav__logobox">
            <Link to='/home'>
              <img className="nav__logo" src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="logo" />
            </Link>
          </div>
            <Navbar />
          <div className="nav__users">
              <img className='nav__user' src="https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395884-account_80606.png" alt="user" />
          </div>
        </div>
    </div>
  )
}
export default Nav