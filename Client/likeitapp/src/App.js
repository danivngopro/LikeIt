import ImagesSection from "./sections/imagesSection";
import Footer from "./sections/footer";
import Header from "./sections/header";
import "./App.css";
// import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <div className="images"><ImagesSection/></div>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
