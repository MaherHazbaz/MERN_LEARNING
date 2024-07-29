import React from "react";

const CustomInput = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="gap-x-24 border px-1 py-1 text-right">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        
      />
    </div>
  );
};

export default CustomInput;
