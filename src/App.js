import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import ParamsComp from "./components/ParamsComp";

function App() {

  return (
    <BrowserRouter >

      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:word" element={<ParamsComp />} />
          <Route path="/:word/:color/:bgCol" element={<ParamsComp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
