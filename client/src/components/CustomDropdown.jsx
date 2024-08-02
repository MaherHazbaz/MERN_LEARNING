import React from "react";
import Product from "../admin/Product";

const CustomDropdown = ({ data }) => {
  return (
    <div class=" w-full">
      <select class="block w-full p-2 text-sm  border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500    ">
        {data.map((data) => (
          <option>{data.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
