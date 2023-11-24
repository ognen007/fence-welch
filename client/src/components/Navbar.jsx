import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/DIYFS.png";
import Chain from "../img/nav-fences/Chain.jpg";
import Ornamental from "../img/nav-fences/Ornamental.jpg";
import Vinyl from "../img/nav-fences/Vinyl.jpg";
import Wood from "../img/nav-fences/Wood.jpg";

const Navbar = () => {
  const email = "robbie@topnotchfence.com";
  const [isStyleHovered, setIsStyleHovered] = useState(false);

  return (
    <>
        <div className="navbar">
      <Link
        to="/"
        className="right-nav"
        onMouseEnter={() => setIsStyleHovered(false)}
      >
        <img className="nav-logo" src={Logo} alt="Logo" />
      </Link>
      <div
        className="left-nav"
        onMouseEnter={() => setIsStyleHovered(false)}
      >
        <Link
          to="/style"
          className="nav-element"
          onMouseEnter={() => setIsStyleHovered(true)}
        >
          Style
        </Link>
        <a href={`mailto:${email}`} className="nav-element">
          Contact
        </a>
        <Link to="/draw-my-fence" className="nav-element nav-btn">
          Draw Fence
        </Link>
      </div>
    </div>
    {isStyleHovered && <UnderLineBar />}</>
  );
};

const UnderLineBar = () => {
  return (
    <div className="underline" style={{ opacity: "0.99", zIndex: 999 }}>
      <div className="underline-container">
        <div className="element-product">
          <img src={Chain} alt="" />
          <br />
          <p>Chain Link</p>
        </div>

        <div className="element-product">
          <img src={Ornamental} alt="" />
          <br />
          <p>Ornamental</p>
        </div>

        <div className="element-product">
          <img src={Vinyl} alt="" />
          <br />
          <p>Vinyl</p>
        </div>

        <div className="element-product">
          <img src={Wood} alt="" />
          <br />
          <p>Wood</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
