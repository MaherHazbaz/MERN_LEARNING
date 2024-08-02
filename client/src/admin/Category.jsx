import React from "react";
import CustomDropdown from "../components/CustomDropdown";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
const Category = () => {
  const [name, setname] = useState("");
  console.log(name);
  return (
    <>
      <div className=" flex px-3 py-3 space-x-5">
        <CustomInput
          type={"text"}
          label={"Category Name"}
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <CustomInput type={"file"} label={"Category Image"} />
      </div>
      <div className="px-3 py-3">
        <CustomButton titile={"Submit"} />
      </div>
    </>
  );
};

export default Category;
