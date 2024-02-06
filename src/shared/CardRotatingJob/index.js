import React from 'react';
import CustomCardJob from '../CustomCardJob';
import Slider from 'react-slick';
import { cardJSON } from '../../utils/constants';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardMovingJob = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "ease",
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <>
      <div className="text-5xl font-bold my-8 ">TRENDING JOBS TODAY</div>
      <Slider {...settings}>
        {cardJSON.slice(0, 8).map((card, index) => (
          <div key={index} className="gap-1 px-10 p-6 text-white">

            <CustomCardJob
              key={index}
              img1={card.jobLogo}
              img2={card.companyLogo}
              text1={card.companyName}
              text2={card.jobTitle}
              text3={'₹' + card.salary + 'L/Yr'}
              text4={card.jobDesc}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CardMovingJob;