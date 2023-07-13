import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/postRedux";

function CreateModel() {
  const { currentUser } = useSelector((state) => state.userRedux);
  const { posts } = useSelector((state) => state.postRedux);
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    userId: "",
    content: "",
    like: 0,
    comments: [],
    likeUserId: [],
    imageUrl: "",
    createdAt: Date.now(),
  });
  useEffect(() => {
    setPost({ ...post, userId: currentUser.id });
  }, [currentUser]);

  const handleSubmitPost = (e) => {
    e.preventDefault();

    dispatch(createPost(post));
  };

  return (
    <div
      className="modal fade"
      id="create_modal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title w-100 fs-5 d-flex align-items-end justify-content-between"
              id="exampleModalLabel"
            >
              <span className="title_create">Create new post</span>
              <button className="next_btn_post btn_link" />
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body d-flex justify-content-around">
            <div>
              <img
                className="up_load"
                src={post.imageUrl ? post.imageUrl : "./images/upload.png"}
                alt="upload"
              />
            </div>
            {/* <button className="btn btn-primary btn_upload">
              select from your computer
              <form id="upload-form">
                <input
                  className="input_select"
                  type="file"
                  id="image-upload"
                  name="image-upload"
                />
              </form>
            </button> */}

            <form
              action=""
              style={{ width: "50%" }}
              onSubmit={handleSubmitPost}
            >
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Image Url
                </label>
                <input
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="image url"
                  name="imageUrl"
                  defaultValue={""}
                  onChange={(e) =>
                    setPost({ ...post, imageUrl: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Content
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                  name="content"
                  onChange={(e) =>
                    setPost({ ...post, content: e.target.value })
                  }
                />
              </div>
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Tải lên
              </button>
            </form>
            {/* <div id="image-container" className="hide_img"></div>
            <div id="image_description" className="hide_img">
              <div className="img_p" />
              <div className="description">
                <div className="cart">
                  <div>
                    <div className="img">
                      <img src="./images/profile_img.jpg" />
                    </div>
                    <div className="info">
                      <p className="name">Minato</p>
                    </div>
                  </div>
                </div>
                <form>
                  <textarea
                    type="text"
                    id="emoji_create"
                    placeholder="write your email"
                    defaultValue={""}
                  />
                </form>
              </div>
            </div>
            <div className="post_published hide_img">
              <img src="./images/uploaded_post.gif" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateModel;
