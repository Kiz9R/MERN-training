import React from "react";
import { NavLink } from "react-router-dom";
import About from "./about";
import Gallery from "./gallery";
import Staf from "./staf";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img
              src="logo512.png"
              width="175px"
              height="70px"
              alt="logo"
              className="nav-logo"
            />
            {/* <button
              type="button"
              id="nav-toggle"
              className="nav-toggle"
              aria-label="nav toggler"
            >
              <i className="fas fa-bars"></i>
            </button> */}
          </div>

          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About us
            </NavLink>
            <NavLink to="/gallery" className="nav-link">
              Gallery
            </NavLink>
            <NavLink to="/staf" className="nav-link">
              Members
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="underline"></div>
      <About />
      <Gallery />
      <Staf />
    </>
  );
};

export default Home;
