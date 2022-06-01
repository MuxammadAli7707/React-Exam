import React from "react";
import { useLocation } from "react-router-dom";
import Aside from "../../Aside/Aside";
import { Object } from "../../Object/Object";
import Nav from "../../Nav/Nav";

function TopicInfo() {

  let location = useLocation();

  return(
    <div className="container d-flex justify-content-between">
        <Nav />
         <div className="about col-5">
           {
             Object.map((item, id) => {
               if(item.id === +location.pathname.split("/").at(-1)) {
                return(
                  <div id={id + 1} className="about__main">
                  <div className="d-flex align-items-center justify-content-between mb-5">
                    <div className="d-flex align-items-center">
                      <div className="about__avatarbox">
                        <img className="about__avatar" src={item.avatar} alt={item.name} />
                      </div>
                      <div className="ms-3">
                        <h2 className="about__name">{item.name}</h2>
                        <div className="d-flex about__info">
                          <span className="me-1">{item.data}</span> ·
                          <span className="ms-1 me-1">{item.read}</span> ·
                          <span className="ms-1 about__listen d-flex align-items-center"><i className='bx bx-play-circle me-2'></i> Listen</span>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                          <div className="about__icons d-flex align-items-center">
                            <i className='bx bxl-twitter about__icon'></i>
                            <i className='bx bxl-facebook-circle about__icon' ></i>
                            <i className='bx bxl-linkedin-square about__icon' ></i>
                            <i className='bx bx-link about__icon' ></i>
                          </div>
                          <div className="d-flex align-items-center">
                          <i className='bx bx-bookmark-alt-plus about__saves' ></i>
                          <i className='bx bx-dots-horizontal-rounded about__icon' ></i>
                          </div>
                        </div>
                  </div>

                  <div className="about__box">
                      <h2 className="about__title">{item.title}</h2>
                      <div className="about__imgbox">
                        <img className="about__img" src={item.img} alt={item.name} />
                      </div>
                      <p className="about__text">
                        {item.text}
                      </p>
                    </div>
                </div>
                )
               }
             })
           }

         </div>
        <Aside />
    </div>
  )
}
export default TopicInfo