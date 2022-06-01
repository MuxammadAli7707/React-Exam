import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modaling from "../../Saving/Modaling";


function Topic({
  Obj,
  content,
  wishCate,
  setWishCate,
  wishCate2,
  setWishCate2,
  setWishlist,
  wishlist,
  save,
  setSave
}) {

  let [showing, setshowing] = useState(false)

  let openSave = () => {
    setWishlist(true)
  }

  const saveItem = (el) => {
    showing !== el.id ? setshowing(el.id): setshowing("");
    if (save.indexOf(el) !== -1) 
    return
    setSave([...save, el])
  }

  return(
    <div className="topic">
        <div className="topic__header d-flex">
          <Link to='/follow'>
          <button className="topic__btn">Following</button>
          </Link>
          <button className="topic__btn">Recommended</button>
        </div>
        <ul className="topic__list">
          {
            content.map((item, index) => {
              return(
                <li key={index + 1} className="topic__item">
                  <div className="topic__inner d-flex align-items-center">
                    <img className="topic__avatar" src={item.avatar} alt={item.name} />
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
                          <button className="topic__type">{item.type}</button>
                          <span className="topic__read">{item.read}</span>
                          <span className="topic__select">Selected for you</span>
                        </div>
                        <div className="topic__btnbox d-flex">
                          <button id={'opening' +item.id} onClick={()=> saveItem(item)} className="topic__mbtn">
                            <i className='bx bx-bookmark-alt-plus topic__bookmark'></i>
                          </button>


                          <div id={'modal'+item.id}
                          style={{display: showing === item.id ? "block" : "none",}}
                          className={`topic__modal`}
                          >

                            <ul className="topic__modal-list">
                              <li className="topic__modal-item">
                                <label className="d-flex align-items-center" htmlFor="savedcheck">
                                  <input className="me-2" type="checkbox" name="save" id="savedcheck"
                                  defaultChecked={true} /> Reading list
                                </label>
                              </li>
                              {
                                wishCate.map((save, index) => {
                                  return(
                                    <li key={index + 1} className="topic__modal-item">
                                      <label className="d-flex align-items-center" htmlFor={save.name + "id"}>
                                        <input className="me-2" type="checkbox" name="save" id={save.name + "id"}
                                        defaultChecked={false} /> {save.name}
                                      </label>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                              <button onClick={openSave} className="topic__modal-mopen">Create new list</button>
                          </div>
                          <i className='bx bx-dots-horizontal-rounded topic__dot'></i>
                        </div>
                      </div>
                    </div>

                    <Link className="topic__link" to={`/info/${item.id}`}>
                      <div className="topic__imgbox">
                        <img className="topic__img" src={item.img} alt={item.name} />
                      </div>
                    </Link>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <Modaling
          setWishlist={setWishlist}
          wishlist={wishlist}
          setWishCate={setWishCate}
          wishCate={wishCate}
          setWishCate2={setWishCate2}
          wishCate2={wishCate2}
        />
      </div>

  )
}

export default Topic