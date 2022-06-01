import React from "react";
import Aside from "../Aside/Aside";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

function Highlights() {

  return (
    <div className="container d-flex">
      <Nav />
      <div className="list">
        <div className="list__header d-flex">
          <h1 className="list__title">Your List</h1>
        </div>
        <div className="list__saved">
        <Link to='/list'>
          <button className="list__saved-btn list__saved-activ">Saved</button>
          </Link>
          <button className="list__saved-btn">Highlights</button>
        </div>
      </div>
      <Aside />
    </div>
  );
}

export default Highlights;
