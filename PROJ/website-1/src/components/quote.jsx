import React from "react";

import { FaQuoteRight } from "react-icons/fa";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  // responsive: {
  //   0: {
  //     items: 1,
  //   },
  //   400: {
  //     items: 1,
  //   },
  //   600: {
  //     items: 2,
  //   },
  //   700: {
  //     items: 3,
  //   },
  //   1000: {
  //     items: 5,
  //   },
  // },
};

const Quote = () => {
  return (
    <>
      <section className="section quotes">
        <div className="title-wrapper">
          <h2 className="title">
            QUO
            <span className="subtitle">TES</span>
          </h2>
        </div>
        <div className="quote-center">
          <div className="quoteContainer">
            <OwlCarousel {...options}>
              <div className="quote-card">
                <div className="qoute-img-container">
                  <img
                    src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
                    // width="30px"
                    // height="30px"
                    alt="no img"
                    className="quote-img"
                  />
                </div>
                <div className="quote-footer">
                  <div className="quote">
                    <FaQuoteRight />
                  </div>
                  <div className="mem-quote">
                    <p className="mem-speech">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Natus, quas adipisci sequi odit quisquam voluptates
                      provident est error eos culpa.
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
