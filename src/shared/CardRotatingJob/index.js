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
    speed: 1000, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "ease", 
    pauseOnHover: true, 
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {cardJSON.slice(0, 7).map((card, index) => (
            <div key={index} className="flex-none  w-1/4 gap-4 flex items-center justify-center px-10 p-6 text-white">

                <CustomCardJob
                    key={index}
                    img1={card.img1}
                    img2={card.img2}
                    text1={card.text1}
                    text2={card.text2}
                    text3={card.text3}
                    text4={card.text4}
                />
          </div>
        ))}
    </Slider>
  );
};

export default CardMovingJob;
