import React from "react";

function ExplorePage() {
  const explore_date = [
    ["https://i.ibb.co/Jqh3rHv/img1.jpg", 1500, 400],
    ["https://i.ibb.co/2ZxBFVp/img2.jpg", 400, 200],
    ["https://i.ibb.co/5vQt677/img3.jpg", 700, 20],
    ["https://i.ibb.co/FVVxR6x/img.jpg", 150, 80],
    ["https://i.ibb.co/CWbynB2/account3-1.jpg", 10, 5],
    ["https://i.ibb.co/z41bG1y/img6.jpg", 100, 57],
    ["https://i.ibb.co/vkXPdxN/account7.jpg", 100, 57],
    ["https://i.ibb.co/7R0Vzp3/account8.jpg", 100, 57],
    ["https://i.ibb.co/gvrfhjL/account9.jpg", 100, 57],
    ["https://i.ibb.co/j8L7FPY/account10.jpg", 100, 57],
    ["https://i.ibb.co/JcXRPht/account11.jpg", 100, 57],
    ["https://i.ibb.co/6WvdZS9/account12.jpg", 100, 57],
    ["https://i.ibb.co/pJ8thst/account13.jpg", 100, 57],
    ["https://i.ibb.co/4M3W996/account14.jpg", 100, 57],
    ["https://i.ibb.co/3S1hjKR/account1.jpg", 100, 57],
  ];
  return (
    <div className="explore_container">
      <div className="items_4">
        <div className="item">
          <img className="img-fluid" src={explore_date[0][0]} alt="" />
          <div className="bg">
            <div className="info">
              <div className="likes">
                <img src="./images/heart_white.png" alt="" />
                <span>{explore_date[0][1]}</span>
              </div>
              <div className="comments">
                <img src="./images/message.png" alt="" />
                <span>{explore_date[0][2]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img className="img-fluid" src={explore_date[1][0]} alt="" />
          <div className="bg">
            <div className="info">
              <div className="likes">
                <img src="./images/heart_white.png" alt="" />
                <span>{explore_date[1][1]}</span>
              </div>
              <div className="comments">
                <img src="./images/message.png" alt="" />
                <span>{explore_date[1][2]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img className="img-fluid" src={explore_date[2][0]} alt="" />
          <div className="bg">
            <div className="info">
              <div className="likes">
                <img src="./images/heart_white.png" alt="" />
                <span>{explore_date[2][1]}</span>
              </div>
              <div className="comments">
                <img src="./images/message.png" alt="" />
                <span>{explore_date[2][2]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img className="img-fluid" src={explore_date[3][0]} alt="" />
          <div className="bg">
            <div className="info">
              <div className="likes">
                <img src="./images/heart_white.png" alt="" />
                <span>{explore_date[3][1]}</span>
              </div>
              <div className="comments">
                <img src="./images/message.png" alt="" />
                <span>{explore_date[3][2]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item1">
        <div className="item">
          <img className="img-fluid" src={explore_date[5][0]} />
          <div className="bg">
            <div className="info">
              <div className="likes">
                <img src="./images/heart_white.png" />
                <span>{explore_date[5][1]}</span>
              </div>
              <div className="comments">
                <img src="./images/message.png" />
                <span>{explore_date[5][2]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
