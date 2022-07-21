import React from "react";
import people from "../people";
import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Staf = () => {
  return (
    <>
      <section className="section featured">
        <div className="title-wrapper">
          <h2 className="title">
            our
            <span className="subtitle">members</span>
          </h2>
        </div>
        <div className="section center featured-center">
          {/* one card */}
          <div className="staf-card">
            <div className="staf-img-container">
              <img
                src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
                alt="person"
                className="staf-img"
              />
            </div>
            <div className="staf-footer">
              <h4 className="staf-title">maria ferguson</h4>
              <div className="staf-info">
                <p className="staf-country">
                  <FaMapMarkerAlt />
                  United States
                </p>
                <div className="staf-details">
                  <p>
                    DEPT : <span className="dept">cse</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* one card */}
          {/* one card */}
          <div className="staf-card">
            <div className="staf-img-container">
              <img
                src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg"
                alt="person"
                className="staf-img"
              />
            </div>
            <div className="staf-footer">
              <h4 className="staf-title">peter smith</h4>
              <div className="staf-info">
                <p className="staf-country">
                  <FaMapMarkerAlt />
                  Nigeria
                </p>
                <div className="staf-details">
                  <p>
                    DEPT : <span className="dept">ee</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* one card */}
          {/* one card */}
          <div className="staf-card">
            <div className="staf-img-container">
              <img
                src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
                alt="person"
                className="staf-img"
              />
            </div>
            <div className="staf-footer">
              <h4 className="staf-title">john doe</h4>
              <div className="staf-info">
                <p className="staf-country">
                  <FaMapMarkerAlt />
                  Canada
                </p>
                <div className="staf-details">
                  <p>
                    DEPT : <span className="dept">ece</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* one card */}
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

export default Staf;
