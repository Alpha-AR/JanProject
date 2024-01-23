
// import Image from "next/image";
// import { Inter } from "next/font/google";
import banner1 from '../assets/images/banner1.png'
// import banner2 from '../assets/banner2.png'
import ola from '../assets/images/ola.png'
import uber from '../assets/images/uber.png'
import paytm from '../assets/images/paytm.png'

// const inter = Inter({ subsets: ["latin"] });
import React from 'react';
import {styles} from './style.js';
import CompanyCard from '../shared/CompanyCard';
import TrendingCard from '../shared/TrendingCard';

const companies = [
  { name: "Paytm", logo: paytm },
  { name: "Ola", logo: ola },
  { name: "Uber", logo: uber },
];

const trending = [
  { name: "Card 1", description: "Description for card 1" },
  { name: "Card 2", description: "Description for card 2" },
  { name: "Card 3", description: "Description for card 3" },
];

export default function App() {
return (
<>
<div className={styles.container}>
  <div className={styles.leftcontainer}>
  <h1 className={styles.boldtext}>LOREM  IPSUM</h1>
        <p className={styles.smalltext}>
          Dolor cillum reprehenderit est excepteur ut non culpa fugiat minim aute. Sunt Lorem sunt do commodo eu incididunt aute adipisicing deserunt in enim aute sunt. Nulla proident qui occaecat veniam mollit non velit id sint. Consequat et ipsum magna duis. Minim non quis amet nisi tempor.
        </p>

        <div class={styles.searchbox}>
        <input
        class={styles.searchinput}
        type="text"
        placeholder="Search"
        />

        </div>
  </div>
  <div className={styles.imageright}>
    <img
        src={banner1.src}
        className={styles.image}
        ></img>
    </div>
    
  </div>
  {/* <h1 className={styles.boldtext1}>Companies</h1> */}
  <div className="flex flex-col items-center min-h-screen py-12">
      <div className="text-4xl font-bold mb-8">COMPANIES</div>
      <div className="flex flex-row justify-center gap-4">
        {companies.map((company) => (
          <CompanyCard key={company.name} name={company.name} logo={company.logo} />
        ))}
      </div>
      <div className="text-4xl font-bold mb-8 mt-16">TRENDING</div>
      <div className="grid grid-cols-3 gap-4">
        {trending.map((trend) => (
          <TrendingCard key={trend.name} name={trend.name} description={trend.description} />
        ))}
      </div>
    </div>
</>
);
}