import React from "react";
import { styles } from "./style.js";
import { banner1 } from "../../../assets/images";
import { Image, CompanyCardCarousel, JobsCardCarousal } from "../../../shared";

const Home = ({}) => {
  return (
    <>
      <div className={styles.container1}>
        <div className={styles.leftcontainer}>
          <h1 className={`text-6xl font-bold mb-8`}>LINKEDIN JOBS</h1>
          <p className={`${styles.smalltext} text-justify`}>
            Empowering your journey: Every day, we&apos;re matching
            professionals with their ideal opportunities, actively shaping the
            future of work and career development. Our commitment goes beyond
            job connections; it&apos;s about providing resources, insights, and
            a supportive community that nurtures professional growth and
            personal fulfillment. We&apos;re dedicated to making your
            professional aspirations a reality, fostering environments where
            careers flourish.
          </p>
        </div>
        <div className={styles.imageright}>
          <Image image={banner1} className="w-50 h-50" imageText="Banner" />
        </div>
      </div>
      <div className={styles.container2}>
        <div className=" container mx-auto text-center  bg-gradient-to-r from-blue-700 to-cyan-700 text-transparent bg-clip-text py-5">
          <CompanyCardCarousel />
          <JobsCardCarousal />
        </div>
      </div>
    </>
  );
};

export default Home;
