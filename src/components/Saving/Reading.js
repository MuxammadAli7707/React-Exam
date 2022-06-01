import React from 'react';
import { Link } from "react-router-dom";
import Aside from '../Aside/Aside';
import Nav from '../Nav/Nav';

function Reading({ save }) {
  return (
    <div className="container d-flex justify-content-between">
      <Nav />

      <div className='reading'>
        <div className='reading__main d-flex align-items-center justify-content-between'>
          <div className='reading__inner d-flex align-items-center'>
            <img className='nav__user' src="https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395884-account_80606.png" alt="user" />
            <div className='reading__box'>
              <h2 className='reading__title'>UserName</h2>
              <div className='d-flex align-items-center'>
                <p className='reading__text'>Today</p>
                <p className='reading__text'>5 stories</p>
                <i className='bx bxs-lock-alt reading__icon'></i>
              </div>
            </div>
          </div>
            <div className='reading__dots'>
              <button className='reading__btn'>
                <i className='bx bx-dots-horizontal-rounded' ></i>
              </button>
            </div>
        </div>
        <h2 className='reading__desc'>Reading list</h2>

        <ul className="stories__list reading__list list-unstyled">
            {save.map((item, index) => {
              return (
                <li className="stories__item">
                  <div className='reading__inputing'>
                    <textarea className='reading__input' placeholder='Add a note...' cols="100" rows="2"></textarea>
                  </div>
                  <div className="topic__header d-flex align-items-center mb-3">
                    <img
                      className="topic__avatar"
                      src={item.avatar}
                      alt={item.name}
                    />
                    <h3 className="topic__name">{item.name}</h3>
                    <span className="topic__data">{item.data}</span>
                  </div>
                  <div className="topic__main d-flex">
                    <div className="topic__box">
                      <Link className="topic__link" to={`/info/${item.id}`}>
                        <h2 className="topic__title">{item.title}</h2>
                        <p className="topic__desc">{item.desc}</p>
                      </Link>

                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <span className="topic__type">{item.type}</span>
                          <span className="topic__read">{item.read}</span>
                          <span className="topic__select">
                            Selected for you
                          </span>
                        </div>
                        <div className="topic__btnbox d-flex">
                          <button className="topic__mbtn">
                            <i className="bx bxs-bookmark topic__bookmark"></i>
                          </button>
                          <div className="topic__modal">
                            <ul className="topic__modal-list">
                              <li className="topic__modal-item">
                                <label
                                  className="d-flex align-items-center"
                                  htmlFor="savedcheck"
                                >
                                  <input
                                    className="me-2"
                                    type="checkbox"
                                    name="save"
                                    id="savedcheck"
                                    defaultChecked={true}
                                  />{" "}
                                  Reading list
                                </label>
                              </li>
                              {save.map((save, index) => {
                                return (
                                  <li
                                    key={index + 1}
                                    className="topic__modal-item"
                                  >
                                    <label
                                      className="d-flex align-items-center"
                                      htmlFor={save.name + "id"}
                                    >
                                      <input
                                        className="me-2"
                                        type="checkbox"
                                        name="save"
                                        id={save.name + "id"}
                                        defaultChecked={false}
                                      />{" "}
                                      {save.name}
                                    </label>
                                  </li>
                                );
                              })}
                            </ul>
                            <button className="topic__modal-mopen">
                              Create new list
                            </button>
                          </div>
                          <i className="bx bx-dots-horizontal-rounded topic__dot"></i>
                        </div>
                      </div>
                    </div>

                    <div className="topic__imgbox">
                      <img
                        className="topic__img"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                  </div>

                </li>
              );
            })}
          </ul>
      </div>
      <Aside />
    </div>
  );
}

export default Reading;