import React from "react";
import { Link } from "react-router-dom";
import signup from '../../assets/images/signin.svg'

export default function SignIn() {
  let inputHandler = (e) => {
    console.log(e)
  }

  return(
    <>
      <div className="sign">
        <div className="sign__main d-flex">
          <div className="sign__imgbox">
            <img className="sign__img" src={signup} alt="" />
          </div>
          <div className="sign__rightbox">
            <div className="sign__box">
              <h2 className="sign__title">Sign In</h2>
              <p className="sign__desc">Already have an account? <Link className="sign__link" to="/">Sign up</Link> </p>
              <form action="">
                <label className="sign__label" htmlFor="upmail">
                  <input id="upmail" onChange={inputHandler} className="sign__input" type="text" placeholder="Email" />
                </label>
                <label className="sign__label" htmlFor="uppass">
                  <input id="uppass" onChange={inputHandler} className="sign__input" type="text" placeholder="Password"/>
                </label>
                <Link to="/home">
                  <button type="submit" className="sign__btn">Next step</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}