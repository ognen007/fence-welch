import React from 'react';
import Vid from "../img/Untitled.mp4"
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header background-video">
      <div className="header-content">
        <p className="header-text">
          Know Your Fence Style and <br />Layout?<br />
          <p className='header-para'>
          Click the button below to draw your fence<br/>
          so we can get the ball rolling on this <br/>
          project!
          </p>
        </p>
        <br />
        <Link to="/draw-my-fence" className="header-btn">Draw fence</Link>
      </div>


  <video className="video" autoPlay muted loop>
    <source src={Vid} type="video/mp4" />
  </video>
    </div>
  );
};

export default Header;
