import React from "react";
import { useNavigate } from "react-router-dom";

const CustomButton = (title, onclick, to) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };
  return (
    <div>
      <button onClick={handleClick}>{title}</button>
    </div>
  );
};

export default CustomButton;
