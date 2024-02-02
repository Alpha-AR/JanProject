import CustomCard from "../../../shared/CustomCardJob"
import { cardJSON } from "../../../utils/constants";
import { COMPANIESOPTIONS, PAYRANGEOPTIONS } from "../../../utils/constants";

const CardGrid = ({ jobDetails }) => {
    const sortCards = (cards, sortCriteria) => {
        switch (sortCriteria) {
            case 'NamAsc':
                return cards.sort((a, b) => a.companyName.localeCompare(b.companyName));
            case 'NamDesc':
                return cards.sort((a, b) => b.companyName.localeCompare(a.companyName));
            case 'PayAsc':
                return cards.sort((a, b) => parseFloat(a.salary) - parseFloat(b.salary));
            case 'PayDesc':
                return cards.sort((a, b) => parseFloat(b.salary) - parseFloat(a.salary));
            default:
                return cards;
        }
    };
    const filterCards = (cards, filters, filtersPay, searchText) => {
        const filterCompanyNames = filters.map(index => COMPANIESOPTIONS[index].value);
        const filterSalaryRanges = filtersPay.map(index => PAYRANGEOPTIONS[index]);

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

            return filterByCompany
                && filterBySalary
                && filterBySearch;
        });
    };
    const sortedAndFilteredCards = sortCards(filterCards(cardJSON, jobDetails.filters, jobDetails.filtersPay, jobDetails.search), jobDetails.sort);
    return (
        <div className={'grid grid-cols-4 gap-4 pb-4'}>
            {sortedAndFilteredCards.map((card) => (
                <CustomCard
                    img1={card.jobLogo}
                    img2={card.companyLogo}
                    text1={card.companyName}
                    text2={card.jobTitle}
                    text3={'₹' + card.salary + 'L/Yr'}
                    text4={card.jobDesc}
                />
            ))}
        </div>
    )
}

export default CardGrid;
