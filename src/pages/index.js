
import ola from '../assets/images/ola.png'
import developer from '../assets/images/developer.png'
import React from 'react';
import {styles} from './style.js';
import { Banner1Image } from '../assets/images';
import CustomCard  from '../shared/customCard/index.js';



export default function App() {
return (
<>
<div className={styles.container}>
  <div className={styles.leftcontainer}>
      <h1 className={styles.boldtext}>LINKEDIN JOBS</h1>
        <p className={styles.smalltext}>
        Empowering your journey: Every day, we're matching professionals with their ideal opportunities, actively shaping the future of work and career development. Our commitment goes beyond job connections; it's about providing resources, insights, and a supportive community that nurtures professional growth and personal fulfillment. We're dedicated to making your professional aspirations a reality, fostering environments where careers flourish.</p>
        <div class={styles.searchbox}>
          <input
          class={styles.searchinput}
          type="text"
          placeholder="Search"
          />
        </div>
  </div>
  <div className={styles.imageright}>
    <Banner1Image/>
    </div>
    
  </div>
  <div className="flex flex-col items-center min-h-screen py-12">
      <div className="text-4xl font-bold mb-8">COMPANIES</div>
        <div className="flex flex-row justify-center gap-4">



        </div>
      <div className="text-4xl font-bold mb-8 mt-16">TRENDING</div>
      <div className="grid grid-cols-5 gap-4 items-center" >
        <CustomCard
        img1= {developer.src} 
        img2= {ola.src} 
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
        img1= {developer.src}
        img2= {ola.src}
        text1="OLA"
        text2="Backend Dev"
        text3="99LPA"
        text4="Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix"
        />
      </div>
    </div>
</>
);
}