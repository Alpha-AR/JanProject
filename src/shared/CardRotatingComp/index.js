import React from 'react';
import Slider from 'react-slick'; 
import CustomCardComp from './CustomCardComp';
import { cardJSON } from '../../utils/constants';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CardMovingComp = ({ slides }) => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 1000, 
    slidesToShow: slides, 
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
        <div key={index} className="flex-none h-full w-1/4 gap-4 flex items-center px-10 p-6 text-white">
          <CustomCardComp
            img2={card.img2}
            text1={card.text1}
          />
        </div>
      ))}
    </Slider>
  );
};

export default CardMovingComp;
