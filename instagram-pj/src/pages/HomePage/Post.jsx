import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, uploadAll, uploadPost } from "../../redux/postRedux";
import { fetchUsers } from "../../redux/userRedux";
import { createComment, fetchComments } from "../../redux/commentsRedux";

function Post() {
  const post_data = [
    [
      "https://i.ibb.co/3S1hjKR/account1.jpg",
      "zineb",
      45,
      "https://i.ibb.co/Jqh3rHv/img1.jpg",
      150,
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non minus cumque, recusandae hic soluta harum aut nulla... ",
      2,
    ],
    [
      "https://i.ibb.co/8x4Hqdw/account2.jpg",
      "ikram",
      15,
      "https://i.ibb.co/2ZxBFVp/img2.jpg",
      150,
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non minus cumque, recusandae hic soluta harum aut nulla... ",
      2,
    ],
    [
      "https://i.ibb.co/CWbynB2/account3-1.jpg",
      "amina",
      5,
      "https://i.ibb.co/5vQt677/img3.jpg",
      350,
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non minus cumque, recusandae hic soluta harum aut nulla... ",
      2,
    ],
    [
      "https://i.ibb.co/19R19st/account4.jpg",
      "amal",
      15,
      "https://i.ibb.co/FVVxR6x/img.jpg",
      150,
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non minus cumque, recusandae hic soluta harum aut nulla... ",
      2,
    ],
    [
      "https://i.ibb.co/x68ZFKP/account6.jpg",
      "amine",
      15,
      "https://i.ibb.co/r7xBR56/img5.jpg",
      150,
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non minus cumque, recusandae hic soluta harum aut nulla... ",
      2,
    ],
  ];

  // const commentTime = new Date(1689007442882);
  // const currentTime = new Date();

  // const timeDiff = currentTime - commentTime;
  // const minutesDiff = Math.floor(timeDiff / 1000 / 60);

  const { posts } = useSelector((state) => state.postRedux);
  const { currentUser, users } = useSelector((state) => state.userRedux);
  const { comments } = useSelector((state) => state.commentsRedux);
  const [like, setLike] = useState(false);
  const [likePost, setLikePost] = useState([]);
  const [flag, setFlag] = useState(false);
  const toggleFlag = () => {
    setFlag(!flag);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
    dispatch(fetchUsers());
    dispatch(fetchComments());
  }, [dispatch]);
  const [commentFrom, setCommentFrom] = useState({
    userId: "",
    postId: "",
    content: "",
    createdAt: Date.now(),
  });
  const searchUser = (arr, id) => {
    const user = arr.find((user) => user.id === id);
    return user ? user : { avatarURL: "", userName: "" };
  };

  const searchPost = (arr, id) => {
    const user = arr.find((post) => user.id === id);
    return user ? user : { avatarURL: "", userName: "" };
  };

  const searchCom = (arr, id) => {
    const com = arr.filter((ele) => ele.postId === id);
    return com;
  };
  const handleChangeComment = (e, id) => {
    setCommentFrom({
      ...commentFrom,
      content: e.target.value,
      postId: id,
      userId: currentUser.id,
    });
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(createComment(commentFrom));
    setCommentFrom({
      userId: "",
      postId: "",
      content: "",

      createdAt: Date.now(),
    });
  };

  const handleDeleteComment = (id) => {
    console.log(id);
  };

  const handleLike = (id) => {
    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex !== -1) {
      const updatedPosts = [...posts];
      const post = { ...updatedPosts[postIndex] };
      if (!post.likeUserId.includes(currentUser.id)) {
        post.likeUserId = [...post.likeUserId, currentUser.id];
        post.like++;
      } else {
        post.likeUserId = post.likeUserId.filter((id) => id !== currentUser.id);
        post.like--;
      }
      updatedPosts[postIndex] = post;
      console.log(post);
      dispatch(uploadPost({ post, id: post.id }));
    }
  };

  const TextTruncate = ({ text, maxLength }) => {
    if (text.length <= maxLength) {
      return <span>{text}</span>;
    } else {
      const truncatedText = text.substring(0, maxLength) + "...";
      return <span>{truncatedText}</span>;
    }
  };

  // console.log(
  //   posts.length > 0 ? posts.sort((a, b) => b.createdAt - a.createdAt) : []
  // );

  console.log(posts);

  return (
    <div className="posts">
      {[...posts]
        .sort((a, b) => b.createdAt - a.createdAt)
        .map((post, index) => (
          <div className="post my-5" key={index}>
            <div className="info">
              <div className="person">
                <img
                  src={searchUser(users, post.userId).avatarURL}
                  width={50}
                  height={50}
                />
                <a href="#">{searchUser(users, post.userId).userName}</a>
              </div>
              <div className="more">
                <img src="./images/show_more.png" alt="show more" />
              </div>
            </div>
            <div className="image">
              <img src={post.imageUrl} />
            </div>
            <div className="desc">
              <div className="icons">
                <div className="icon_left d-flex">
                  <div className="like" onClick={() => handleLike(post.id)}>
                    <img
                      className="not_loved"
                      src={
                        post.likeUserId.includes(currentUser.id)
                          ? "./images/heart.png"
                          : "./images/love.png"
                      }
                    />
                  </div>
                  <div className="chat">
                    <button
                      type="button"
                      className="btn p-0"
                      data-bs-toggle="modal"
                      data-bs-target="#message_modal"
                    >
                      <img src="./images/bubble-chat.png" />
                    </button>
                  </div>
                  <div className="send">
                    <button
                      type="button"
                      className="btn p-0"
                      data-bs-toggle="modal"
                      data-bs-target="#send_message_modal"
                    >
                      <img src="./images/send.png" />
                    </button>
                  </div>
                </div>
                <div className="save not_saved">
                  <img className="hide saved" src="./images/save_black.png" />
                  <img
                    className="not_saved"
                    src="./images/save-instagram.png"
                  />
                </div>
              </div>
              <div className="liked">
                {post.likeUserId.length > 0 ? (
                  <React.Fragment>
                    {searchUser(
                      users,
                      post.likeUserId[post.likeUserId.length - 1]
                    ).userName ? (
                      <React.Fragment>
                        <a className="bold">
                          {searchUser(users, post.likeUserId[0]).userName}
                        </a>
                        {post.likeUserId.length > 1 ? (
                          <React.Fragment>
                            {" và "}
                            <a className="bold">
                              {post.likeUserId.length - 1} người đã thích
                            </a>
                          </React.Fragment>
                        ) : (
                          " đã thích"
                        )}
                      </React.Fragment>
                    ) : (
                      <a className="bold">{post.likeUserId.length} đã thích</a>
                    )}
                  </React.Fragment>
                ) : (
                  <a className="bold">{post.like} đã thích</a>
                )}
              </div>
              <span className="title " style={{ fontWeight: "bold" }}>
                {searchUser(users, post.userId).userName}{" "}
              </span>
              <span className="content">{post.content} </span>

              <div className="post_desc">
                {searchCom(comments, post.id).map((com) => (
                  <div key={com.id} className="d-flex mt-3 ">
                    <div className="person">
                      <img
                        src={searchUser(users, com.userId).avatarURL}
                        width={32}
                        height={32}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="mx-2">
                      <div
                        className="px-2 rounded-3"
                        style={{ backgroundColor: "#e9ecef" }}
                      >
                        <a className="bold " style={{ cursor: "pointer" }}>
                          {searchUser(users, com.userId).userName}
                        </a>
                        <div className="d-flex justify-content-between">
                          {com.content}
                          <img
                            src="./images/show_more.png"
                            alt="show more"
                            width={15}
                            height={15}
                            style={{ cursor: "pointer", marginLeft: "15px" }}
                            onClick={() => handleDeleteComment(com.id)}
                          />
                        </div>
                      </div>

                      <div
                        className="text-body-tertiary text-center"
                        style={{ fontSize: "12px" }}
                      >
                        <span style={{ cursor: "pointer" }}>reply</span>
                        <span style={{ cursor: "pointer" }} className="ms-3">
                          see translation
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <p className="my-0">
                  <a className="gray" style={{ cursor: "pointer" }}>
                    View all{" "}
                    {comments.filter((com) => com.postId == post.id).length}{" "}
                    comments
                  </a>
                </p>
                <form
                  action=""
                  className="d-flex column-gap-2 border-bottom"
                  onSubmit={handleSubmitComment}
                >
                  <input
                    type="text"
                    placeholder="Add a comments..."
                    value={commentFrom.content}
                    style={{
                      width: "100%",
                      padding: "8px",
                      outline: "none",
                    }}
                    onChange={(e) => handleChangeComment(e, post.id)}
                    className=""
                  />

                  <button type="submit " className="btn">
                    <i class="fa-regular fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Post;
