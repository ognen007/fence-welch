import React from 'react'
import Navbar from '../Navbar'
import Vinyl from "../../img/fences/Vinyl.jpeg";
import BlackChain from "../../img/carousel-imgs/chain/Black Chain Link (3).jpeg";
import Ornamental from "../../img/carousel-imgs/ornamental/Spear Top.jpeg";
import Wood from "../../img/fences/wood.jpeg";
import { VinylText, BlackText, OrnamentalText, WoodText } from "../Texts";
import { Link } from 'react-router-dom';

const FenceGallery = () => {
  return (
    <div style={{background : "#121212"}} className='fence-gallery'>
        <Navbar/>
        <div className='card-holder1'>
            <div className='block-card'>
                <Link to="/vinyl">
                  <img src={Vinyl}/>
                  <button style={{color: "#fff", background: "#009FFF", padding: "7px", border: "none", borderRadius: "4px"}}>View Details</button>
                </Link>
                <br/>
                <VinylText/>
            </div>

            <div className='block-card'>
                <Link to="/chain">
                  <img src={BlackChain}/>
                  <button style={{color: "#fff", background: "#009FFF", padding: "7px", border: "none", borderRadius: "4px"}}>View Details</button>
                </Link>
                <br/>
                <BlackText/>
            </div>
        </div>

        <div style={{margin: "50px"}}></div>

        <div className='card-holder2'>
            <div className='block-card'>
                <Link to='/ornamental'>
                  <img src={Ornamental}/>
                  <button style={{color: "#fff", background: "#009FFF", padding: "7px", border: "none", borderRadius: "4px"}}>View Details</button>
                </Link>
                <br/>
                <OrnamentalText/>
            </div>

            <div className='block-card'>
                <Link to="/wood">
                  <img src={Wood}/>
                  <button style={{color: "#fff", background: "#009FFF", padding: "7px", border: "none", borderRadius: "4px"}}>View Details</button>
                </Link>
                <br/>
                <WoodText/>
            </div>
        </div>
    </div>
  )
}

export default FenceGallery;
