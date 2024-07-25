import React from "react";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Router, Routes } from "react-router-dom";

const NotFound = () => {
  return <>hi</>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About.jsx />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
