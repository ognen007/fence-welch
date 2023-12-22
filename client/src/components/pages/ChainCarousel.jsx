import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chain1 from "../../img/carousel-imgs/chain/Black Chain Link (1).jpeg";
import Chain2 from "../../img/carousel-imgs/chain/Black Chain Link (2).jpeg";
import Chain3 from "../../img/carousel-imgs/chain/Black Chain Link (3).jpeg";
import Chain4 from "../../img/carousel-imgs/chain/Black Chain Link (1).jpeg";
import Chain5 from "../../img/carousel-imgs/chain/Black Chain Link.jpeg";
import Chain6 from "../../img/carousel-imgs/chain/Black Chain Link.jpg";
import Chain7 from "../../img/carousel-imgs/chain/Galvanized Chain Link (1).jpg";
import Chain8 from "../../img/carousel-imgs/chain/Black Chain Link (2).jpeg";
import Chain9 from "../../img/carousel-imgs/chain/Black Chain Link (3).jpeg";
import Chain10 from "../../img/carousel-imgs/chain/Galvanized Chain Link (4).jpg";

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
              <img src={Chain1} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Chain2} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Chain3} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Chain4} alt="Vinyl Fence" />
            </div>
            
            <div className="carousel-item">
              <img src={Chain5} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Chain6} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Chain7} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Chain8} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Chain9} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Chain10} alt="Vinyl Fence" />
            </div>


          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WoodCarousel;
