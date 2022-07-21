import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./components/first";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route extact path="/" element={<First />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
