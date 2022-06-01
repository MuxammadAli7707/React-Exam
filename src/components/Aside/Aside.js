import React from 'react';

function Aside() {
  return (
    <div className='aside'>
      <div className='aside__main'>
        <button className='aside__btn'>Get unlimited access</button>
        <div className='aside__searchbox'>
          <i className='bx bx-search'></i>
          <input placeholder='Search' className='aside__search' type="text" />
        </div>
        <p className='aside__read'>What We’re Reading Today</p>
        
        <div className='aside__account'>
          <img className='aside__img' src="https://miro.medium.com/fit/c/25/25/1*nenBtwrB3Pjur6L9lgN13A.jpeg" alt="img" />
          <h5 className='aside__name'>Benjamin Sledge</h5>
        </div>
        <h4 className='aside__about'>On Watching a Friend Die in Combat</h4>

        <div className='aside__account'>
          <img className='aside__img' src="https://miro.medium.com/fit/c/25/25/1*nenBtwrB3Pjur6L9lgN13A.jpeg" alt="img" />
          <h5 className='aside__name'>Sophie Lucido Johnson</h5>
        </div>
        <h4 className='aside__about'>When Was The Last Time You Edited Your Phone Contacts?</h4>
        <div className='aside__account'>
          <img className='aside__img' src="https://miro.medium.com/fit/c/25/25/1*nenBtwrB3Pjur6L9lgN13A.jpeg" alt="img" />
          <h5 className='aside__name'>Joshua Gans</h5>
        </div>
        <h4 className='aside__about'>The Myth of Renewable Bitcoin</h4>

        <a className='aside__link' href='#'>See the full list</a>

        <div className='aside__social'>
          <img className='aside__logo' src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="logo" />
          <span className='aside__plus'>+</span>
          <i className='bx bxl-twitter' ></i>
        </div>
        <p className='aside__discover'>Discover Medium writers you already follow on Twitter.</p>
        <div className='aside__button'>
           <i className='bx bxl-twitter' ></i>
            <span className='aside__connect'>Connect to Twitter</span>
        </div>

        <p className='aside__later'>Maybe Later</p>
      </div>
    </div>
  );
}

export default Aside;