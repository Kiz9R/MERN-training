import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Starters from "./components/starters";
import MainDish from "./components/maindish";
import Desert from "./components/desert";

function App() {
  return (
    <>
      <header className="header">
        <div className="head">
          <div className="title">Our Menu</div>
        </div>
      </header>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/starters" element={<Starters />}></Route>
          <Route exact path="/maindish" element={<MainDish />}></Route>
          <Route exact path="/desert" element={<Desert />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
