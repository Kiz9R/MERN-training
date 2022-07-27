import React from "react";
// import people from "../people";
import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  items: 4,
  margin: 20,
  responsiveClass: true,
  autoplay: true,
  loop: true,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
};

const Starters = () => {
  return (
    <>
      <section className="section featured ">
        <div className="title-wrapper">
          <h2 className="title">
            star
            <span className="subtitle">ters</span>
          </h2>
        </div>
        <div className="section center featured-center">
          <OwlCarousel {...options}>
            {/* one card */}
            <div className="staf-card">
              <div className="staf-img-container">
                <img src="/img/s3.jpeg" alt="person" className="staf-img" />
              </div>
              <div className="staf-footer">
                <h4 className="staf-title">item_2</h4>
                <div className="staf-info">
                  <p className="staf-country">price : $20</p>
                </div>
              </div>
            </div>
            {/* one card */}
            {/* one card */}
            <div className="staf-card">
              <div className="staf-img-container">
                <img src="/img/s3.jpeg" alt="person" className="staf-img" />
              </div>
              <div className="staf-footer">
                <h4 className="staf-title">item_2</h4>
                <div className="staf-info">
                  <p className="staf-country">price : $20</p>
                </div>
              </div>
            </div>
            {/* one card */}
            {/* one card */}
            <div className="staf-card">
              <div className="staf-img-container">
                <img src="/img/s3.jpeg" alt="person" className="staf-img" />
              </div>
              <div className="staf-footer">
                <h4 className="staf-title">item_2</h4>
                <div className="staf-info">
                  <p className="staf-country">price : $20</p>
                </div>
              </div>
            </div>
            {/* one card */}
            {/* one card */}
            <div className="staf-card">
              <div className="staf-img-container">
                <img src="/img/s3.jpeg" alt="person" className="staf-img" />
              </div>
              <div className="staf-footer">
                <h4 className="staf-title">item_2</h4>
                <div className="staf-info">
                  <p className="staf-country">price : $20</p>
                </div>
              </div>
            </div>
            {/* one card */}
            {/* one card */}
            <div className="staf-card">
              <div className="staf-img-container">
                <img src="/img/s3.jpeg" alt="person" className="staf-img" />
              </div>
              <div className="staf-footer">
                <h4 className="staf-title">item_2</h4>
                <div className="staf-info">
                  <p className="staf-country">price : $20</p>
                </div>
              </div>
            </div>
            {/* one card */}
            {/* one card */}
            <div className="staf-card">
              <div className="staf-img-container">
                <img src="/img/s3.jpeg" alt="person" className="staf-img" />
              </div>
              <div className="staf-footer">
                <h4 className="staf-title">item_2</h4>
                <div className="staf-info">
                  <p className="staf-country">price : $20</p>
                </div>
              </div>
            </div>
            {/* one card */}
          </OwlCarousel>
        </div>
        <div className="staf-link">
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

export default Starters;
