import React from "react";

function NotificationPage() {
  return (
    <div
      id="notification"
      className="offcanvas offcanvas-start notification_section "
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      aria-labelledby="offcanvasNotification"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNotification">
          Notifications
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="notifications">
        <div className="notif follow_notif">
          <div className="cart">
            <div>
              <div className="img">
                <img src="./images/profile_img.jpg" alt="" />
              </div>
              <div className="info">
                <p className="name">
                  Minato
                  <span className="desc">started following you.</span>
                  <span className="time">2h</span>
                </p>
              </div>
            </div>
            <div className="follow_you">
              <button className="follow_text">Follow</button>
            </div>
          </div>
        </div>
        <div className="notif follow_notif">
          <div className="cart">
            <div>
              <div className="img">
                <img src="./images/profile_img.jpg" alt="" />
              </div>
              <div className="info">
                <p className="name">
                  Minato
                  <span className="desc">started following you.</span>
                  <span className="time">2h</span>
                </p>
              </div>
            </div>
            <div className="follow_you">
              <button className="follow_text">Follow</button>
            </div>
          </div>
        </div>
        <div className="notif story_notif">
          <div className="cart">
            <div>
              <div className="img">
                <img src="./images/profile_img.jpg" alt="" />
              </div>
              <div className="info">
                <div className="info">
                  <p className="name">
                    Minato
                    <span className="desc">liked your story.</span>
                    <span className="time">2d</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="story_like">
              <img src="./images/img2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="notif follow_notif">
          <div className="cart">
            <div>
              <div className="img">
                <img src="./images/profile_img.jpg" alt="" />
              </div>
              <div className="info">
                <p className="name">
                  Minato
                  <span className="desc">started following you.</span>
                  <span className="time">2h</span>
                </p>
              </div>
            </div>
            <div className="follow_you">
              <button className="follow_text">Follow</button>
            </div>
          </div>
        </div>
        <div className="notif story_notif">
          <div className="cart">
            <div>
              <div className="img">
                <img src="./images/profile_img.jpg" alt="" />
              </div>
              <div className="info">
                <div className="info">
                  <p className="name">
                    Minato
                    <span className="desc">liked your story.</span>
                    <span className="time">2d</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="story_like">
              <img src="./images/img2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="notif follow_notif">
          <div className="cart">
            <div>
              <div className="img">
                <img src="./images/profile_img.jpg" alt="" />
              </div>
              <div className="info">
                <p className="name">
                  Minato
                  <span className="desc">started following you.</span>
                  <span className="time">2h</span>
                </p>
              </div>
            </div>
            <div className="follow_you">
              <button className="follow_text">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;
