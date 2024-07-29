import React from "react";
import Sidebar from "../../components/Nav/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
