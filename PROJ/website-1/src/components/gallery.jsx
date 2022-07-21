import React from "react";
import { NavLink } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  items: 3,
  margin: 20,
  responsiveClass: true,
  autoplay: true,
  loop: true,
  smartSpeed: 500,
};

const Gallery = () => {
  return (
    <>
      <section className="section gallery">
        <div className="title-wrapper">
          <h2 className="title our">
            our <span className="subtitle">gallery</span>
          </h2>
        </div>
        <div className="gallery-center">
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            <div className="gallery-img-container">
              <img
                src="pic1.jpeg"
                height="300px"
                alt="more img"
                class="gallery-img"
              />
              <span class="gallery-icon">
                <i class="fa fa-search"></i>
              </span>
            </div>
            <div className="gallery-img-container">
              <img
                src="pic2.jpeg"
                height="300px"
                alt="more img"
                class="gallery-img"
              />
              <span class="gallery-icon">
                <i class="fa fa-search"></i>
              </span>
            </div>
            <div className="gallery-img-container">
              <img
                src="pic3.jpeg"
                height="300px"
                alt="more img"
                class="gallery-img"
              />
              <span class="gallery-icon">
                <i class="fa fa-search"></i>
              </span>
            </div>
            <div className="gallery-img-container">
              <img
                src="pic4.jpeg"
                height="300px"
                alt="more img"
                class="gallery-img"
              />
              <span class="gallery-icon">
                <i class="fa fa-search"></i>
              </span>
            </div>
            <div className="gallery-img-container">
              <img
                src="pic6.jpg"
                height="300px"
                alt="more img"
                class="gallery-img"
              />
              <span class="gallery-icon">
                <i class="fa fa-search"></i>
              </span>
            </div>
            <div className="gallery-img-container">
              <img
                src="pic7.jpg"
                height="300px"
                alt="more img"
                class="gallery-img"
              />
              <span class="gallery-icon">
                <i class="fa fa-search"></i>
              </span>
            </div>
          </OwlCarousel>
        </div>{" "}
        <div className="center">
          <NavLink to="/">
            <button className="main-btn" onClick={() => window.scrollTo(0, 0)}>
              Explore more
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Gallery;
