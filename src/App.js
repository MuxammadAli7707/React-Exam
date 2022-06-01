import { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Adding from './components/Added/Adding';
import List from './components/Saving/List';
import BookmarkSaved from './components/Saving/Stories';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import TopicInfo from './components/Main/Topic/TopicInfo';
import SignIn from './components/Sign/Signin';
import SignUp from './components/Sign/Signup';
import Note from './components/Notification/Note';
import Follow from './components/Follow/Follow';
import Stories from './components/Saving/Stories';

function App() {
  let [name, setName] = useState()
  let [lastName, setLastName] = useState()
  let [phone, setPhone] = useState()
  let [mail, setMail] = useState()
  let [pass, setPass] = useState()

  let [wishlist, setWishlist] = useState(false)

  let [wishCate2, setWishCate2] = useState([])
  let [wishCate, setWishCate] = useState([])

  let [save, setSave] = useState([])

  return(
    <>

      <Routes>
        <Route path='/' element={<SignUp
          setName={setName}
          setLastName={setLastName}
          setPhone={setPhone}
          setMail={setMail}
          setPass={setPass}
        />} />
        <Route path='/signin' element={<SignIn />} />
        
        <Route path="/home" element={<Home
          wishCate={wishCate}
          setWishCate={setWishCate}
          setWishlist={setWishlist}
          wishlist={wishlist}
          save={save}
          setSave={setSave}
          setWishCate2={setWishCate2}
          wishCate2={wishCate2}
        />} />

        <Route path='note' element={<Note />} />
        <Route path='/follow' element={<Follow />} />
        
        <Route path="/list" element={<List
          setWishlist={setWishlist}
          wishlist={wishlist}
          setWishCate={setWishCate}
          wishCate={wishCate}
          setWishCate2={setWishCate2}
          wishCate2={wishCate2}
          save={save}
          setSave={setSave}
        />} />
          {/* <Route path="/cinfo" element={<TopicInfo />} /> */}
          <Route path="/info/:id" element={<TopicInfo />} />
          
          <Route path="/stories" element={<Stories
            save={save}
            setSave={setSave}
          />} />

          <Route path='/add' element={<Adding />} />
      </Routes>
    </>

  )}

export default App;
