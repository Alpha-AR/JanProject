import React from 'react';
import CustomCard from '../../../shared/CustomCardJob';
import JobsFilter from './JobsNav';
import { styles } from './style';
import { cardJSON } from '../../../utils/constants';
import Input from '../../../shared/Input';
import CardMovingComp from '../../../shared/CardRotatingComp';

const Jobs = ({ }) => {
    return (
        <div>
            <div className=" mx-auto grid grid-cols-[1fr_4fr]">
                <JobsFilter />


                    <div className='flex flex-col px-5'>
                        <Input
                            type="text"
                            placeholder="Search..."
                            className='bg-gray-50  mb-0 my-5 rounded-xl px-2'
                        />
                        <div className={styles.cardGrid}>
                            {cardJSON.slice(0, 7).map((card, index) => (
                                <CustomCard
                                    key={index}
                                    img1={card.img1}
                                    img2={card.img2}
                                    text1={card.text1}
                                    text2={card.text2}
                                    text3={card.text3}
                                    text4={card.text4}
                                />
                            ))}
                            {/* <CardMovingComp/> */}
                        </div>
                    </div>
                </div>
            </div>

    );
};
export default Jobs;