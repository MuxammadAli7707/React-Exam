import React from 'react';
import { Link } from 'react-router-dom';

function Adding() {
  return (
    <div className='add'>
      <div className='add__main'>
        <div className='add__header'>
          <Link to='/home'>
          <img className='add__logo' src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="logo" />
          </Link>
          <p className='add__desc'>Draft</p>
        </div>
        <div className='add__info'>
          <Link to='/'>
            <button className='add__link'>Publish</button>
          </Link>
            <button className='add__dots'>
              <i className='bx bx-dots-horizontal-rounded' ></i>
            </button>
            <button className='add__bell'><i className='bx bx-bell' ></i></button>
            <img className='add__user' src="https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395884-account_80606.png" alt="user" />
        </div>
      </div>

      <form className='add__inputbox'>
        {/* <input placeholder='Title' className='add__input' type="text" /> */}
        <textarea placeholder='Title' className='add__inputing' cols="90" rows="100"></textarea> 
        {/* <input className='add__inputing' type='text' /> */}
      </form>
    </div>
  );
}

export default Adding;