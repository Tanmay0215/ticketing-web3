import Slider from "react-slick";
import SliderCard from "./SliderCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

function MainSlider({ data }) {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div className="active-one w-4 h-0.5 rounded-sm bg-gray-300 cursor-pointer mt-6"></div>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="w-screen">
            <SliderCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainSlider;
