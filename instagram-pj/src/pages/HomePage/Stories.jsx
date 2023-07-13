import React, { useEffect, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import $ from "jquery";
import { useSelector } from "react-redux";

function Stories() {
  const image_profile = [
    ["https://i.ibb.co/3S1hjKR/account1.jpg", "zineb"],
    ["https://i.ibb.co/kD6tj9T/account2.jpg", "ikram"],
    ["https://i.ibb.co/cx69NJL/account3-1.jpg", "amina"],
    ["https://i.ibb.co/Zhc5hHp/account4.jpg", "amal"],
    ["https://i.ibb.co/SPTNbJL/account5.jpg", "amine"],
    ["https://i.ibb.co/nj8pPqZ/account6.jpg", "loy"],
    ["https://i.ibb.co/vkXPdxN/account7.jpg", "loy"],
  ];
  const storyContainerRef = useRef(null);
  const { users } = useSelector((state) => state.userRedux);

  useEffect(() => {
    if (storyContainerRef.current) {
      $(storyContainerRef.current).owlCarousel();
    }
  }, []);
  return (
    <div>
      {" "}
      <div className="stories">
        <OwlCarousel
          className="owl-carousel items"
          loop
          margin={5}
          responsiveClass
          responsive={{
            0: {
              items: 5,
              nav: true,
            },
            500: {
              items: 7,
              nav: false,
            },
          }}
        >
          {users.map((user, index) => (
            <div key={index} className="item_s" style={{ cursor: "pointer" }}>
              <div className="img-wrap">
                <img src={user.avatarURL} />
              </div>
              <p>{user.userName}</p>
            </div>
          ))}
          {image_profile.map((image, index) => (
            <div key={index} className="item_s">
              <div className="img-wrap">
                <img src={image[0]} alt={image[1]} />
              </div>
              <p>{image[1]}</p>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Stories;
