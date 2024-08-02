import React from "react";
import { Link } from "react-router-dom";
import { BiAlignJustify } from "react-icons/bi";
import {
  MdOutlineProductionQuantityLimits,
  MdProductionQuantityLimits,
  MdAccountCircle,
} from "react-icons/md";
const Sidebar = () => {
  const nav = [
    {
      id: 1,
      name: "Product ",
      path: "/admin/product",
      icons: <MdProductionQuantityLimits />,
    },
    {
      id: 2,
      name: "Category",
      path: "/admin/category",
      icons: <BiAlignJustify />,
    },
    {
      id: 3,
      name: "Account",
      path: "#account",
      icons: <MdAccountCircle />,
    },
  ];
  return (
    <>
      <div className=" text-gray-50 bg-gray-700 h-screen w-50 p-4 ">
        {nav.map((data) => (
          <div className=" font-semibold flex items-center space-x-2 space-y-1 p-2 mx-2 hover:bg-slate-700 rounded-md ">
            <Link to={data.path}>{data.name}</Link>
            {data.icons}
          </div>
        ))}
      </div>
      <div></div>
    </>
  );
};

export default Sidebar;
