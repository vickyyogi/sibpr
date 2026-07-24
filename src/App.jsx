import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Contact, SimulasiKredit } from "./pages";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/simulasikredit" element={<SimulasiKredit />} />
      </Routes>
    </>
  );
}

export default App;