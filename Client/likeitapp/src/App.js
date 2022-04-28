import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  let images = [];

    for (let index = 1; index <= 100; index ++) {
      images = [...images, index];

    }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {images.map((image) => (
            <img key={image} src={`https://picsum.photos/200/300`} alt="1" />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
