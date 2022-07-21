import React from "react";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <section className="section about">
        <div className="title-wrapper">
          <h2 className="title">
            about <span className="subtitle">us</span>
          </h2>
        </div>
        <div className="about-center section-center">
          <div className="about-img">
            <img src="pic5.jpeg" alt="no img found" className="about-photo" />
          </div>
          <div className="about-info">
            <h3>
              who are we <span className="ques">?</span>{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              quidem, id nisi consequuntur quos quae ipsam ratione et aliquid,
              iure, soluta cum. Eius, in laudantium repudiandae nam rerum
              excepturi accusantium eligendi ad consequuntur deserunt iste harum
              voluptas id, dolore temporibus totam sunt, eveniet deleniti
              dolorum. Suscipit dolor laborum est! Repellat!.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
              odio animi repellendus, quod unde ducimus aliquid illo debitis
              suscipit!
            </p>
            <NavLink to="/">
              <button
                className="main-btn"
                onClick={() => window.scrollTo(0, 0)}
              >
                Explore more
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
