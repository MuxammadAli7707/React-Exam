import React from "react";
import Aside from "../Aside/Aside";
import Nav from "../Nav/Nav";
function Note() {
  return (
    <div className="container d-flex justify-content-between">
      <Nav />
      <div className="note">
        <h1 className="note__title">Notifications</h1>

        <div className="note__box">
          <p className="note__text">All</p>
          <p className="note__texting">Responses</p>
        </div>
        <div className="note__inner">
          <p className="note__texting">You're all caught up.</p>
          <p className="note__stat">Your stats</p>
        </div>
      </div>
      <Aside />
    </div>
  );
}

export default Note;
