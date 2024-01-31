import React from "react";

const Dropdown = ({ label, labelClass, className, id, value, handleChange }) => {
  const options = [ 'Prefer not to say', 'Male', 'Female', 'Trans', 'Other'];

  return (
    <div className="mb-4">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select
        placeholder='Pick an optin'
        id={id}
        value={value}
        onChange={handleChange}
        className={`${className || ''} p-2 w-full opacity-80 bg-gray-100 sm:text-sm rounded-md shadow-inner border border-gray-300 hover:shadow-2xl focus:outline-none focus:ring-1 focus:ring-gray-50 focus:ring-opacity-90 focus:opacity-80 focus:bg-white`}
      >
         <option key={"default"} value={""}>
          </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

<span >&#8595;</span>