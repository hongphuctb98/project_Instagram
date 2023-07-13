import React from "react";

function Navxm() {
  return (
    <div className="nav_xm">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            className="logo"
            src="https://firebasestorage.googleapis.com/v0/b/minato-d26af.appspot.com/o/logo_menu.png?alt=media&token=783a383d-c0b4-4365-830b-7020eec7bb41"
          />
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              <span>Following</span>
              <img src="./images/add-friend.png" />
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <span>Favorites</span>
              <img src="./images/star.png" />
            </a>
          </li>
        </ul>
      </div>
      <div className="left">
        <img src="./images/send.png" />
        <a href="./notification.html">
          <img className="notification_icon" src="./images/love.png" />
        </a>
      </div>
    </div>
  );
}

export default Navxm;
