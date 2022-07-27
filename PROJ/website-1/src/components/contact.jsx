import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="title-wrapper">
        <h2 className="title">
          contact <span className="subtitle"> us</span>
        </h2>
      </div>
      <section className="contact section-map">
        <div className="section-center  clearfix">
          <article className="contact-info">
            <div className="contact-item">
              <h3 className="contact-title">
                {" "}
                <span contact-icon>
                  <i className="fas fa-location-arrow"></i>
                </span>{" "}
                address:
              </h3>
              <h3 className="contact-text">
                334, near Unknown and Known Street, I Don't Know Place, Kolkata,
                West Bengal 700095
              </h3>
            </div>
            <div className="contact-item">
              <h3 className="contact-title">
                {" "}
                <span contact-icon>
                  <i className="fas fa-envelope"></i>
                </span>{" "}
                email:
              </h3>
              <h3 className="contact-text">idontknowUnknown@gmail.com</h3>
            </div>
            <div className="contact-item">
              <h3 className="contact-title">
                {" "}
                <span contact-icon>
                  <i className="fas fa-phone"></i>
                </span>{" "}
                telephone number:
              </h3>
              <h3 className="contact-text">033-784-537-0984</h3>
            </div>
          </article>
          <div className="map-center">
            {" "}
            <article className="contact-form">
              <form
                action="https://formspree.io/f/mbjqeowj"
                method="POST"
                className="form-group"
              >
                <input
                  type="text"
                  name="name"
                  placeholder=" your full-name"
                  className="form-control"
                />
                <input
                  type="email"
                  name="email"
                  placeholder=" yourmail@gmail.com"
                  className="form-control"
                />
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  placeholder=" message"
                ></textarea>
                <button type="submit" className="send-main-btn">
                  send
                </button>
              </form>
            </article>
            <article className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.16542120688!2d88.3704295!3d22.497975899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271237be95b01%3A0xbf76b6e8e8f54f91!2sIIChE%20-%20CRC%2C%20HQ%20%26%20Calcutta%20Regional%20Centre!5e0!3m2!1sen!2sin!4v1658685396146!5m2!1sen!2sin"
                width="350"
                height="450"
                // style="border:0;"
                // allowfullscreen=""
                // loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </article>
          </div>
        </div>
        {/* <article className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.16542120688!2d88.3704295!3d22.497975899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271237be95b01%3A0xbf76b6e8e8f54f91!2sIIChE%20-%20CRC%2C%20HQ%20%26%20Calcutta%20Regional%20Centre!5e0!3m2!1sen!2sin!4v1658685396146!5m2!1sen!2sin"
            width="400"
            height="350"
            // style="border:0;"
            // allowfullscreen=""
            // loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </article> */}
      </section>
      <div className="center">
        <NavLink to="/">
          <button className="main-btn" onClick={() => window.scrollTo(0, 0)}>
            Explore more
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Contact;
