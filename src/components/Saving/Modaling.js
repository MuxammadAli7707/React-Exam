import React, { useState } from "react";
import { Link } from "react-router-dom";

function Modaling({
  setWishlist, 
  wishlist, 
  wishCate, 
  setWishCate, 
  wishCate2, 
  setWishCate2}) {

  let closedHandler = () => {
    setWishlist(false)
  }

  let [num, setNum] = useState(0)

  let inputHandler = (e) => {
    setNum(e.target.value)
    setWishCate2({
      name: e.target.value,
    })
  }

  let showHandler = (e) => {
    e.preventDefault()
    setWishCate([...wishCate, wishCate2])
    setWishlist(false)
    e.target.reset()
  }

  return(
    <div className={`modaling ${wishlist ? 'openModal' : ''}`}>
      <div className="modaling__main">
          <div className="d-flex justify-content-end">
            <button onClick={closedHandler} className="modaling__xbtn"><i className='bx bx-x'></i></button>
          </div>
        <div className="modaling__box">
          <h2 className="modaling__title">Create new list</h2>
          <form onSubmit={showHandler} className="modaling__form" action="">
            <label htmlFor="listinput">
              <input onChange={inputHandler} className="modaling__input" id="listinput" type="text" max={60} placeholder="Give it a name" />
              <div className="d-flex justify-content-end">
                <span className="modaling__count">{num.length} / 60</span>
              </div>
            </label>
            <span className="modaling__desc">Add a description</span>
            <label className="modaling__check" htmlFor="listcheck">
            <input className="" type="checkbox" name="check" id="listcheck" /> Make it private
            </label>
            <div className="d-flex justify-content-center">
              <button onClick={closedHandler} type="button" className="modaling__cancel">Cancel</button>
               <button type="sumbit" className="modaling__btn">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Modaling