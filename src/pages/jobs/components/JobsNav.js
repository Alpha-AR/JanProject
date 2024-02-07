import React, { useState } from "react";
import { Dropdown, MultiCheckMenu } from "../../../shared";
import {
  COMPANIES_OPTIONS,
  PAY_RANGE_LIST,
  SORT_OPTIONS,
} from "../../../utils/constants.js";

const JobsNav = ({
  jobDetails,
  handleSortChange,
  handleCompFilter,
  handlePayFilter,
}) => {
  return (
    <div className="shadow-lg border-x border-gray-400 pt-4 px-8 bg-gradient-to-r h-[86vh] from-cyan-50 to-blue-100 ">
      <Dropdown
        options={SORT_OPTIONS}
        id="sort"
        label="Sort By"
        labelClass="text-lg font-medium "
        value={jobDetails.sort}
        handleChange={(event) => handleSortChange("sort", event.target.value)}
      />
      <div className="mb-4">
        <MultiCheckMenu
          id="compOpt"
          labelText="Companies"
          labelClass="text-lg font-medium"
          options={COMPANIES_OPTIONS}
          onCheckChange={(updatedCheckedState) =>
            handleCompFilter("filters", updatedCheckedState)
          }
        />
      </div>
      <div className="mb-4">
        <MultiCheckMenu
          id="payOpt"
          labelText="Pay Range"
          labelClass="text-lg font-medium"
          options={PAY_RANGE_LIST}
          onCheckChange={(updatedCheckedState) =>
            handlePayFilter("filtersPay", updatedCheckedState)
          }
        />
      </div>
    </div>
  );
};

export default JobsNav;
