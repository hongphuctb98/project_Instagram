import React, { useState } from "react";
import { useSelector } from "react-redux";

function Search() {
  const { users, currentUser } = useSelector((state) => state.userRedux);
  const { posts } = useSelector((state) => state.postRedux);
  const [searchText, setSearchText] = useState("");
  const [searchUser, setSearcUser] = useState([]);
  const [searchPost, setSearchPost] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearcUser(
      users.filter((user) =>
        user.userName.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setSearchPost(
      posts.filter((post) =>
        post.content.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };
  console.log(searchPost);
  return (
    <div
      id="search"
      className="offcanvas offcanvas-start search_section "
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Search
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
      <div className="find">
        {searchUser.length > 0 && (
          <div className="desc">
            <h5>Người dùng</h5>
            <p>
              <a href="#">Clear all</a>
            </p>
          </div>
        )}
        {searchUser &&
          searchUser.map((user) => (
            <>
              <div className="account">
                <div className="cart">
                  <div>
                    <div className="img">
                      <img src={user.avatarURL} alt="" />
                    </div>
                    <div className="info">
                      <p className="name">{user.userName}</p>
                      <p className="second_name">{user.name}</p>
                    </div>
                  </div>
                  <div className="clear">
                    <a href="#">X</a>
                  </div>
                </div>
              </div>
            </>
          ))}

        {searchPost.length > 0 && (
          <div className="desc">
            <h5>Bài viết</h5>
            <p>
              <a href="#">Clear all</a>
            </p>
          </div>
        )}
        {searchPost &&
          searchPost.map((post) => (
            <>
              <div className="account">
                <div className="cart">
                  <div>
                    <div className="img">
                      <img src="./images/profile_img.jpg" alt="" />
                    </div>
                    <div className="info">
                      <p className="name">{post.content}</p>
                    </div>
                  </div>
                  <div className="clear">
                    <a href="#">X</a>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
    // <div id="search ">
    //   <h2>Search</h2>
    //   <form method="post">
    //     <input type="text" placeholder="Search" />
    //   </form>
    //   <div className="find">
    //     <div className="desc">
    //       <h4>Recent</h4>
    //       <p>
    //         <a href="#">Clear all</a>
    //       </p>
    //     </div>
    //     <div className="account">
    //       <div className="cart">
    //         <div>
    //           <div className="img">
    //             <img src="./images/profile_img.jpg" alt="" />
    //           </div>
    //           <div className="info">
    //             <p className="name">Minato</p>
    //             <p className="second_name">Zim Ess</p>
    //           </div>
    //         </div>
    //         <div className="clear">
    //           <a href="#">X</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Search;
