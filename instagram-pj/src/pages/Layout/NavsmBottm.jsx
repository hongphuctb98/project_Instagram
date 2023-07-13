import React from "react";

function NavsmBottm() {
  return (
    <div className="nav_bottom">
      <a href="./home.html">
        <img src="./images/accueil.png" />
      </a>
      <a href="./explore.html">
        <img src="./images/compass.png" />
      </a>
      <a href="./reels.html">
        <img src="./images/video.png" />
      </a>
      <a href="#" data-bs-toggle="modal" data-bs-target="#create_modal">
        <img src="./images/tab.png" />
      </a>
      <a href="profile.html">
        <img className="circle story" src="./images/profile_img.jpg" />
      </a>
    </div>
  );
}

export default NavsmBottm;
