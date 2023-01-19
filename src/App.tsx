import * as react from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./View/index.scss";
import View from "./View";
import ViewItem from "./ViewItem";
import Result from "./AddResult";

function App() {
  return (
    <div className="App">
      <div className="App__Logobar">
        <img className="App__Logo" src="https://zelarsoft.com/wp-content/uploads/2021/10/logo.png" alt="logo" />
      </div>
      <div className="App__presenter">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/View" element={<View />} />
          <Route path="/View/:id" element={<ViewItem />} />
          <Route path="/create" element={<Result />} />
          <Route path="/update/:id" element={<Result />} />
        </Routes>
      </BrowserRouter>
      {/* <StudentResult/> */}
    </div>
    </div>
  );
}

export default App;
