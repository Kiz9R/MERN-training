import React from "react";
import { NavLink } from "react-router-dom";
import About from "./about";
import Gallery from "./gallery";
import Staf from "./staf";
import Quote from "./quote";
import Contact from "./contact";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img
              src="logo1.jpg"
              width="90px"
              height="70px"
              alt="logo"
              className="nav-logo"
            />{" "}
            Scammer Institute of Technology
          </div>

          {/* <div className="college">
            <h4 className="title"> Scammer Institute of Technology</h4>
          </div> */}

          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/gallery" className="nav-link">
              Gallery
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About us
            </NavLink>

            <NavLink to="/staf" className="nav-link">
              Members
            </NavLink>
            <NavLink to="/quote" className="nav-link">
              Quotes
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="underline"></div>
      <Gallery />
      <About />
      <Staf />
      <Quote />
      <Contact />
    </>
  );
};

export default Home;
