import React from "react";

function MessagesPage() {
  return (
    <div id="message">
      <div className="message_container">
        <div className="persons">
          <div className="account_name">
            <p>Minato</p>
            <p className="search">
              <img src="./images/edit.png" alt="edit" />
            </p>
          </div>
          <div className="account_message">
            <div className="desc">
              <p>Messages</p>
              <p>
                <a href="#">3 requests</a>
              </p>
            </div>
            <div className="cart">
              <div>
                <div className="img">
                  <img src="./images/profile_img.jpg" alt="" />
                </div>
                <div className="info">
                  <p className="name">Minato</p>
                </div>
              </div>
            </div>
            <div className="cart">
              <div>
                <div className="img">
                  <img src="./images/profile_img.jpg" alt="" />
                </div>
                <div className="info">
                  <p className="name">Minato</p>
                </div>
              </div>
            </div>
            <div className="cart">
              <div>
                <div className="img">
                  <img src="./images/profile_img.jpg" alt="" />
                </div>
                <div className="info">
                  <p className="name">Minato</p>
                </div>
              </div>
            </div>
            <div className="cart">
              <div>
                <div className="img">
                  <img src="./images/profile_img.jpg" alt="" />
                </div>
                <div className="info">
                  <p className="name">Minato</p>
                </div>
              </div>
            </div>
            <div className="cart">
              <div>
                <div className="img">
                  <img src="./images/profile_img.jpg" alt="" />
                </div>
                <div className="info">
                  <p className="name">Minato</p>
                </div>
              </div>
            </div>
            <div className="cart">
              <div>
                <div className="img">
                  <img src="./images/profile_img.jpg" alt="" />
                </div>
                <div className="info">
                  <p className="name">Minato</p>
                </div>
              </div>
            </div>
            <div className="cart">
              <div>
                <div className="img">
                  <img src="./images/profile_img.jpg" alt="" />
                </div>
                <div className="info">
                  <p className="name">Minato</p>
                </div>
              </div>
            </div>
            <div className="cart">
              <div>
                <div className="img">
                  <img src="./images/profile_img.jpg" alt="" />
                </div>
                <div className="info">
                  <p className="name">Minato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="message">
          <div className="options">
            <div className="cart">
              <div>
                <div className="img">
                  <img src="./images/profile_img.jpg" alt="" />
                </div>
                <div className="info">
                  <p className="name">Minato</p>
                </div>
              </div>
            </div>
            <div className="other">
              <a href="#">
                <img src="./images/telephone.png" alt="call" />
              </a>
              <a href="#">
                <img src="./images/video_call.png" alt="video call" />
              </a>
            </div>
          </div>
          <div className="content">
            <div className="my_message">
              <p className="p_message">hello how are you?</p>
            </div>
            <div className="response_message">
              <p className="p_message">hi! i'm fine and you?</p>
            </div>
            <div className="my_message">
              <p className="p_message">I'm good </p>
            </div>
            <div className="response_message">
              <p className="p_message">I'll come tomorrow</p>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <form className="border rounded-pill d-flex  align-items-center column-gap-2">
              <i className="fa-regular fa-face-smile-wink fs-4"></i>
              <input
                type="text"
                id="emoji"
                placeholder="write your email"
                className=" flex-grow-1 border-0"
              />
              <div className="d-flex ">
                <i className="fa-solid fa-microphone  fs-4 ms-2 "></i>
                <i className="fa-regular fa-image  fs-4 ms-2 "></i>
                <i className="fa-regular fa-heart  fs-4 ms-2 "></i>
                <i className="fa-solid fa-share  fs-4 ms-2 "></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div className="post_page message_page">

    // </div>
  );
}

export default MessagesPage;
