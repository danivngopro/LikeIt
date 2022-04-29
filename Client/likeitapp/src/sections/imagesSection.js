import "./imagesSection.css";
import React from "react";
import axios from "axios";
import { authentication } from "../Firebase/firebase";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getLikesAndDislikes(i) {
  axios.get(`http://localhost:3003/api/images/id/${i}`).then((res) => {
    document.getElementById(`dislikesText${i}`).value = res.data.dislikes;
    document.getElementById(`likesText${i}`).value = res.data.likes;
  }).catch((err) => err);
}

function sendDisLike(i) {
  axios.put(`http://localhost:3003/api/images/id/${i}`, {
    like: false,
    user: authentication.currentUser.uid,
  });
  getLikesAndDislikes(i);
}

function sendLike(i) {
  axios.put(`http://localhost:3003/api/images/id/${i}`, {
    like: true,
    user: authentication.currentUser.uid,
  });
  getLikesAndDislikes(i);
}

function ImageSection() {
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
        <div key={randomIndex} className="imgContainer">
          <div className="hover06 column">
            <figure>
              <img src={newImgUrl} alt="1" className="image"></img>
            </figure>
          </div>
          <div>
            <input
              type="text"
              id={`dislikesText${randomIndex}`}
              value="0"
              className="counter"
              readOnly
              disabled
            ></input>
            <input
              type="text"
              id={`likesText${randomIndex}`}
              value="0"
              className="counter"
              readOnly
              disabled
            ></input>
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

export default ImageSection;
