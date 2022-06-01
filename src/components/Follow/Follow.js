import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Aside from "../Aside/Aside";
function Follow() {
  return (
    <div className="container d-flex justify-content-between">
      <Nav />
      <div className="follow">
        <div className="follow__main">
          <div className="follow__inner">
            <button className="follow__plus">+</button>
            <p className="follow__keep">
              Keep up with the latest in any follow
            </p>
          </div>
          <ul className="follow__cates"></ul>
          <div className="follow__links">
            <Link to="/follow" className="follow__link">
              Following
            </Link>
            <Link to="/home" className="follow__link">
              Recommended
            </Link>
          </div>
        </div>
        <div className="follow__boxing">
          <p className="follow__text">
            Stories from the writers you follow will appear here.
          </p>
          <Link to="/home" className="follow__brow">
            <button className="follow__btn">Browse recommended stories</button>
          </Link>
        </div>
      </div>

      <Aside />
    </div>
  );
}

export default Follow;
