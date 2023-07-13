import React from "react";

function ReelsPage() {
  const reels_data = [
    [
      "./video/video1.mp4",
      "./images/profile_img.jpg",
      "zineb",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis...",
      "nameOfMusic",
      "casablanca",
      "55.9K",
      "555",
    ],
    [
      "./video/video2.mp4",
      "https://i.ibb.co/3S1hjKR/account1.jpg",
      "ikram",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis...",
      "nameOfMusic",
      "oujda",
      "35.9K",
      "75",
    ],
    [
      "./video/video3.mp4",
      "https://i.ibb.co/8x4Hqdw/account2.jpg",
      "oumnia",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis...",
      "nameOfMusic",
      "rabat",
      "10.5K",
      "155",
    ],
    [
      "./video/video4.mp4",
      "https://i.ibb.co/CWbynB2/account3-1.jpg",
      "Safae",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis...",
      "nameOfMusic",
      "Nador",
      "705.9K",
      "750",
    ],
  ];
  return (
    <div className="reels pt-5">
      <div className="reel" id="video_play">
        <>
          <div className="video">
            <iframe
              width="345"
              height="613"
              src="https://www.youtube.com/embed/nfjmB2PabSQ"
              title="Thả 1000 con cá bảy màu xuống mương"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="rounded-3"
            ></iframe>
            {/* <div className="content">
            <div className="sound">
              <img className="volume-up" src="./images/volume-up.png" />
              <img className="volume-mute" src="./images/volume-mute.png" />
            </div>
            <div className="play">
              <img src="./images/play-button-arrowhead.png" />
            </div>
            <div className="info">
              <div className="profile">
                <h4>
                  <a href="#">
                    <img src={reels_data[0][1]} />
                    {reels_data[0][2]}
                  </a>
                </h4>
                <span>.</span>
                <button className="follow_text">Follow</button>
              </div>
              <div className="desc">
                <p>
                  {reels_data[0][3]} <span className="show_text">more</span>
                </p>
                <div className="more">
                  <div className="music">
                    <img src="./images/music.png" />
                    <span>{reels_data[0][4]}</span>
                  </div>
                  <div className="position">
                    <img src="./images/map.png" />
                    <span>{reels_data[0][5]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
          <div className="likes">
            <div className="like">
              <img className="not_loved" src="./images/love.png" />
              <img className="loved" src="./images/heart.png" />
              <p> {reels_data[0][6]}</p>
            </div>
            <div className="messsage">
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#message_modal"
              >
                <img src="./images/bubble-chat.png" />
                <p className="m-0">{reels_data[0][7]}</p>
              </button>
            </div>
            <div className="send">
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#send_message_modal"
              >
                <img src="./images/send.png" />
              </button>
            </div>
            <div className="save not_saved">
              <img className="hide saved" src="./images/save_black.png" />
              <img className="not_saved" src="./images/save-instagram.png" />
            </div>
            <div className="more">
              <img src="./images/show_more.png" />
            </div>
            <div className="profile">
              <img src={reels_data[0][1]} />
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default ReelsPage;
