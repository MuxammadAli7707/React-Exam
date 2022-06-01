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
  setSave,
  storyText,
  name,
  lastName
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
         storyText={storyText}
         name={name}
         lastName={lastName}
      />
    </main>
  )
}
export default Main