import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from "./EventCard";
function UpcomingSlider({ data }) {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="w-screen">
            <EventCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default UpcomingSlider;
