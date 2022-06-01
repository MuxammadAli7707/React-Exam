import React from "react";
import { Link } from "react-router-dom";
import Aside from "../Aside/Aside";
import Nav from "../Nav/Nav";

function Stories({ storyText }) {
  return (
    <div className="container d-flex justify-content-between">
      <Nav />
      <div className="stories">
        <div className="stories__main">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h1 className="stories__titles">Your stories</h1>
            <div className="stories__btns">
              <Link to="/add">
                <button className="stories__btn">Write a story</button>
              </Link>
              <button className="stories__button">Import a story</button>
            </div>
          </div>
          <div className='stories__links'>
            <p className='stories__text'>Drafts</p>
            <p className='stories__text'>Published 1</p>
            <p className='stories__text'>Responses</p>
          </div>
          
          <ul className="stories__listing">
            {storyText.map((item, i) => {
              if(item.text !== ''){
                return (
                  <li key={i + 1} className="stories__item">
                     <h4 className="stories__title">{item.text}</h4>
                     <div className="stories__box d-flex align-items-center">
                       <p className="stories__pub">Published less than a minute ago</p>
                       <span className="stories__pub">1 min read</span>
                       <button className="stories__ikon"><i className='bx bx-upload'></i></button>
                       <button className="stories__ikon"><i className='bx bx-dots-horizontal-rounded' ></i></button>
                     </div>
                  </li> 
                 )
              }
            })}
          </ul>
          
        </div>
      </div>
      <Aside />
    </div>
  );
}
export default Stories;
