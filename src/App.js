import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Switch as RouterSwitch } from "react-router";

function App() {
  return (
    <>
    <Router>
        <Navbar title="Proj_1 " aboutText="About Us" />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform heading="Enter your text below" />} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
