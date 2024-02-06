import React from "react";
import JobsNav from "./JobsNav";
import Input from "../../../shared/Input";
import CardGrid from "./CardGrid";
import Button from "../../../shared/Button";

import { useState, useEffect } from "react";
const Jobs = ({ jobDetails, handleSortChange, handleCompFilter, handlePayFilter, handleSearchChange }) => {
   const [isExpanded, setIsExpanded] = useState(false);
   const toggleExpansion = () => setIsExpanded(!isExpanded);
   useEffect(() => {
      const updateSize = () => {
         if (window.innerWidth >= 1024) {
            //screen md ka width
            setIsExpanded(true);
         }
      };
      window.addEventListener("resize", updateSize);
      updateSize();

      return () => window.removeEventListener("resize", updateSize);
   }, []);

   return (
      <div className="grid lg:grid-cols-[1fr_4fr] h-[90vh] md:h-[86vh]">
         <div
            className={`transition-height duration-500 ease-in-out overflow-hidden ${isExpanded ? "h-[86vh]" : "h-0"} `}
         >
            <JobsNav
               handleSortChange={handleSortChange}
               jobDetails={jobDetails}
               handleCompFilter={handleCompFilter}
               handlePayFilter={handlePayFilter}
            />
         </div>
         <div className="flex flex-col overflow-hidden">
            <div className="px-4">
               <Input
                  type="text"
                  placeholder="Search by company | Search by role"
                  value={jobDetails.search}
                  className="bg-gray-50  my-2 rounded-xl "
                  handleChange={(event) => handleSearchChange("search", event.target.value)}
               />
            </div>
            <CardGrid jobDetails={jobDetails} />
         </div>
         <Button
            className=" z-10 w-full py-2 text-center font-bold bg-gradient-to-r from-blue-300 to-cyan-300 text-white lg:hidden"
            onClick={() => toggleExpansion()}
            text={isExpanded ? "Hide Options" : "Show Options"}
         ></Button>
      </div>
   );
};
export default Jobs;
