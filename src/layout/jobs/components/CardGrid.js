import React from "react";
import { CustomCardJob } from "../../../shared";
import { FilterSortCards } from "../../../utils/helper";
import { customToast } from "../../../utils/helper";
import { TOAST_TYPE } from '../../../utils/constants';

const CardGrid = ({ jobDetails }) => {
   const sortedAndFilteredCards = FilterSortCards({ jobDetails });
   if (sortedAndFilteredCards.length === 0) customToast("No Jobs Found", TOAST_TYPE.ERROR);
   return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols justify-center gap-4 p-4 pt-4 overflow-scroll">
         {sortedAndFilteredCards.map((card, index) => (
            <CustomCardJob
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
