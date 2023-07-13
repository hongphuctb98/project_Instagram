import React, { useEffect } from "react";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Post from "./Post";
import Stories from "./Stories";
import Followers from "./Followers";
import SendPost from "./SendPost";
import AddMessagesModal from "./AddMessagesModal";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="second_container">
        {/****** posts_container start ****** */}
        <div className="main_section">
          <div className="posts_container">
            <Stories />
            <Post />
          </div>
        </div>
        {/****** posts_container end ****** */}
        {/****** followers_container start ****** */}
        <Followers />
        {/****** followers_container end ****** */}
        <SendPost />
        {/* Modal for add messages*/}
        <AddMessagesModal />
      </div>
    </div>
  );
}

export default HomePage;
