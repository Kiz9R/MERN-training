import React from "react";
import { NavLink } from "react-router-dom";
import Starters from "./starters";
import MainDish from "./maindish";
import Desert from "./desert";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-links">
            <NavLink to="/starters" className="nav-link">
              starters
            </NavLink>
            <NavLink to="/maindish" className="nav-link">
              main course
            </NavLink>
            <NavLink to="/" className="nav-link">
              desert
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="underline"></div>
      <Starters />
      <MainDish />
      <Desert />
    </>
  );
};

export default Home;
