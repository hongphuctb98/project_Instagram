import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchUsers } from "../../redux/userRedux";
import Swal from "sweetalert2";

function LoginPage({ setUserLogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, currentUser } = useSelector((state) => state.userRedux);
  const [error, setError] = useState({});
  console.log(currentUser);

  const [loginUser, setLoginUser] = useState({ userName: "", password: "" });
  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const validateErrors = {};

    if (!users.some((user) => user.userName === loginUser.userName)) {
      validateErrors.userNameErr = "Tên đăng nhập không đúng";
      setUserLogin(false);
    } else {
      if (users.some((user) => user.password !== loginUser.password)) {
        validateErrors.passwordErr = "Mật khẩu không đúng";
        setUserLogin(false);
      } else {
        //success
        if (
          users.find((user) => user.userName === loginUser.userName).isLogin
        ) {
          const user = users.find(
            (user) => user.userName === loginUser.userName
          );
          localStorage.setItem("userLogin", JSON.stringify(user.id));
          setUserLogin(true);
          navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Thất Bại",
            text: "Tài khoản của bạn đã bị khóa",
          });
        }
      }
    }

    setError(validateErrors);
  };

  const { userNameErr, passwordErr } = error;
  return (
    <div className="container">
      <div className="login">
        <div className="images d-none d-lg-block">
          <div className="frame">
            <img src="./images/home-phones.png" alt="picutre frame" />
          </div>
          <div className="sliders">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="./images/screenshot1.png"
                    className="d-block"
                    alt="screenshot1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/screenshot2.png"
                    className="d-block"
                    alt="screenshot2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/screenshot3.png"
                    className="d-block"
                    alt="screenshot3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/screenshot4.png"
                    className="d-block"
                    alt="screenshot4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="log-on border_insc">
            <div className="logo">
              <img src="./images/logo.png" alt="Instagram logo" />
            </div>
            <form onSubmit={handleSubmitLogin}>
              <div>
                <input
                  type="text"
                  name="userName"
                  value={loginUser.userName}
                  onChange={handleChange}
                  id="userName"
                  placeholder="userName"
                />
                {userNameErr && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 4px 15px",
                    }}
                  >
                    {userNameErr}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={loginUser.password}
                  onChange={handleChange}
                  placeholder="password"
                />
                {passwordErr && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 4px 15px",
                    }}
                  >
                    {passwordErr}
                  </p>
                )}
              </div>
              <button className="log_btn" type="submit">
                Log in
              </button>
            </form>

            <div className="other-ways">
              <div className="seperator">
                <span className="ligne" />
                <span className="ou">OR</span>
                <span className="ligne" />
              </div>
              <div className="facebook-connection">
                <a href="#">
                  <img src="./images/facebook.png" alt="facebook icon" />
                  Log in with Facebook
                </a>
              </div>
              <div className="forget-password">
                <a href="#">Forgot password?</a>
              </div>
            </div>
          </div>
          <div className="sing-up border_insc">
            <p>
              Don't have an account?
              <NavLink to="/register">Sign up</NavLink>
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

export default LoginPage;
