import React from "react";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Contact from "./pages/Contact";

const NotFound = () => {
  return <>Not Found</>;
};

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={"404 error NotFound"} />
         */}
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
