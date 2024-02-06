// FilterSortCards.js
import React from 'react';
import { CARD_JSON, COMPANIES_OPTIONS, PAY_RANGE_LIST } from "../../../utils/constants";
import { sortCards } from "../../../utils/helper";

const FilterSortCards = ({ jobDetails }) => {
  const filterCards = (cards, filters, filtersPay, searchText) => {
    const filterCompanyNames = filters.map((index) => COMPANIES_OPTIONS[index].value);
    const filterSalaryRanges = filtersPay.map((index) => PAY_RANGE_LIST[index]);
    searchText = searchText.trim();

    return cards.filter((card) => {
      const filterByCompany = !filterCompanyNames.length || filterCompanyNames.includes(card.companyName);
      const filterBySearch =
        !searchText.length ||
        card.jobTitle.toLowerCase().startsWith(searchText.toLowerCase()) ||
        card.companyName.toLowerCase().startsWith(searchText.toLowerCase()) ||
        card.jobDesc.toLowerCase().startsWith(searchText.toLowerCase());
      const filterBySalary =
        !filterSalaryRanges.length ||
        filterSalaryRanges.some((range) => {
          const salary = parseFloat(card.salary);
          return salary >= range.value1 && salary <= range.value2;
        });

      return filterByCompany && filterBySalary && filterBySearch;
    });
  };

  const sortedAndFilteredCards = sortCards(
    filterCards(CARD_JSON, jobDetails.filters, jobDetails.filtersPay, jobDetails.search),
    jobDetails.sort
  );

  return sortedAndFilteredCards;
};

export default FilterSortCards;