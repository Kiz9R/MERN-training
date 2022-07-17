import React from "react";

const Form = () => {
  return (
    <>
      <div className="container">
        <div className="form">
          <div className="heading">
            <h1>Registration</h1>
            <div className="underline"></div>
          </div>
          <div className="wrap">
            <div className="f1">
              <label htmlFor="">First Name</label>
              <input type="text" />
              <span className="focus-input"></span>
            </div>
            <div className="f2">
              <label htmlFor="">Second Name</label>
              <input type="text" />
              <span className="focus-input"></span>
            </div>
          </div>

          <div className="wrap2">
            <label htmlFor="">E-mail</label>
            <input type="email" />
            <span className="focus-input2"></span>
          </div>
          <div className="wrap2">
            <label htmlFor="">Mobile No.</label>
            <input type="text" />
            <span className="focus-input2"></span>
          </div>
          <button className="btn">Register</button>
        </div>
        {/* <div className="image">
          <img src="pic2.jpeg" alt="" className="img" />
        </div> */}
      </div>
    </>
  );
};

export default Form;
