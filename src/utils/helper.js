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
export default sortCards;
