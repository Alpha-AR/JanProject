import React, { useState } from 'react';
import Dropdown from '../../../shared/Dropbox';
import CheckMenu from '../../../shared/CheckMenu';
import { CHOICES } from '../../../utils/constants.js'
import { COMPANIESOPTIONS } from '../../../utils/constants.js'
import { PAYRANGEOPTIONS } from '../../../utils/constants.js'

const JobsNav = ({ jobDetails, handleSortChange, handleCompChange, handlePayChange }) => {
  return (
    <div className="shadow-lg border-x border-gray-400 pt-4 px-8 bg-gradient-to-r h-[86vh] from-cyan-50 to-blue-100 ">

      <Dropdown
        options={CHOICES}
        id="sort"
        label="Sort By"
        labelClass='text-lg font-medium '
        value={jobDetails.sort}
        handleChange={(event) => handleSortChange("sort", event.target.value)}
      />
      <div className="mb-4">
        <CheckMenu
          id="compOpt"
          labelText='Companies'
          labelClass='text-lg font-medium '
          options={COMPANIESOPTIONS}
          onCheckChange={(updatedCheckedState) => handleCompChange("filters", updatedCheckedState)}
        />
      </div>
      <div className="mb-4">
        <CheckMenu
          id="payOpt"
          labelText='Pay Range'
          labelClass='text-lg font-medium '
          options={PAYRANGEOPTIONS}
          onCheckChange={(updatedCheckedState) => handlePayChange("filtersPay", updatedCheckedState)}
        />
      </div>
    </div>
  );
};

export default JobsNav;
