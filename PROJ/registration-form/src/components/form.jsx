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
            <input type="email" required />
            <span className="focus-input2"></span>
          </div>
          <div className="wrap2">
            <label htmlFor="">Password</label>
            <input type="pasword" required />
            <span className="focus-input2"></span>
          </div>
          <div className="wrap2">
            <label htmlFor="">Mobile No.</label>
            <input type="text" />
            <span className="focus-input2"></span>
          </div>
          <div className="dateGender">
            <div className="mainGender">
              <div className="genderTitle">
                <label htmlFor="">
                  <p className="genderTitlep">Gender </p>
                  <span className="dot">:</span>{" "}
                </label>
              </div>
              <div className="gender">
                <input type="radio" name="gender" value="male" />
                male
                <input type="radio" name="gender" value="female" />
                female
                <input type="radio" name="gender" value="other" />
                others
              </div>
            </div>
            <div className="date">
              <label htmlFor="">
                <p className="genderTitlep">DoB</p>
              </label>
              <input type="date" />
            </div>
          </div>

          <button type="submit" className="btn">
            Register
          </button>
        </div>
        {/* <div className="image">
          <img src="pic2.jpeg" alt="" className="img" />
        </div> */}
      </div>
    </>
  );
};

export default Form;
