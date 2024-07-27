import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import SPNavbar from "./Components/SPNavbar";
import SPFooter from "./Components/SPFooter";
import About from "./Pages/About";
import Services from "./Pages/Services";

function App() {
  return (
    <>
      <SPNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SPFooter />
    </>
  );
}

export default App;
