import React, { useState } from "react";
import Aside from "../Aside/Aside";
import { Object } from "../Object/Object";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";

function Home({
  storyText,
  setWishCate,
  setWishCate2,
  wishCate2,
  wishCate, 
  setWishlist, 
  wishlist, 
  name,
  lastName,
  mail,
  save, 
  setSave}) {

  let [Obj, setObj] = useState(Object)
  let [content, setContent] = useState(Obj)

  return(
    <div className='container'>
      <div className='d-flex'>
        <Nav 
        name={name}
        mail={mail}
        />
        <Main
          storyText={storyText}
          Obj={Obj}
          content={content}
          setContent={setContent}
          wishCate={wishCate}
          setWishlist={setWishlist}
          setWishCate={setWishCate}
          setWishCate2={setWishCate2}
          wishCate2={wishCate2}
          wishlist={wishlist}
          save={save}
          setSave={setSave}
          name={name}
          lastName={lastName}
        />
        <Aside />
      </div>
    </div>
  )
}

export default Home