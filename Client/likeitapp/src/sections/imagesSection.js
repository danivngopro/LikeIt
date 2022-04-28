import "./imagesSection.css";
import React from "react";
import axios from "axios";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sendDisLike(i) {
  const headers = { 
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  axios.put(`http://localhost:3003/api/images/id/${i}`, {
    inc: true,
    like: false,
  }, headers);
}

function sendLike(i) {
  const headers = { 
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  axios.put(`http://localhost:3003/api/images/id/${i}`, {
    inc: true,
    like: true,
  }, headers);
}

function Header() {
  let images = [];
  let limit = 0;
  let imgSelectionRange = 1;

  while (limit < 100) {
    try {
      const randomIndex = getRndInteger(
        imgSelectionRange,
        imgSelectionRange + 5
      );

      const newImgUrl = `https://picsum.photos/id/${randomIndex}/200/300`;

      const newImg = (
        <div key={randomIndex}>
          <div className="hover06 column">
            <figure>
              <img src={newImgUrl} alt="1" className="image"></img>
            </figure>
          </div>
          <button
            className="button-2"
            onClick={(e) => {
              sendDisLike(randomIndex);
            }}
          >
            DisLike
          </button>
          <button
            className="button-1"
            onClick={(e) => {
              sendLike(randomIndex);
            }}
          >
            Like
          </button>
        </div>
      );

      images = [...images, newImg];
      limit++;
      imgSelectionRange += 6;
    } catch (err) {
      console.log(err);
    }
  }

  return <div className="flex-container">{images.map((image) => image)}</div>;
}

export default Header;
