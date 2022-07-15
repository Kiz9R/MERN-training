import React from "react";

const mainHeading = {
  textAlign: "center",
  marginTop: "20px",
};

const bold = {
  fontWeight: "bold",
  fontSize: "20px",
};

const form = {
  margin: "30px",
  padding: "30px 0 30px 0",
  border: "10px solid",
  textAlign: "center",
  // backgroundColor: "cyan",
};

const heading = {
  margin: "40px 0 0 0",
  color: "black",
  fontFamily: "Helvetica",
};

const div = {
  // backgroundColor: "red",
  padding: "0 0 30px 0",
};

const underline = {
  margin: "0 250px",
  border: "3px solid",
  backgroundColor: "cyan",
};

const Register = () => {
  return (
    <>
      {/* <h1 style={mainHeading}>Registration Form</h1> */}
      <Personal />
    </>
  );
};

const Personal = () => {
  return (
    <>
      <div style={div}>
        <h1 style={mainHeading}>Personal Details</h1>
        <div style={underline}></div>

        <form style={form}>
          <label style={bold}>First Name: </label>
          <input type="text" placeholder="your Name" required />
          <br />
          <br />
          <label style={bold}>Last Name: </label>
          <input type="text" placeholder="your Name" required />
          <br />
          <br />
          <label style={bold}>Date of Birth:</label>
          <input type="date" placeholder="Date" required />
          <br />
          <br />
          <label style={bold}>Gender: </label>
          <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="Female" />
          Female
          <input type="radio" name="gender" value="Other" />
          Other
          <br />
          <br />
          <label style={bold}>Email: </label>
          <input type="email" placeholder="Your Email" required />
          <br />
          <br />
          <label style={bold}>Password: </label>
          <input type="password" placeholder="Your Password" required />
          <br />
          <br />
          <label style={bold}>Address: </label>
          <input type="address" placeholder="Your address" required />
          <br />
          <br />
          <label style={bold}>Mobile No: </label>
          <input type="text" placeholder="xxxxx-xxxxx" required />
          <br />
          <br />
          <label style={bold}>State: </label>
          <select name="State">
            <option disabled selected value>
              Select your State
            </option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerela">Kerela</option>
            <option value="Maharastra">Maharastra</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          <br />
          <br />
          <input type="submit" />
          <input type="reset" />
        </form>
      </div>
    </>
  );
};

export default Register;
