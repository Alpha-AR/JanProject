import React from "react";
import CustomCardJob from "./CustomCardJob";
import Slider from "react-slick";
import { CARD_JSON } from "../../utils/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JobsCardCarousal = () => {
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
        {CARD_JSON.slice(0, 8).map((card, index) => (
          <div key={index} className="gap-1 px-10 p-6 text-white">
            <CustomCardJob
              key={index}
              jobLogo={card.jobLogo}
              companyLogo={card.companyLogo}
              companyName={card.companyName}
              jobTitle={card.jobTitle}
              salary={`₹ ${card.salary} L/Yr`}
              jobDesc={card.jobDesc}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default JobsCardCarousal;
