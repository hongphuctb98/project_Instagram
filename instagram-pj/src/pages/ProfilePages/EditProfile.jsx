import React, { useRef, useState } from "react";
import "./editprofile.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/userRedux";
import axios from "axios";

function EditProfile() {
  const { currentUser, status, users } = useSelector(
    (state) => state.userRedux
  );
  const dispatch = useDispatch();

  const [editUser, setEditUser] = useState({
    name: currentUser.name,
    email: currentUser.email,
    phoneNumber: "",
    avatarURL: currentUser.avatarURL,
  });

  const handleUpdate = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...currentUser,
      ...editUser,
    };
    dispatch(
      updateUser({ uploadId: currentUser.id, updatedUser: updatedUser })
    );
  };

  const { name, email, userName, avatarURL } = currentUser;

  return (
    <div
      className=" modal modal-lg fade "
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Edit Profile
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body ">
            <div className="  fadecontainer rounded bg-white ">
              <form className="row edit-section" onSubmit={handleSubmitUpdate}>
                <div className="col-md-4 border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 ">
                    <div className="mb-3">
                      <img
                        className="rounded-circle "
                        src={avatarURL}
                        width={125}
                        height={125}
                      />
                    </div>

                    <input type="file" className="d-none" name="avatarURL" />
                    <button className="btn btn-outline-primary ">
                      Thay đổi ảnh
                    </button>
                    <span className="font-weight-bold">{name}</span>
                    <span>{userName}</span>
                    <span className="text-black-50">{email}</span>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="p-3">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex flex-row align-items-center back">
                        <i className="fa fa-long-arrow-left mr-1 mb-1" />
                        <h6>Back to home</h6>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="name"
                          name="name"
                          defaultValue={name}
                          onChange={handleUpdate}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          value={userName}
                          placeholder="user-name"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          defaultValue={email}
                          onChange={handleUpdate}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="phoneNumber"
                          defaultValue={+19685969668}
                          placeholder="Phone number"
                          onChange={handleUpdate}
                        />
                      </div>

                      <div className="col-12 mt-3">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={avatarURL}
                          placeholder="avatarURL"
                          name="avatarURL"
                          onChange={handleUpdate}
                        />
                      </div>
                    </div>

                    <div className="mt-5 text-right">
                      <button
                        className="btn btn-primary profile-button"
                        type="submit"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Save Profile
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
