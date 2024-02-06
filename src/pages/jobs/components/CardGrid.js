import React from 'react';
import CustomCard from "../../../shared/Cards/CustomCardJob";
import FilterSortCards from '../containers/FilterSortCards'; 

const CardGrid = ({ jobDetails }) => {
  const sortedAndFilteredCards = FilterSortCards({ jobDetails });

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols justify-center gap-4 p-4 pt-4 overflow-scroll">
      {sortedAndFilteredCards.map((card, index) => (
        <CustomCard
          key={index}
          jobLogo={card.jobLogo}
          companyLogo={card.companyLogo}
          companyName={card.companyName}
          jobTitle={card.jobTitle}
          salary={"₹" + card.salary + "L/Yr"}
          jobDesc={card.jobDesc}
        />
      ))}
    </div>
  );
};

export default CardGrid;
