import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wood from "../../img/fences/wood.jpeg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
}


const WoodCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="seperate-options">
      <div className="options">
        <div className="carousel-container">
          <Slider {...settings}>
            <div className="carousel-item">
              <img src={Wood} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Wood} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Wood} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Wood} alt="Vinyl Fence" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WoodCarousel;
