import React from "react";

const Second = (props) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-11">
            <div className="row">
              <div className="col-12">
                <div className="card1">
                  <img
                    src={props.img}
                    height="150px"
                    width="100%"
                    alt="no img"
                  />
                  <h3>{props.name}</h3>
                  <span>{props.des}</span>
                  <a href="">
                    <button>watch now</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
