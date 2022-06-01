import React, { useState } from "react";
import Comments from "./Comments";
// import Comments from "./Commeents";
// import Replay from "./Replay";

export default function Comment({
  block,
  setBlock,
  item
}) {

  let cancelHandler = (e) => {
    setBlock(! block)
  }

  let [newcomment, setNewcomment] = useState(item.commentArr)
  let [inputComment, setInputComment] = useState('')

  let commentHandler = (e) => {
    setInputComment(e.target.value)
  }

  let addCommentHandler = () => {
    setNewcomment([
      {
        userAvatar: "https://picsum.photos/id/23/60",
        commentName: "UserName",
        commentDate: "1 min ago",
        commentText: inputComment,
        commentClub: "0",
      }, ...newcomment
    ]);
    setInputComment('')
  }


  return(
    <section className={`comment ${block ? 'nonee' : 'blockk'}`}>
      <div className="comment__main">
        <div className="d-flex align-items-center justify-content-between mb-2">
        <h2 className="comment__title">Responses ({item.comment})</h2>
        <button onClick={cancelHandler} className="comment__xbtn"><i className='bx bx-x'></i></button>
        </div>
        <div className="comment__inputbox">
          <div className="d-flex align-items-center mb-3">
            <div className="comment__avabox">
              <img className="comment__ava" src="https://picsum.photos/id/44/60" alt="ava" />
            </div>
            <h3 className="comment__name">UserName</h3>
          </div>

          <textarea onChange={commentHandler} className="comment__input" value={inputComment} name="comment" id="" cols="30" rows="10">
          </textarea>

          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="pe-2">
                <svg
                  width="21"
                  height="21"><path
                  d="M10.3 18H4.4l.1-.9.8-.12c.55-.11.78-.23.78-.45V5.37c0-.22-.11-.34-.9-.45H4.5l-.11-.9h6.25c4.02 0 5.58 1.24 5.58 3.14 0 1.9-1.78 3.12-3.79 3.46v.11c2.7.34 4.25 1.56 4.25 3.57 0 2.35-2 3.7-6.37 3.7h.02-.02zM9.98 5.02h-1v5.47h1.23c1.79 0 2.79-1.23 2.79-2.68 0-1.69-1-2.8-3-2.8v.01zm-.22 6.36h-.78V17l1.22.22h.22c1.67 0 3.01-1 3.01-2.8 0-2.11-1.56-3-3.69-3h.02z"
                  fillRule="evenodd"></path></svg>
              </span>
              <span>
                <svg
                 width="21"
                 height="21"><path
                 d="M9.85 18.04c-.54 0-2.03-.64-1.92-.85L9.95 9.5l-.64-.22-1.38 1.5-.43-.43c.53-1.17 1.7-2.67 2.77-2.67.54 0 2.24.54 2.14.86l-2.14 7.78.54.22 1.6-1.07.42.43c-.64 1.06-1.92 2.13-2.98 2.13zm2.34-11.73c-.96 0-1.38-.64-1.38-1.39 0-1.07.74-1.92 1.49-1.92.85 0 1.39.64 1.39 1.5-.11 1.06-.75 1.8-1.5 1.8z"
                 fillRule="evenodd"></path></svg>
              </span>
            </div>

            <div className="d-flex align-items-center">
              <button className="comment__cbtn">Cancel</button>
              <button onClick={addCommentHandler} className="comment__rbtn">Respond</button>
            </div>
          </div>
        </div>

        <div className="comment__checkbox">
          <label className="mb-5" htmlFor="">
            <input type="checkbox" name="" id="" />
            <span className="ms-2">Also publish to my profile</span>
          </label>
          <h3 className="comment__most mb-2">Most Relevant</h3>
        </div>

      <ul className="comment__list">
        {
          newcomment.map((items, key) => {
            return (
              <Comments
                key={key+566}
                newcomment={newcomment}
                com={items}
                item={item}
              />

            )
          })
        }
      </ul>
      </div>
    </section>
  )
}