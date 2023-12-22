import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vinyl1 from "../../img/carousel-imgs/vinyl/3-Rail (1).jpg";
import Vinyl2 from "../../img/carousel-imgs/vinyl/3-Rail (2).jpg";
import Vinyl3 from "../../img/carousel-imgs/vinyl/3-Rail (3).jpg";
import Vinyl4 from "../../img/carousel-imgs/vinyl/3-Rail.jpg";
import Vinyl5 from "../../img/carousel-imgs/vinyl/6' Tan Vinyl Privacy (1).jpg";
import Vinyl6 from "../../img/carousel-imgs/vinyl/6' Tan Vinyl Privacy.jpeg";
import Vinyl7 from "../../img/carousel-imgs/vinyl/6' Tan Vinyl Privacy.jpg";
import Vinyl8 from "../../img/carousel-imgs/vinyl/6' Tan Vinyl Privacy.png";
import Vinyl9 from "../../img/carousel-imgs/vinyl/6' White Vinyl Privacy (1).jpeg";
import Vinyl10 from "../../img/carousel-imgs/vinyl/6' White Vinyl Privacy.jpeg";
import Vinyl11 from "../../img/carousel-imgs/vinyl/6' White Vinyl Privacy.png";

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
              <img src={Vinyl1} alt="Vinyl Fence" />
            </div>
            
            <div className="carousel-item">
              <img src={Vinyl3} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Vinyl4} alt="Vinyl Fence" />
            </div>
            <div className="carousel-item">
              <img src={Vinyl5} alt="Vinyl Fence" />
            </div>
            <div className="carousel-item">
              <img src={Vinyl6} alt="Vinyl Fence" />
            </div>
            <div className="carousel-item">
              <img src={Vinyl7} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Vinyl9} alt="Vinyl Fence" />
            </div>
            <div className="carousel-item">
              <img src={Vinyl10} alt="Vinyl Fence" />
            </div>
            <div className="carousel-item">
              <img src={Vinyl11} alt="Vinyl Fence" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WoodCarousel;
