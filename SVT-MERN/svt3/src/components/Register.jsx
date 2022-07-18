import React from "react";

// start of css

const container = {
  textAlign: "center",
  transform: "translateX(-70px)",
  marginLeft: "10%",
  letterSpacing: "0.25rem",
  textTransform: "uppercase",
  color: "#ff0800",
};

const underline = {
  height: "0.25rem",
  width: "10rem",
  background: "cyan",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "-10px",
};

const mainTable = {
  margin: "50px",
};

const contain = {
  marginTop: "50px",
  width: "50%",
  border: "3px solid #d0f0c0",
  backgroundColor: "#ffffe4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px 50px",
  boxShadow: "4px 10px 6px 0 rgba(0, 0, 0, 0.6)",
};
const centerDiv = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const row = {
  margin: "10px",
  // padding: "10px",
  textAlign: "center",
};

const btn = {
  transform: "translate(100px, 200%)",
};

const Title = {
  fontSize: "20px",
  color: "hsl(211, 39%, 23%)",
  lineHeight: "1.5",
  textTransform: "uppercase",
  letterSpacing: "1px",
  display: "flex",
  alignItems: "center",
  width: "100%",
  minHeight: "25px",
  borderBottom: "none",
  padding: "15px 0",
  marginTop: "10px",
  marginBottom: "0px",
  paddingBottom: "2px",
};

// End of css

// Start of react

const Register = () => {
  return (
    <main>
      <div style={container}>
        <h1>Registration Form</h1>
        <div style={underline}></div>
      </div>

      <Personal />
    </main>
  );
};

const Personal = () => {
  return (
    <>
      <div style={centerDiv}>
        <div style={contain}>
          <table style={mainTable}>
            <div style={row}>
              <tr>
                <td style={Title}>First Name : </td>
                <td>
                  <input type="text" Placeholder="First Name" required />
                </td>
              </tr>
            </div>
            <div style={row}>
              <tr>
                <td style={Title}>Last Name : </td>
                <td>
                  <input type="text" Placeholder="Last Name" required />
                </td>
              </tr>
            </div>

            <div style={row}>
              <tr>
                <td style={Title}>Date of Birth : </td>
                <td>
                  <input type="date" required />
                </td>
              </tr>
            </div>
            <div style={row}>
              <tr>
                <td style={Title}>Gender : </td>
                <td>
                  <input type="radio" name="gender" />
                  Male
                  <input type="radio" name="gender" />
                  Female
                  <input type="radio" name="gender" />
                  Other
                </td>
              </tr>
            </div>
            <div style={row}>
              <tr>
                <td style={Title}>Email : </td>
                <td>
                  <input type="email" placeholder="xxx@gmail.com" required />
                </td>
              </tr>
            </div>
            <div style={row}>
              <tr>
                <td style={Title}>Password : </td>
                <td>
                  <input type="Password" placeholder="your Password" required />
                </td>
              </tr>
            </div>
            <div style={row}>
              <tr>
                <td style={Title}>Mobile No. : </td>
                <td>
                  <input type="text" placeholder="xxxxx-xxxxx" required />
                </td>
              </tr>
            </div>
            <div style={row}>
              <tr>
                <td style={Title}>Address : </td>
                <td>
                  <textarea row="4" col="15" placeholder="Address"></textarea>
                </td>
              </tr>
            </div>
            <div style={row}>
              <tr>
                <td style={Title}>State : </td>
                <td>
                  <select>
                    <option disabled selected value>
                      Select your State
                    </option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Kerela">Kerela</option>
                    <option value="Maharastra">Maharastra</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </td>
              </tr>
            </div>
            <div style={row}>
              <tr>
                <div style={btn}>
                  <input
                    style={{ height: "30px", width: "70px" }}
                    type="submit"
                  />
                  <input
                    style={{ height: "30px", width: "70px" }}
                    type="reset"
                  />
                </div>
              </tr>
            </div>
          </table>
        </div>
      </div>
    </>
  );
};

export default Register;
