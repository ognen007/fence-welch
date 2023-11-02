import React, { useState } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Vinyl from "../../img/fences/Vinyl.jpeg";
import BlackChain from "../../img/fences/black-chain.jpeg";
import Ornamental from "../../img/fences/ornamental.jpeg";
import Wood from "../../img/fences/wood.jpeg";
import { VinylText, BlackText, OrnamentalText, WoodText } from "../Texts";

const OptionPage = () => {
  const [vinyl, setVinyl] = useState(false);
  const [black, setBlack] = useState(false);
  const [ornamental, setOrnamental] = useState(false);
  const [wood, setWood] = useState(false);
  const [containerHeight, setContainerHeight] = useState(290);

  const toggleVinyl = () => {
    setVinyl((prevState) => !prevState);
    setContainerHeight((prevHeight) =>
      vinyl ? prevHeight - 10 : prevHeight + 10
    );
  };

  const toggleBlack = () => {
    setBlack((prevState) => !prevState);
    setContainerHeight((prevHeight) =>
      black ? prevHeight - 10 : prevHeight + 10
    );
  };

  const toggleOrnamental = () => {
    setOrnamental((prevState) => !prevState);
    setContainerHeight((prevHeight) =>
      ornamental ? prevHeight - 10 : prevHeight + 10
    );
  };

  const toggleWood = () => {
    setWood((prevState) => !prevState);
    setContainerHeight((prevHeight) =>
      wood ? prevHeight - 10 : prevHeight + 10
    );
  };

  return (
    <div>
      <Navbar />
      <div className="photos" style={{ height: `${containerHeight}vh` }}>
        <br/>
        <div className="gallery">
          <p>Maintenance Free Vinyl Fence</p>
          <img src={Vinyl} alt="Vinyl Fence" />
          <br />
          <button onClick={toggleVinyl}>Learn more</button>
          {vinyl ? <VinylText /> : null}
          <br />

          <p>Black Chain-Link Fence</p>
          <img src={BlackChain} alt="Black Chain-Link Fence" />
          <br />
          <button onClick={toggleBlack}>Learn more</button>
          {black ? <BlackText /> : null}
          <br />

          <p>Ornamental Fence</p>
          <img src={Ornamental} alt="Ornamental Fence" />
          <br />
          <button onClick={toggleOrnamental}>Learn more</button>
          {ornamental ? <OrnamentalText /> : null}
          <br />

          <p>Wood Fence</p>
          <img src={Wood} alt="Wood Fence" />
          <br />
          <button onClick={toggleWood}>Learn more</button>
          {wood ? <WoodText /> : null}
          <br />
        </div>
      </div>
      <Header />
    </div>
  );
};

export default OptionPage;
