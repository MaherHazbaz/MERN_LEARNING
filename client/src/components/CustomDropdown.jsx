import React from "react";
import Product from "../admin/Product";

const CustomDropdown = () => {
  const arr = [{ name: "1" }, { name: "2" }, { name: "3" }];
  return (
    <div>
      <select>
        {arr.map((data) => (
          <option>{data.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
