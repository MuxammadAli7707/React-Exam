import React from "react";
import { Link } from "react-router-dom";
import Aside from "../Aside/Aside";
import Nav from "../Nav/Nav";
import Modaling from "./Modaling";

function List({
  setWishlist,
  wishlist,
  setWishCate,
  wishCate,
  setWishCate2,
  wishCate2,
  save,
  setSave
}) {
  let openModal = () => {
    setWishlist(!wishlist);
  };

  return (
    <div className="container d-flex">
      <Modaling
        setWishlist={setWishlist}
        wishlist={wishlist}
        setWishCate={setWishCate}
        wishCate={wishCate}
        setWishCate2={setWishCate2}
        wishCate2={wishCate2}
      />
      <Nav />
      <div className="list">
        <div className="list__header d-flex">
          <h1 className="list__title">Your List</h1>
          <button onClick={openModal} className="list__header-btn">
            New list
          </button>
        </div>
        <div className="list__saved">
          <button className="list__saved-btn list__saved-activ">Saved</button>
          <button className="list__saved-btn">Highlights</button>
        </div>

        <div className="list__inner">
          <div className="list__main">
            <div className="list__box">
              <p className="list__desc">
                Create a list to easily organize and share stories
              </p>
              <button className="list__create">Start a list</button>
            </div>
            <div className="list__circle">
              <svg width={283} height={174} viewBox="0 0 283 174" fill="none">
                <circle
                  opacity="0.15"
                  cx="141.5"
                  cy="87.5"
                  r="141.5"
                  fill="#E8F3E8"
                />
                <circle cx="141.5" cy="87.5" r="29.5" fill="#fff" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M148.71 74.32a.66.66 0 0 1 1.31.07v3.28h3.28a.66.66 0 1 1 0 1.3h-3.28v3.29a.66.66 0 1 1-1.3 0v-3.28h-3.29a.66.66 0 0 1 0-1.31h3.28v-3.28-.07zm-13.77 4c-.72 0-1.3.59-1.3 1.31v17.68l7.46-5.74a.66.66 0 0 1 .8 0l7.47 5.74V87.5a.66.66 0 1 1 1.3 0v11.14a.66.66 0 0 1-1.05.52l-8.12-6.24-8.12 6.24a.65.65 0 0 1-1.06-.52v-19a2.62 2.62 0 0 1 2.62-2.63h5.25a.66.66 0 0 1 0 1.31h-5.25z"
                  fill="#0F730C"
                />
              </svg>
            </div>
            <div>
              <i className="bx bx-x list__iks"></i>
            </div>
          </div>

          <Link className="list__link" to="/stories">
            <div className="list__reading">
              <div className="list__reading-box">
                <h2 className="list__reading-title">Reading</h2>
                <div className="d-flex">
                  <button className="list__reading-wiew">View list</button>
                </div>
              </div>
              <div className="list__reading-right">
                <div className="list__reading-imgbox">
                  <span className="list__reading-span"></span>
                </div>
                <div className="list__reading-boxs zindex">
                  <span className="list__reading-span"></span>
                </div>
                <div className="list__reading-boxs">
                  <span className="list__reading-span"></span>
                </div>
              </div>
            </div>
          </Link>

          <ul className="stories__list">
            {save.map((item, index) => {
              return (
                <li className="stories__item">
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
                            <i className="bx bx-bookmark-alt-plus topic__bookmark"></i>
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
                                    key={index + 771}
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

          {wishCate.map((item, index) => {
            return (
              <Link key={index + 5} className="list__link" to="/stories">
                <div className="list__reading">
                  <div className="list__reading-box">
                    <h2 className="list__reading-title">{item.name}</h2>
                    <div className="d-flex">
                      <button className="list__reading-wiew">View list</button>
                    </div>
                  </div>
                  <div className="list__reading-right">
                    <div className="list__reading-imgbox">
                      <span className="list__reading-span"></span>
                    </div>
                    <div className="list__reading-boxs zindex">
                      <span className="list__reading-span"></span>
                    </div>
                    <div className="list__reading-boxs">
                      <span className="list__reading-span"></span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Aside />
    </div>
  );
}

export default List;
