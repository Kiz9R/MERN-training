import React from "react";

const cssStyle = {
  color: "white",
  backgroundColor: "black",
  textAlign: "center",
  fontSize: "3rem",
  fontFamily: "redo",
  margin: "40px 10px 60px 0px",
  //     top right bottom left
  padding: "20px",
};

const First = () => {
  return (
    <>
      <h1 style={cssStyle}>Hello</h1>
    </>
  );
};

export default First;
