import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Index from "./admin/Index.jsx";
import Sidebar from "./components/Nav/Sidebar.jsx";
import Layout from "./Layout/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
       <App />  
      <Index />
      <search/>
    </BrowserRouter>
  </React.StrictMode>
);
