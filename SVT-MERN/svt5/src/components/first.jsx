import React from "react";
// import { NavLink } from "react-router-dom";

let total = 0;
let division = "no";
let percentage = 48;
let status = "pass";

let s11 = {
  color: "black",
};
let s22 = {
  color: "black",
};
let s33 = {
  color: "black",
};
let s44 = {
  color: "black",
};

let stat = {
  color: "green",
};

let s1 = 20;
let s2 = 20;
let s3 = 90;
let s4 = 29;

total = s1 + s2 + s3 + s4;
percentage = Math.round((total / 400) * 100);

if (percentage >= 60) {
  division = "1st";
}
if (percentage < 60 && percentage >= 45) {
  division = "2st";
}
if (percentage < 45 && percentage >= 30) {
  division = "3st";
}
if (percentage < 30) {
  division = "No";
  status = "Fail";
  stat.color = "red";
}

if (s1 < 30) {
  s11.color = "red";
}
if (s2 < 30) {
  s22.color = "red";
}
if (s3 < 30) {
  s33.color = "red";
}
if (s4 < 30) {
  s44.color = "red";
}

const First = () => {
  return (
    <>
      {/* title */}
      <div className="header">
        <div className="title-header">
          <div className="title">
            <h1>west bengal board of higher secondary education</h1>
          </div>
          <div className="title">
            <h2>examination results-2022</h2>
          </div>
        </div>
        <div className="header-hero ">
          brought to you by{" "}
          <span className="title">national informatics center</span>
        </div>
      </div>
      <div className="underline"></div>
      {/* end of title */}

      {/* result */}
      <div className="header">
        <div className="result-header">
          <h2 className="exam">higher secondary (XII) results-2021</h2>
        </div>
        <div className="result-underline">result</div>
        <div className="person">
          <div className="roll">
            <h3>Roll : </h3>
            <h3>Name : </h3>
            <h3>Total : </h3>
            <h3>percentage : </h3>
            <h3>division : </h3>
            <h3>status : </h3>
          </div>
          <div className="value">
            <h3>9237592 </h3>
            <h3>anything any </h3>
            <h3>{total} </h3>
            <h3>{percentage} </h3>
            <h3>{`${division} division `}</h3>
            <h3 style={stat}>{status} </h3>
          </div>
        </div>
        <div className="marks-underline">
          {/* <table rder="3" align="center" rules="all" width="100%">
            <thead>
              <tr>
                <th>subjects</th>
                <th>Theory MarksGrade</th>
                <th>practical project marks grade</th>
                <th>total marks</th>
                <th>grade</th>
                <th>percentaile</th>
              </tr>
            </thead>
          </table> */}
          <div className="sub">
            <h3>Subjects</h3>
          </div>
          <div className="scr">
            <h3>marks</h3>
          </div>
        </div>
        <div className="holder">
          <div className="subject">
            <h3 className="hold">subject1 </h3>
            <h3 className="hold">subject2 </h3>
            <h3 className="hold">subject3 </h3>
            <h3 className="hold">subject4 </h3>
          </div>

          <div className="score">
            <h3 className="hold" style={s11}>
              {s1}
            </h3>
            <h3 className="hold" style={s22}>
              {s2}
            </h3>
            <h3 className="hold" style={s33}>
              {s3}
            </h3>
            <h3 className="hold" style={s44}>
              {s4}
            </h3>
          </div>
        </div>
      </div>
      {/* end of result */}
    </>
  );
};

export default First;
