import React, { useState } from "react";
import { Link } from "react-router-dom";
import signup from '../../assets/images/signup.svg'

function SignUp({setName, setLastName, setPhone,setMail, setPass}) {

  let [fname, setfname] = useState(true)
  let [lastname, setlastname] = useState(true)
  let [phones, setphones] = useState(true)
  let [email, setemail] = useState(true)
  let [password, setpassword] = useState(true)
  let [count, setCount] = useState(0)

  let fHandler = (e) => {
    let name = e.target.value;
      setName(name)
     if(name === "" || name.match(/[0-9]/) || name.match(/[!@#&%*$^]/) || name.includes("  ") || name.length < 2) {
       setfname(false);

     } else {
       setfname(true);
       setCount(count + 1)
     }
   }

   let lastHandler = (e) => {
    let lastName = e.target.value;
    setLastName(lastName)

     if(lastName === "" || lastName.match(/[0-9]/) || lastName.match(/[!@#&%*$^]/) || lastName.includes("  ") || lastName.length < 2){
       setlastname(false);
     }else{
       setlastname(true);
       setCount(count + 1)

     }
   }

  let phoningHandler = (e) => {
    let phone = e.target.value;
    setPhone(phone)

    if(phone.length === "" || phone.length < 9 || Number.isInteger(phone)){
      setphones(false);
     }else{
      setphones(true);
      setCount(count + 1)
    }
  }

  let emailHandler = (e) => {
    let mail = e.target.value;
    setMail(mail)

    if(! mail.includes('@') && ! mail.includes('.')){
      setemail(false)
    }
    else{
      setemail(true)
      setCount(count + 1)
      }
  }

  let fnameHandler = (e) => {
   let name = e.target.value;

    if(name === "" || name.match(/[0-9]/) || name.match(/[!@#&%*$^]/) || name.includes("  ") || name.length < 2){
      setfname(false);

    }else{
      setfname(true);
      setCount(count + 1)
    }
  }

  let lastnameHandler = (e) => {
   let lastName = e.target.value;

    if(lastName === "" || lastName.match(/[0-9]/) || lastName.match(/[!@#&%*$^]/) || lastName.includes("  ") || lastName.length < 2){
      setlastname(false);
    }else{
      setlastname(true);
      setCount(count + 1)
    }
  }

  let phoneHandler = (e) => {
    let phone = e.target.value;

    if(phone.length === "" || phone.length < 5 || Number.isInteger(phone)){
      setphones(false);
    }else{
      setphones(true);
    }
  }

  let mailHandler = (e) => {
   let email = e.target.value;

    if(! email.includes('@') && ! email.includes('.')){
      setemail(false)
    }
    else{
      setemail(true)
    }
  }
  return(
    <>
      <div className="sign">
        <div className="sign__main d-flex">
          <div className="sign__imgbox">
            <img className="sign__img" src='https://cdn-icons-png.flaticon.com/512/5968/5968885.png' alt="logo" />
          </div>
          <div className="sign__rightbox">
            <div className="sign__box">
              <h2 className="sign__title">Sign Up</h2>
              <p className="sign__desc">Already have an account? <Link className="sign__link" to="/signin">Sign in</Link> </p>
              <form>
                <label className="sign__label" htmlFor="fristname">
                  <input id="fristname" onBlur={fHandler} onChange={fnameHandler} className={fname ? "sign__input" : "sign__input sign__error"} type="text" placeholder="First Name"/>
                </label>
                <label className="sign__label" htmlFor="lastname">
                  <input id="lastname" onBlur={lastHandler} onChange={lastnameHandler} className={lastname ? "sign__input" : "sign__input sign__error"} type="text" placeholder="Last name"/>
                </label>
                <label className="sign__label" htmlFor="upphone">
                  <input id="upphone" onBlur={phoningHandler} onChange={phoneHandler} className={phones ? "sign__input" : "sign__input sign__error"} type={"number"} placeholder="Phone" />
                </label>
                <label className="sign__label" htmlFor="upmail">
                  <input id="upmail" onBlur={emailHandler} onChange={mailHandler} className={email ? "sign__input" : "sign__input sign__error"} type="text" placeholder="Email" />
                </label>
                <label className="sign__label" htmlFor="uppass">
                  <input id="uppass" className={password ? "sign__input" : "sign__input sign__error"} type="password" placeholder="Password"/>
                </label>
                <Link to="/home">
                  <button type="submit" className="sign__btn" disabled={count >= 4 ? false : true}>Next step</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp