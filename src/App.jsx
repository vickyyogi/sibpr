import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componens/commons/Header";
import { Home, About, Contact, SimulasiKredit } from "./pages";

//import SimulasiKredit from "./pages/SimulasiKredit";

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