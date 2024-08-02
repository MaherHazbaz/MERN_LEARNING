import React from "react";
import Sidebar from "../components/Nav/Sidebar";
import Product from "./Product";
import Category from "./Category";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../pages/Home";
import images from "../admin/images/tv.jpg";


const Index = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/admin" element={<Layout />}>
            <Route path="product" element={<Product />} />
            <Route path="category" element={<Category />} />
          </Route>
        </Routes>
      </div>
      <div>
      
      </div>
      
      <div>

      </div>
    </>
  );
};

export default Index;
