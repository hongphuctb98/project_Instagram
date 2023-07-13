import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Followers() {
  const { currentUser, users } = useSelector((state) => state.userRedux);
  const { userName, avatarURL, email, name } = currentUser;

  return (
    <div className="followers_container">
      <div>
        <div className="cart">
          <div>
            <NavLink
              className="img "
              style={{ cursor: "pointer" }}
              to="/profile"
            >
              <img src={avatarURL} alt="" height={56} />
            </NavLink>
            <div className="info ">
              <NavLink
                className="name fw-bold"
                style={{ cursor: "pointer", color: "black" }}
                to="/profile"
              >
                {userName}
              </NavLink>
              <p className="second_name ">{name}</p>
            </div>
          </div>
          <div className="switch">
            <a href="#">Switch</a>
          </div>
        </div>
        <div className="suggestions">
          <div className="title">
            <h4>Suggestions for you</h4>
            <a className="dark" href="#">
              See All
            </a>
          </div>
          {users
            .filter((user) => user.id !== currentUser.id)
            .map((user) => (
              <div className="cart" key={user.id}>
                <div>
                  <Link className="img" to={`/profile/${user.id}`}>
                    <img
                      src={user.avatarURL}
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                  <div className="info">
                    <p className="name fw-bold" style={{ cursor: "pointer" }}>
                      {user.userName}
                    </p>
                    <p className="second_name">{user.name}</p>
                  </div>
                </div>
                <div className="switch">
                  <button
                    className="follow_text"
                    href="#"
                    style={{ cursor: "pointer" }}
                  >
                    follow
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Followers;
