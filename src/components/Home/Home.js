import React, { useState } from "react";
import Aside from "../Aside/Aside";
import { Object } from "../Object/Object";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";

function Home({
  setWishCate,
  setWishCate2,
  wishCate2,
  wishCate, 
  setWishlist, 
  wishlist, 
  save, 
  setSave}) {

  let [Obj, setObj] = useState(Object)
  let [content, setContent] = useState(Obj)

  return(
    <div className='container'>
      <div className='d-flex'>
        <Nav />
        <Main
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
        />
        <Aside />
      </div>
    </div>
  )
}

export default Home