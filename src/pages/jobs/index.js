import React from 'react';
import CustomCard from '../../shared/customCard';
import JobsFilter from '../../shared/jobsNav';
import ola from '../../assets/images/ola.png';
import developer from '../../assets/images/developer.png';
import { styles } from './style';

const JobsPage = () => {
  const cards = [/* Array of data for cards */];

  return (
    <div className="container mx-auto grid grid-cols-[1fr_4fr]">
      <JobsFilter /* props */ />

      <div className={styles.cardGrid}>
        <CustomCard
        img1= {developer.src} // path to your first image
        img2= {ola.src} // path to your second image
        text1="OLA"
        text2="Backend Dev"
        text3="99LPA"
        text4="Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix"
        />  
        <CustomCard
        img1= {developer.src} // path to your first image
        img2= {ola.src} // path to your second image
        text1="OLA"
        text2="Backend Dev"
        text3="99LPA"
        text4="Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix"
        />
        <CustomCard
        img1= {developer.src} 
        img2= {ola.src} 
        text1="OLA"
        text2="Backend Dev"
        text3="99LPA"
        text4="Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix"
        /><CustomCard
        img1= {developer.src} // path to your first image
        img2= {ola.src} // path to your second image
        text1="OLA"
        text2="Backend Dev"
        text3="99LPA"
        text4="Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix"
        />
      </div>
    </div>
  );
};

export default JobsPage;
