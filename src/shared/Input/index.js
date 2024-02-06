import React from "react";

const Input = ({
  label,
  labelClass,
  type,
  placeholder,
  className,
  id,
  value,
  handleChange,
  required,
}) => {
  return (
    <div className="mt-4">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type || "text"}
        id={id}
        required={required || false}
        className={`${className} p-2 w-full opacity-80 sm:text-sm rounded-md shadow-inner border border-gray-300 hover:shadow-2xl focus:outline-none focus:ring-1 focus:ring-gray-50 focus:ring-opacity-90 focus:opacity-80`}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
