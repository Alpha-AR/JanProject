import React from 'react';
import CustomCard from "../../../shared/Cards/CustomCardJob";
import FilterSortCards from '../containers/FilterSortCards'; 

const CardGrid = ({ jobDetails }) => {
  const sortedAndFilteredCards = FilterSortCards({ jobDetails });

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols justify-center gap-4 pb-4 overflow-scroll">
      {sortedAndFilteredCards.map((card, index) => (
        <CustomCard
          key={index}
          img1={card.jobLogo}
          img2={card.companyLogo}
          text1={card.companyName}
          text2={card.jobTitle}
          text3={"₹" + card.salary + "L/Yr"}
          text4={card.jobDesc}
        />
      ))}
    </div>
  );
};

export default CardGrid;
