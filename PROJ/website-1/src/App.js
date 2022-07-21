import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Gallery from "./components/gallery";
import Staf from "./components/staf";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function App() {
  return (
    <>
      <header className="header">
        <div className="head">
          <div className="mobile">xxxxx-xxxxx</div>
          <div className="email">youremail@gmail.com</div>
          <div className="social">
            <div className="icon">
              <AiFillGithub />
            </div>
            <div className="icon">
              <AiFillLinkedin />
            </div>
          </div>
        </div>
      </header>
      <BrowserRouter>
        <Routes>
          <Route extact path="/" element={<Home />}>
            {" "}
          </Route>
          <Route extact path="/about" element={<About />}>
            {" "}
          </Route>
          <Route extact path="/gallery" element={<Gallery />}>
            {" "}
          </Route>
          <Route extact path="/staf" element={<Staf />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
