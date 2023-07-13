import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { createUser, fetchUsers } from "../../redux/userRedux";
import Swal from "sweetalert2";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.userRedux);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const [error, setError] = useState({});

  const [user, setUser] = useState({
    userId: uuidv4(),

    isLogin: true,
    email: "",
    name: "",
    userName: "",
    password: "",
    confirmPassword: "",
    followingId: [],
    followersId: [],
    avatarURL:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000",
    dateCreated: Date.now(),
  });

  const handleChangeInut = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();

    const { email, name, userName, password, confirmPassword } = user;
    const passRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const validationErrors = {};

    //email
    if (!email) {
      validationErrors.emailErr = "Email không được để trống";
    } else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
      validationErrors.emailErr = "Email không đúng định dạng";
    }
    //name
    if (!name) {
      validationErrors.nameErr = "Vui lòng nhập họ tên";
    }

    //username
    if (!userName) {
      validationErrors.userNameErr = "Vui lòng nhập username";
    } else if (users.find((user) => user.userName === userName)) {
      validationErrors.userNameErr = "userName đã tồn tại";
    }

    if (!password) {
      validationErrors.passwordError = "Vui lòng nhập mật khẩu";
    } else if (!passRegex.test(password)) {
      validationErrors.passwordError =
        "Mật khẩu phải có ít nhất 8 ký tự, ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt";
    }

    //confirmPassword
    if (confirmPassword !== password) {
      validationErrors.confirmPasswordErr = "Vui lòng xác nhận lại mật khẩu ";
    }

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      Swal.fire({
        icon: "success",
        title: "Đăng ký thành công",
        confirmButtonText: "Login start",
        confirmButtonColor: "#2ecc71",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      dispatch(createUser(user));
    }
  };

  const { email, name, userName, password, confirmPassword } = user;

  return (
    <div className="container">
      <div className="sign_up">
        <div className="content">
          <div className="log-on border_insc">
            <div className="logo">
              <img src="./images/logo.png" alt="Instagram logo" />
              <p>Sign up to see photos and videos from your friends.</p>
              <button className="btn log_fac">
                <a href="#">
                  <img src="./images/facebook_white.png" alt="facebook icon" />
                  Log in with Facebook
                </a>
              </button>
              <div className="seperator">
                <span className="ligne" />
                <span className="ou">OR</span>
                <span className="ligne" />
              </div>
            </div>
            <form action="" method="post" onSubmit={handleSubmitForm}>
              <div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChangeInut}
                  placeholder="email address"
                />
                {error.emailErr && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 4px 15px",
                    }}
                  >
                    {error.emailErr}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChangeInut}
                  placeholder="Full Name"
                />
                {error.nameErr && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 4px 15px",
                    }}
                  >
                    {error.nameErr}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={userName}
                  onChange={handleChangeInut}
                  placeholder="Username"
                />
                {error.userNameErr && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 4px 15px",
                    }}
                  >
                    {error.userNameErr}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChangeInut}
                  placeholder="password"
                />
                {error.passwordError && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 4px 15px",
                    }}
                  >
                    {error.passwordError}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChangeInut}
                  placeholder="confirmPassword"
                />
                {error.confirmPasswordErr && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 4px 15px",
                    }}
                  >
                    {error.confirmPasswordErr}
                  </p>
                )}
              </div>
              <div className="info">
                <p>
                  People who use our service may have uploaded your contact
                  information to Instagram.
                  <a href="#">Learn more</a>
                </p>
                <p>
                  By signing up, you agree to our
                  <a href="#">Terms, Privacy Policy and Cookies Policy.</a>
                </p>
              </div>
              <a>
                <button className="log_btn" type="submit">
                  Sign Up
                </button>
              </a>
            </form>
          </div>
          <div className="sing-in border_insc">
            <p>
              Have an account?
              <NavLink to="/login" style={{ cursor: "pointer" }}>
                Log in
              </NavLink>
            </p>
          </div>
          <div className="download">
            <p>Get the app.</p>
            <div>
              <img
                src="./images/google_play_icon.png"
                alt="download app from google play"
              />
              <img
                src="./images/microsoft-icon.png"
                alt="download app from microsoft"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
