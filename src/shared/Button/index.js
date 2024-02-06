import React from "react";

const Button = ({ type, className, disabled, text, onClick, image }) => {
  return (
    <button
      type={type}
      className={`${className} transition duration-300 ease-in-out`}
      disabled={disabled || false}
      onClick={onClick || null}
    >
      {text}{" "}
    </button>
  );
};

export default Button;
