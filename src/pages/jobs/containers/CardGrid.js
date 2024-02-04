import React from 'react';
import CustomCard from "../../../shared/CustomCardJob";
import { cardJSON, COMPANIESOPTIONS, PAYRANGEOPTIONS } from "../../../utils/constants";
import sortCards from '../../../utils/helper'; 

const CardGrid = ({ jobDetails }) => {
    const filterCards = (cards, filters, filtersPay, searchText) => {
        const filterCompanyNames = filters.map(index => COMPANIESOPTIONS[index].value);
        const filterSalaryRanges = filtersPay.map(index => PAYRANGEOPTIONS[index]);
        searchText = searchText.trim();

        return cards.filter(card => {
            const filterByCompany = !filterCompanyNames.length || filterCompanyNames.includes(card.companyName);
            const filterBySearch = !searchText.length ||
                card.jobTitle.toLowerCase().startsWith(searchText.toLowerCase()) ||
                card.companyName.toLowerCase().startsWith(searchText.toLowerCase()) ||
                card.jobDesc.toLowerCase().startsWith(searchText.toLowerCase());
            const filterBySalary = !filterSalaryRanges.length || filterSalaryRanges.some(range => {
                const salary = parseFloat(card.salary);
                return salary >= range.value1 && salary <= range.value2;
            });

            return filterByCompany && filterBySalary && filterBySearch;
        });
    };

    const sortedAndFilteredCards = sortCards(filterCards(cardJSON, jobDetails.filters, jobDetails.filtersPay, jobDetails.search), jobDetails.sort);

    return (
        <div className={'grid grid-cols-4 gap-4 pb-4 overflow-scroll'}>
            {sortedAndFilteredCards.map((card, index) => (
                <CustomCard
                    key={index}
                    img1={card.jobLogo}
                    img2={card.companyLogo}
                    text1={card.companyName}
                    text2={card.jobTitle} 
                    text3={'₹' + card.salary + 'L/Yr'}
                    text4={card.jobDesc}
                />
            ))}
        </div>
    );
}

export default CardGrid;
