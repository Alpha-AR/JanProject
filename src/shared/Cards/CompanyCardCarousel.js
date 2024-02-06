import React from "react";
import Slider from "react-slick";
import CustomCardComp from "./CustomCardCompany";
import { CARD_JSON } from "../../utils/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanyCardCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <>
      <div className="text-5xl font-bold my-8">OUR RECRUITERS </div>
      <Slider {...settings}>
        {CARD_JSON.slice(0, 5).map((card, index) => (
          <div
            key={index}
            className="flex-none h-full w-1/4 gap-4 flex items-center px-6 pb-4 text-white"
          >
            <CustomCardComp img2={card.companyLogo} text1={card.companyName} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CompanyCardCarousel;
