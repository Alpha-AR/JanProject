import React from "react";

const Dropdown = ({
  label,
  labelClass,
  className,
  id,
  value,
  handleChange,
  options,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className={`${className || ""} p-2 w-full opacity-80 bg-gray-100 sm:text-sm rounded-md shadow-inner border border-gray-300 hover:shadow-2xl focus:outline-none focus:ring-1 focus:ring-gray-50 focus:ring-opacity-90 focus:opacity-80 focus:bg-white`}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
