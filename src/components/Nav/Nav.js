import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Nav({name, mail}) {
  let [isClicked, setClick] = useState(false)
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
              <button className="nav__use" onClick={() => setClick(!isClicked)}>
                <img className='nav__user' src="https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395884-account_80606.png" alt="user" />
              </button>
          </div>

          <div style={{display: isClicked ? 'block' : 'none'}} className='nav__modal'>
                <ul className='list-unstyled nav__modal__list p-3 m-0'>
                  <li className="">
                    <p className='mb-4'>Medium Partner Program</p>
                  </li>
                  <li className="nav__modal__item">
                    <p className='mb-4'>Gift a membership</p>
                  </li>
                  <li className='nav__modal__item'>
                    <p className='mb-4'>Become a member</p>
                  </li>
                  <li className='nav__modal__item'>
                    <p className='mb-4'>Sign out</p>
                  </li>
                  <li className='nav__modal__item'>
                    <p className='mb-4'>Refine recommendations</p>
                  </li>
                  <li className='nav__modal__item'>
                    <p className='mb-4'>Manage publications</p>
                  </li>
                  <li className='nav__modal__item'>
                    <p className='mb-4'>Stats</p>
                  </li>
                  <li className='nav__modal__item'>
                    <p className='mb-4'>Settings</p>
                  </li>
                  <li className='nav__modal__item d-flex align-items-center'>
                    <img className='nav__user' src="https://imgur.com/a/UmYj1xx.jpg" alt="user" />
                    <div className="nav__modal__box">
                      <h4 className="nav__modal__name">{name}</h4>
                      <p className="nav__modal__mail">@{mail}</p>
                      
                      
                      
                    </div>
                   
                  </li>
                </ul>
              </div>
        </div>
    </div>
  )
}
export default Nav