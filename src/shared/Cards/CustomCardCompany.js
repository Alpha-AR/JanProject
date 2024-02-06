import React from "react";

const CustomCardComp = ({ img2, text1, className }) => {
  return (
    <div
      className={`${className} max-w-sm min-w-sm h-full p-4 flex flex-row border border-gray-200 rounded-2xl transition duration-300  bg-gradient-to-r from-blue-200 to-cyan-200  overflow-hidden shadow-md  text-gray-800 text-base `}
    >
      <div className=" grid grid-cols-[1fr_3fr]">
        <img
          src={img2.src}
          alt="company-icon"
          className="border border-black rounded-full h-full w-full"
        />
        <div className="font-bold text-2xl flex items-center justify-center">
          {text1}
        </div>
      </div>
    </div>
  );
};

export default CustomCardComp;
