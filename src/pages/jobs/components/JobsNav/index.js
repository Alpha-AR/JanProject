import React, { useState } from 'react';

const JobsFilter = ({ onFilterChange }) => {
  const [sortOption, setSortOption] = useState('');
  const [payRanges, setPayRanges] = useState([]);
  const [compOpt, setCompsOpt] = useState([]);

  const sortOptions = [
    { value: 'payAsc', label: 'Pay Ascending' },
    { value: 'payDesc', label: 'Pay Descending' },
    { value: 'dateAsc', label: 'Date Posted Ascending' },
    { value: 'dateDesc', label: 'Date Posted Descending' },
    { value: 'nameAsc', label: 'Name Ascending' },
    { value: 'nameDesc', label: 'Name Descending' }
  ];

  const payRangeOptions = [
    { value: '0-50000', label: '$0 - $50,000' },
    { value: '50001-100000', label: '$50,001 - $100,000' },
    { value: '100001-150000', label: '$100,001 - $150,000' },
    { value: '150001+', label: '$150,001+' }
  ];

  const companiesOptions = [
    { value: '0-50000', label: 'Ola' },
    { value: '50001-100000', label: 'Uber' },
    { value: '100001-150000', label: 'Paytm' },
    { value: '150001+', label: 'Rapido' }
  ];

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onFilterChange({ sortOption: e.target.value, payRanges });
  };

  const handlePayRangeChange = (value) => {
    const updatedRanges = payRanges.includes(value)
      ? payRanges.filter(range => range !== value)
      : [...payRanges, value];
    setPayRanges(updatedRanges);
    onFilterChange({ sortOption, payRanges: updatedRanges });
  };

  const handleCompaniesOptionChange = (e) => {
    // const updatedRanges = payRanges.includes(value)
    //   ? payRanges.filter(range => range !== value)
    //   : [...payRanges, value];
    // setPayRanges(updatedRanges);
    // onFilterChange({ sortOption, payRanges: updatedRanges });
  };

  return (
    <aside className="w-full shadow-lg border-x border-gray-400 p-4 px-8 bg-gradient-to-r from-cyan-50 to-blue-100 z-9">

      {/* Sort by dropdown */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Sort By</label>
        <select name="sortOption" value={sortOption} onChange={handleSortChange} className="mt-2">
          <option value="">Select</option>
          {sortOptions.map(option => (
            <option className='bg-gray-50' key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      {/* Pay range dropdown with checkbox options */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Pay Range</label>
        <div className="mt-2">
          {payRangeOptions.map(option => (
            <div key={option.value}>
              <input
                type="checkbox"
                name="payRange"
                value={option.value}
                checked={payRanges.includes(option.value)}
                onChange={() => handlePayRangeChange(option.value)}
              />
              <span className="ml-2">{option.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Companies</label>
        <div className="mt-2">
          {companiesOptions.map(option => (
            <div key={option.value}>
              <input
                type="checkbox"
                name="companiesOption"
                value={option.value}
                checked={compOpt.includes(option.value)}
                onChange={() => handleCompaniesOptionChange(option.value)}
              />
              <span className="ml-2">{option.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default JobsFilter;
