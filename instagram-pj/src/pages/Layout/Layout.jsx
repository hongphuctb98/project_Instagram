import React, { useEffect, useState } from "react";
import Navsm from "./Navsm";
import Navxm from "./Navxm";
import NavsmBottm from "./NavsmBottm";
import Search from "./Search";
import CreateModel from "../CreateModel/CreateModel";
import NotificationPage from "../NotificationPage/NotificationPage";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, fetchUsers } from "../../redux/userRedux";

function Layout({ setUserLogin }) {
  const userId = JSON.parse(localStorage.getItem("userLogin"));
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch]);

  const { currentUser } = useSelector((state) => state.userRedux);

  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    setUserLogin(false);
    navigate("/login");
  };

  const { name, avatarURL, userName } = currentUser;

  return (
    <div>
      <div className="post_page">
        {/****** nav menu start ****** */}
        <div className="nav_menu">
          <div className="fix_top">
            {/* nav for big->medium screen */}
            <div className="nav">
              <div className="logo">
                <NavLink to="/">
                  <img
                    className="d-block d-lg-none small-logo"
                    src="./images/instagram.png"
                    alt="logo"
                  />
                  <img
                    className="d-none d-lg-block"
                    src="https://firebasestorage.googleapis.com/v0/b/minato-d26af.appspot.com/o/logo_menu.png?alt=media&token=783a383d-c0b4-4365-830b-7020eec7bb41"
                    alt="logo"
                  />
                </NavLink>
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <NavLink className="active" to="/">
                      <img src="./images/accueil.png" />
                      <span className="d-none d-lg-block ">Home</span>
                    </NavLink>
                  </li>
                  <li
                    id="search_icon"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#search"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    <NavLink href="#">
                      <img src="./images/search.png" />
                      <span className="d-none d-lg-block search">Search </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/explore">
                      <img src="./images/compass.png" />
                      <span className="d-none d-lg-block ">Explore</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/reels">
                      <img src="./images/video.png" />
                      <span className="d-none d-lg-block ">Reels</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/messages">
                      <img src="./images/send.png" />
                      <span className="d-none d-lg-block ">Messages</span>
                    </NavLink>
                  </li>
                  <li
                    className="notification_icon"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#notification"
                    aria-controls="offcanvasNotification"
                  >
                    <a>
                      <img src="./images/love.png" />
                      <span className="d-none d-lg-block ">Notifications</span>
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="modal" data-bs-target="#create_modal">
                      <img src="./images/tab.png" />
                      <span className="d-none d-lg-block ">Create</span>
                    </a>
                  </li>
                  <li>
                    <NavLink to="/profile">
                      <img
                        className="circle story"
                        src={avatarURL}
                        width={30}
                        height={30}
                      />
                      <span className="d-none d-lg-block ">{userName}</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="more">
                <div className="btn-group dropup">
                  <button
                    type="button"
                    className="btn dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="./images/menu.png" />
                    <span className="d-none d-lg-block ">More</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <span>Settings</span>
                        <img src="./images/reglage.png" />
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span>Your activity</span>
                        <img src="./images/history.png" />
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span>Saved</span>
                        <img src="./images/save-instagram.png" />
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span>Switch apperance</span>
                        <img src="./images/moon.png" />
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span>Report a problem</span>
                        <img src="./images/problem.png" />
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item bold_border" href="#">
                        <span>Switch accounts</span>
                      </a>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        // to="/login"
                        onClick={handleLogout}
                      >
                        <span>Log out</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                {/*  */}
              </div>
            </div>
            {/* nav for small screen  */}
            <Navsm />
            {/* nav for ex-small screen  */}
            <Navxm />
          </div>
          {/* menu in the botton for smal screen  */}
          <NavsmBottm />
        </div>

        {/* main pages start */}

        <Outlet />

        {/* main pages end */}

        {/* Modal search */}
        <Search />
        {/* Modal NotificationPage*/}
        <NotificationPage />
        {/*Create model*/}
        <CreateModel />
      </div>
    </div>
  );
}

export default Layout;
