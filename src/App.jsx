import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componens/commons/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
//import SimulasiKredit from "./pages/SimulasiKredit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;