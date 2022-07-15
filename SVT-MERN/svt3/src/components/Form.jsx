import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <h1>This is a form</h1>
        <label>
          Name<sub>*</sub>
        </label>
        <input type="text" placeholder="Name" required />
        <br />
        <br />
        <label>Mobile No</label>
        <input type="text" placeholder="xxxx-xxxx" required />
        <br />
        <br />
        <label>Date of Birth</label>
        <input type="date" placeholder="Date" required />
        <br />
        <br />
        <label>Gender</label>
        <input type="radio" name="gender" value="male" />
        Male
        <input type="radio" name="gender" value="Female" />
        Female
        <input type="radio" name="gender" value="Other" />
        Other
        <br />
        <br />
        <label>Religion</label>
        <select name="rel">
          <option disabled selected value>
            Select your Religion
          </option>
          <option value="hindu">hindu</option>
          <option value="hindu">islam</option>
          <option value="hindu">sikh</option>
          <option value="hindu">christian</option>
        </select>
        <br />
        <br />
        <label>
          Email<sub>*</sub>
        </label>
        <input type="email" name="mail" placeholder="your email" required />
        <label>
          Password<sub>*</sub>
        </label>
        <input
          type="password"
          name="password"
          placeholder="your password"
          required
        />
        <br />
        <br />
        {/* <label>Submit</label> */}
        <input type="submit" />
        <input type="reset" />
      </form>
    </>
  );
};

export default Form;
