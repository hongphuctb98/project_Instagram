import React from "react";

function AddMessagesModal() {
  return (
    <div
      className="modal fade"
      id="message_modal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Comments
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="comments">
              <div className="comment">
                <div className="d-flex">
                  <div className="img">
                    <img src="./images/profile_img.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="person">
                      <h4>namePerson</h4>
                      <span>3j</span>
                    </div>
                    <p>Wow amzing shot</p>
                    <div className="replay">
                      <button className="replay">replay</button>
                      <button className="translation">see translation</button>
                    </div>
                    <div className="answers">
                      <button className="see_comment">
                        <span className="hide_com">Hide all responses</span>
                        <span className="show_c">
                          {" "}
                          <span className="line" /> See the <span> 1</span>{" "}
                          answers
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="like">
                  <img className="not_loved" src="./images/love.png" alt="" />
                  <img className="loved" src="./images/heart.png" alt="" />
                  <p> 55</p>
                </div>
              </div>
              <div className="responses">
                <div className="response comment">
                  <div className="d-flex">
                    <div className="img">
                      <img src="./images/profile_img.jpg" alt="" />
                    </div>
                    <div className="content">
                      <div className="person">
                        <h4>namePerson</h4>
                        <span>3j</span>
                      </div>
                      <p>Wow amzing shot</p>
                      <div className="replay">
                        <button>replay</button>
                        <button>see translation</button>
                      </div>
                    </div>
                  </div>
                  <div className="like">
                    <img className="not_loved" src="./images/love.png" alt="" />
                    <img className="loved" src="./images/heart.png" alt="" />
                    <p> 55</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <form method="post">
              <div className="input">
                <img src="./images/profile_img.jpg" alt="" />
                <input
                  type="text"
                  id="emoji_comment"
                  placeholder="Add a comment..."
                />
              </div>
              {/* <div class="emogi">
                  <img src="./images/emogi.png" alt="">
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMessagesModal;
