import { CARD_JSON, COMPANIES_OPTIONS, PAY_RANGE_LIST } from "./constants";
import toast from "react-hot-toast";

export const customToast = (message, type) => {
   switch (type) {
      case "casual":
         toast(message, {
            style: {
               background: "#A4F3FC",
               color: "black",
            },
         });
         break;
      case "alert":
         toast(message, {
            style: {
               background: "#ef4444",
               color: "white",
            },
         });
         break;
   }
};

export const sortCards = (cards, sortCriteria) => {
   switch (sortCriteria) {
      case "NamAsc":
         return cards.sort((a, b) => a.companyName.localeCompare(b.companyName));
      case "NamDesc":
         return cards.sort((a, b) => b.companyName.localeCompare(a.companyName));
      case "JobAsc":
         return cards.sort((a, b) => a.jobTitle.localeCompare(b.jobTitle));
      case "JobDesc":
         return cards.sort((a, b) => b.jobTitle.localeCompare(a.jobTitle));
      case "PayAsc":
         return cards.sort((a, b) => parseFloat(a.salary) - parseFloat(b.salary));
      case "PayDesc":
         return cards.sort((a, b) => parseFloat(b.salary) - parseFloat(a.salary));

      default:
         return cards;
   }
};
export const FilterSortCards = ({ jobDetails }) => {
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
