import React from "react";
import Topic from "./Topic/Topic";
import Category from "./Category/Category";


function Main({
  Obj,
  content,
  setWishCate,
  setWishCate2,
  wishCate2,
  setContent,
  wishCate,
  setWishlist,
  wishlist,
  save,
  setSave
}) {

  return(
    <main>
      <Category
        Obj={Obj}
        content={content}
        setContent={setContent}
      />
      <Topic
         Obj={Obj}
         content={content}
         wishCate={wishCate}
         setWishlist={setWishlist}
         wishlist={wishlist}
         save={save}
         setSave={setSave}
         setWishCate={setWishCate}
         setWishCate2={setWishCate2}
         wishCate2={wishCate2}
      />
    </main>
  )
}
export default Main