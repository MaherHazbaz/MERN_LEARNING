import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import CustomDropdown from "../components/CustomDropdown";
import image from "../admin/images/tv.jpg";
import Home from "../pages/Home";
const Product = () => {
  const arr = [
    { name: "Samsung", price: "100000" },
    { name: "Apple", price: "200000" },
    { name: "MI", price: "300000" },
  ];
  const [name, setname] = React.useState("");
  const [price, setprice] = useState("");
  const [des, setdes] = useState("");
  const submit = () => {
    console.log(name, price, des);
  };

  return (
    <>
      <div className=" flex w-full space-x-5 py-4">
        <CustomInput
          type={"text"}
          label={"Product Name"}
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <CustomInput
          type={"text"}
          label={"Product Price"}
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <CustomInput
          type={"text"}
          label={"Product description"}
          value={des}
          onChange={(e) => setdes(e.target.value)}
        />
        <CustomInput type={"file"} label={"Product Image"} />
        <CustomDropdown data={arr} />
        <CustomButton titile={"Submit"} onclick={submit()} />
      </div>
      
    </>
  );
};

export default Product;
