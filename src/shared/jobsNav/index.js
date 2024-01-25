import React from 'react';

const JobsFilter = ( /*{ onFilterChange }*/) => {
  // const handleFilterChange = (e) => {
  //   // Call the passed in `onFilterChange` function with the new filter value
  //   onFilterChange(e.target.value);
  // };

  return (
    <aside className="w-full border-r border-gray-50 p-4">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Category</label>
        <div className="mt-2">
          <div>
            <input type="checkbox" value="Tech" /*onChange={handleFilterChange} */ />
            <span className="ml-2">Tech</span>
          </div>
          <div>
            <input type="checkbox" value="Marketing" /* onChange={handleFilterChange} */ />
            <span className="ml-2">Marketing</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default JobsFilter;
