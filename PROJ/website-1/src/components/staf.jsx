import React from "react";
import people from "../people";
import { FaMapMarkerAlt } from "react-icons/fa";

const Staf = () => {
  return (
    <>
      <section className="section featured">
        <div className="title-wrapper">
          <h2 className="title">
            our
            <span className="subtitle">Stafs</span>
          </h2>
        </div>
        <div className="section center featured-center">
          {/* one card */}
          <div className="tour-card">
            <div className="tour-img-container">
              <img
                src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
                alt="person"
                className="tour-img"
              />
            </div>
            <div className="tour-footer">
              <h4 className="tour-title">maria ferguson</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <FaMapMarkerAlt />
                  United States
                </p>
                <div className="tour-details">
                  <p>
                    DEPT : <span className="dept">cse</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* one card */}
          {/* one card */}
          <div className="tour-card">
            <div className="tour-img-container">
              <img
                src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg"
                alt="person"
                className="tour-img"
              />
            </div>
            <div className="tour-footer">
              <h4 className="tour-title">peter smith</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <FaMapMarkerAlt />
                  United States
                </p>
                <div className="tour-details">
                  <p>
                    DEPT : <span className="dept">cse</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* one card */}
          {/* one card */}
          <div className="tour-card">
            <div className="tour-img-container">
              <img
                src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
                alt="person"
                className="tour-img"
              />
            </div>
            <div className="tour-footer">
              <h4 className="tour-title">john doe</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <FaMapMarkerAlt />
                  Canada
                </p>
                <div className="tour-details">
                  <p>
                    DEPT : <span className="dept">ece</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* one card */}
        </div>
      </section>
    </>
  );
};

export default Staf;
