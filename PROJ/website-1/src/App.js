import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Gallery from "./components/gallery";
import Staf from "./components/staf";
import Quote from "./components/quote";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <header className="header">
        <div className="head">
          <div className="mobile">8240361634</div>
          <div className="email">ritankardebnath2001@gmail.com</div>
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
          <Route extact path="/quote" element={<Quote />}>
            {" "}
          </Route>
          <Route extact path="/contact" element={<Contact />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>

      {/* footer */}

      <footer className="section footer">
        <p className="copyright">
          <span className="copy">copyright &copy;</span>.all rights reserved
        </p>
        <p className="name">
          ritankar <span className="copy">X </span>
          <span className="penname">Kiz9R</span>
        </p>
      </footer>
    </>
  );
}

export default App;
