import React from "react";

const CustomInput = ({ type, placeholder, onChange, id }) => {
  return (
    <>
      <div className="title-input">{placeholder}</div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        className="input"
        required
      />
    </>
  );
};

export default CustomInput;
