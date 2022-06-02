import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

let count = 100;
function Adding({storyText, setStoryText, emptyStory, setEmptyStory}) {

  let [title, setTitle] = useState('')

  let titleHandler = (e) => {
    setTitle(e.target.value)
  }

  const textAreaHandle = (e) =>{
    setEmptyStory(e.target.value)
  }
  
  const publishHandler = () =>{
    setStoryText([
      ...storyText, {
        text: emptyStory,
        title: title,
        id: count
      }
    ])
    setEmptyStory('')
    count++
  }
 
  return (
    <div className='add'>
      <div className='add__main'>
        <div className='add__header'>
          <Link to='/home'>
          <img className='add__logo' src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="logo" />
          </Link>
          <p className='add__desc'>Draft</p>
        </div>
        <div className='add__info'>
          <Link to='/home'>
            <button onClick={publishHandler} className='add__link'>Publish</button>
          </Link>
            <button className='add__dots'>
              <i className='bx bx-dots-horizontal-rounded' ></i>
            </button>
            <button className='add__bell'><i className='bx bx-bell' ></i></button>
            <img className='add__user' src="https://logodix.com/logo/1070509.png" alt="user" />
        </div>
      </div>

        <div className="add__ball">
            <svg class="svgIcon-use" width="30" height="30">
              <path
                d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7"
                fill-Rule="evenodd"
              ></path>
            </svg>
          </div>
      <form className='add__form'>
      <input onChange={titleHandler} className="add__input" type="text" placeholder="Title" />
        <textarea onChange={textAreaHandle} value={emptyStory} placeholder='Text' className='add__inputing' cols="90" rows="100"></textarea> 
      </form>
    </div>
  );
}


export default Adding