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
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     400: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     700: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 5,
  //     },
  //   },
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
                src="pic5.jpeg"
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
                src="pic6.jpeg"
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
          <NavLink to="/" className="main-btn">
            Explore more
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Gallery;
