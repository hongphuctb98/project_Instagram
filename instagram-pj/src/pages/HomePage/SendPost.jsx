import React from "react";

function SendPost() {
  return (
    <div
      className="modal fade"
      id="send_message_modal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Share
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="send">
              <div className="search_person">
                <p>To:</p>
                <input type="text" placeholder="Search" />
              </div>
              <p>Suggested</p>
              <div className="poeple">
                <div className="person">
                  <div className="d-flex">
                    <div className="img">
                      <img src="./images/profile_img.jpg" alt="" />
                    </div>
                    <div className="content">
                      <div className="person">
                        <h4>namePerson</h4>
                        <span>zim ess</span>
                      </div>
                    </div>
                  </div>
                  <div className="circle">
                    <span />
                  </div>
                </div>
              </div>
              <div className="person">
                <div className="d-flex">
                  <div className="img">
                    <img src="./images/profile_img.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="person">
                      <h4>namePerson</h4>
                      <span>zim ess</span>
                    </div>
                  </div>
                </div>
                <div className="circle">
                  <span />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendPost;
