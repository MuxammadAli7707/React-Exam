import React, { useState } from "react";
import { Link } from "react-router-dom";

function Category({ Obj, setContent }) {
  let arr = [];
  let arrbtn = [];

  Obj.map((item) => {
    arrbtn.push(item.type);
  });
  arr = [...new Set(arrbtn)];

  let cateHandler = (e) => {
    setContent(Obj.filter((item) => item.type === e.target.id));
    if(e.target.id === "all") {
      setContent(Obj.filter(item => item.type !== e.target.id))
    }
  };

  return (
    <div className="category d-flex flex-column">
      <div className="category__box">
        <Link className="category__link d-flex align-items-center" to="/home">
          <span className="category__plus d-flex justify-content-center align-items-center">
            +
          </span>
          Keep up with the latest in any topic
        </Link>
      </div>
      <ul className="category__list d-flex list-unstyled">
      <li className="category__item">
        <button onClick={cateHandler} id="all" className="topic__type">All</button>
      </li>
        {arr.map((item, key) => {
          return (
            <li className="category__item" key={key + 1}>
              <button onClick={cateHandler} id={item} className="topic__type">
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Category;
