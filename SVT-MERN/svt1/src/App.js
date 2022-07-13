import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <First />
      </div>
      <Second />
    </>
  );
}

const First = () => {
  return (
    <div>
      <h1>INTRODUCTION</h1>
    </div>
  );
};

const Second = () => {
  return (
    <>
      <ul>
        <li>Ritankar Debnath</li>
        <li>
          Educational Qualification
          <ol>
            <li>ICSE</li>
            <li>ISC</li>
            <li>B.TECH</li>
          </ol>
          <li>
            SKILL
            <ol type="i">
              <li>HTML</li>
              <li>CSS</li>
            </ol>
          </li>
        </li>
      </ul>
    </>
  );
};

export default App;
