import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wood from "../../img/fences/wood.jpeg";
import WoodCedar1 from "../../img/carousel-imgs/Western Red Cedar 2-Rail Solid Board Privacy.jpg";
import WoodCedar2 from "../../img/carousel-imgs/Western Red Cedar 3-Rail Batten Board Pivacy with Black Steel Post Master Posts.jpg";
import WoodCedar4 from "../../img/carousel-imgs/Western Red Cedar 3-Rail Solid Board Privacy.jpg";
import WoodCedar5 from "../../img/carousel-imgs/Western Red Cedar Alternate Board Privacy.jpg";
import WoodCedar6 from "../../img/carousel-imgs/Western Red Cedar Horizontal Privacy with Black Steel Posts.jpg";

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
              <img src={WoodCedar1} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={WoodCedar2} alt="Vinyl Fence" />
            </div>


            <div className="carousel-item">
              <img src={WoodCedar4} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={WoodCedar5} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={WoodCedar6} alt="Vinyl Fence" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WoodCarousel;
