import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header";
import Navbar from "../Navbar";
import Vinyl from "../../img/fences/Vinyl.jpeg";
import BlackChain from "../../img/fences/black-chain.jpeg";
import Ornamental from "../../img/fences/ornamental.jpeg";
import Wood from "../../img/fences/wood.jpeg";
import { VinylText, BlackText, OrnamentalText, WoodText } from "../Texts";

const OptionPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
  };

  return (
    <div>
      <Navbar />
      <div className="options">
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="carousel-item">
            <img src={Vinyl} alt="Vinyl Fence" />
            <div className="text-container">
              <p>Maintenance Free Vinyl Fence</p>
              <VinylText />
            </div>
          </div>

          <div className="carousel-item">
            <img src={BlackChain} alt="Black Chain-Link Fence" />
            <div className="text-container">
              <p>Black Chain-Link Fence</p>
              <BlackText />
            </div>
          </div>

          <div className="carousel-item">
            <img src={Ornamental} alt="Ornamental Fence" />
            <div className="text-container">
              <p>Ornamental Fence</p>
              <OrnamentalText />
            </div>
          </div>

          <div className="carousel-item">
            <img src={Wood} alt="Wood Fence" />
            <div className="text-container">
              <p>Wood Fence</p>
              <WoodText />
            </div>
          </div>
        </Slider>
        </div>
        
      </div>
      <Header />
    </div>
  );
};

export default OptionPage;
