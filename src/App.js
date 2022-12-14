import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Quotes from "./components/Quote";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        { <Route path="/quotes" element={<Quotes />} /> }
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
