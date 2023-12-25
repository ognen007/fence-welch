import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ornamental1 from "../../img/carousel-imgs/ornamental/Flat Top (1).jpg";
import Ornamental2 from "../../img/carousel-imgs/ornamental/Flat Top (2).jpg";
import Ornamental3 from "../../img/carousel-imgs/ornamental/Flat Top (3).jpg";
import Ornamental4 from "../../img/carousel-imgs/ornamental/Flat Top (4).jpg";
import Ornamental5 from "../../img/carousel-imgs/ornamental/Flat Top.jpeg";
import Ornamental6 from "../../img/carousel-imgs/ornamental/Flat Top.jpg";
import Ornamental7 from "../../img/carousel-imgs/ornamental/Spear Top (1).jpeg";
import Ornamental8 from "../../img/carousel-imgs/ornamental/Spear Top Ornamental (1).jpg";
import Ornamental9 from "../../img/carousel-imgs/ornamental/Spear Top Ornamental.jpg";
import Ornamental10 from "../../img/carousel-imgs/ornamental/Spear Top.jpeg";
import Ornamental11 from "../../img/carousel-imgs/ornamental/Spear Top2.jpg";

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
    <div className="seperate-options" style={{background: "#121212", color: "#fff",textAlign: "center"}}>
      <p style={{background: "#121212", color: "#fff", fontSize: "2rem", paddingTop: "40px"}}>Ornamental</p>
      <i style={{fontSize: "1rem"}}>Ornamental aluminum/steel fencing is a stylish, low-maintenance choice for homeowners</i>
      <div className="options">
        <div className="carousel-container">
          <Slider {...settings}>
            <div className="carousel-item">
              <img src={Ornamental1} alt="Vinyl Fence" />
            </div>


            <div className="carousel-item">
              <img src={Ornamental3} alt="Vinyl Fence" />
            </div>

            <div className="carousel-item">
              <img src={Ornamental4} alt="Vinyl Fence" />
            </div>
            <div className="carousel-item">
              <img src={Ornamental5} alt="Vinyl Fence" />
            </div>
            <div className="carousel-item">
              <img src={Ornamental6} alt="Vinyl Fence" />
            </div>
            <div className="carousel-item">
              <img src={Ornamental7} alt="Vinyl Fence" />
            </div>
            <div className="carousel-item">
              <img src={Ornamental8} alt="Vinyl Fence" />
            </div>
            <div className="carousel-item">
              <img src={Ornamental9} alt="Vinyl Fence" />
            </div>
            <div className="carousel-item">
              <img src={Ornamental10} alt="Vinyl Fence" />
            </div>
            <div className="carousel-item">
              <img src={Ornamental11} alt="Vinyl Fence" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WoodCarousel;
