import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import { fetchUser } from "../../redux/userRedux";
import { useParams } from "react-router-dom";

function ProfilePages() {
  const { currentUser, users } = useSelector((state) => state.userRedux);
  const { posts } = useSelector((state) => state.postRedux);
  const disptach = useDispatch();
  useEffect(() => {
    disptach(fetchUser());
  }, []);
  const param = useParams();
  const { userName, avatarURL, email, name, id } =
    +param.id > 0 ? users.find((user) => user.id === +param.id) : currentUser;

  return (
    <div className="profile_container">
      <div className="profile_info">
        <div className="cart">
          <div className="img">
            <img src={avatarURL} alt="" width={150} height={150} />
          </div>
          <div className="info">
            <p className="name">
              {userName}
              <button
                className="edit_profile"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Edit profile
              </button>
            </p>
            <div className="general_info">
              <p>
                <span>1</span> post
              </p>
              <p>
                <span>177</span> followers
              </p>
              <p>
                <span>137</span> following
              </p>
            </div>
            <p className="nick_name">{name}</p>
            <p className="desc">
              I'am an engineering student <br />
              ENSAO
            </p>
          </div>
        </div>
      </div>
      <div className="highlights">
        <div className="highlight">
          <div className="img">
            <img src={avatarURL} alt="" height={87} />
          </div>
          <p>conseils</p>
        </div>
        <div className="highlight highlight_add">
          <div className="img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/neat-environs-338109.appspot.com/o/plus.png?alt=media&token=1badc5a0-5aa9-4580-a872-1c09e7f29327"
              alt=""
              height={87}
            />
          </div>
          <p>New</p>
        </div>
      </div>
      <hr />
      <div className="posts_profile">
        <ul
          className="nav-pills w-100 d-flex justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item mx-2" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/neat-environs-338109.appspot.com/o/feed.png?alt=media&token=67f4f24a-0f81-4c29-99d9-d41439cd0f0b"
                alt="posts"
              />
              POSTS
            </button>
          </li>
          <li className="nav-item mx-2" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/neat-environs-338109.appspot.com/o/save-instagram.png?alt=media&token=e657894b-0f43-4391-b4ed-80503a33a4d5"
                alt="saved posts"
              />
              SAVED
            </button>
          </li>
          <li className="nav-item mx-2" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/neat-environs-338109.appspot.com/o/tagged.png?alt=media&token=b5ca70b7-1e35-42f0-919e-614d9e27af6a"
                alt="tagged posts"
              />
              TAGGED
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabIndex={0}
          >
            <div id="posts_sec" className="post">
              {posts
                .filter((post) => post.userId === id)
                .map((post) => (
                  <div className="item">
                    <img
                      className="img-fluid item_img"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex={0}
          >
            <div id="saved_sec" className="post">
              <div className="item">
                <img
                  className="img-fluid item_img"
                  src="https://i.ibb.co/6WvdZS9/account12.jpg"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  className="img-fluid item_img"
                  src="https://i.ibb.co/pJ8thst/account13.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabIndex={0}
          >
            <div id="tagged" className="post">
              <div className="item">
                <img
                  className="img-fluid item_img"
                  src="https://i.ibb.co/Zhc5hHp/account4.jpg"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  className="img-fluid item_img"
                  src="https://i.ibb.co/SPTNbJL/account5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit modal */}
      <EditProfile />
    </div>
  );
}

export default ProfilePages;
