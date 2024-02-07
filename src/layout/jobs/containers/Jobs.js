import { JobsComponent } from "../components";
import React, { useState } from "react";
const Jobs = () => {
  const [jobDetails, setJobDetails] = useState({
    sort: "NamAsc",
    filters: [],
    filtersPay: [],
    search: "",
  });

  const handleSortChange = (key, value) => {
    setJobDetails((prev) => ({ ...prev, [key]: value }));
  };

  const handleCompFilter = (key, updatedCheckedState) => {
    const newFilters = updatedCheckedState.reduce((acc, curr, idx) => {
      if (curr) acc.push(idx);
      return acc;
    }, []);
    setJobDetails((prev) => ({ ...prev, [key]: newFilters }));
  };

  const handleSearchChange = (key, value) => {
    setJobDetails((prev) => ({ ...prev, [key]: value }));
  };

  const handlePayFilter = (key, updatedCheckedState) => {
    const newFilters = updatedCheckedState.reduce((acc, curr, idx) => {
      if (curr) acc.push(idx);
      return acc;
    }, []);
    setJobDetails((prev) => ({ ...prev, [key]: newFilters }));
  };

  return (
    <JobsComponent
      jobDetails={jobDetails}
      handleSortChange={handleSortChange}
      handleCompFilter={handleCompFilter}
      handlePayFilter={handlePayFilter}
      handleSearchChange={handleSearchChange}
    />
  );
};
export default Jobs;
