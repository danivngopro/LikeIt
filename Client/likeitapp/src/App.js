import ImagesSection from "./sections/imagesSection";
import Footer from "./sections/footer";
import Header from "./sections/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Footer/>
        <div className="images"><ImagesSection/></div>
      </header>
    </div>
  );
}

export default App;
