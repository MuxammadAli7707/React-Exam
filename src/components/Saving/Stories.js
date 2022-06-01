import React from "react";
import { Link } from "react-router-dom";
import Aside from "../Aside/Aside";
import Nav from "../Nav/Nav";

function Stories({ save, setSave }) {
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
            <p className='stories__text'>Published</p>
            <p className='stories__text'>Responses</p>
          </div>
          
        </div>
      </div>
      <Aside />
    </div>
  );
}
export default Stories;
