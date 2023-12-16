import React from 'react'
import Navbar from '../Navbar'
import Vinyl from "../../img/fences/Vinyl.jpeg";
import BlackChain from "../../img/fences/black-chain.jpeg";
import Ornamental from "../../img/fences/ornamental.jpeg";
import Wood from "../../img/fences/wood.jpeg";
import { VinylText, BlackText, OrnamentalText, WoodText } from "../Texts";


const FenceGallery = () => {
  return (
    <div className='fence-gallery'>
        <Navbar/>
        <div className='card-holder1'>
            <div className='block-card'>
                <img src={Vinyl}/>
                <VinylText/>
            </div>

            <div className='block-card'>
                <img src={BlackChain}/>
                <BlackText/>
            </div>
        </div>

        <div style={{margin: "50px"}}></div>

        <div className='card-holder2'>
            <div className='block-card'>
                <img src={Ornamental}/>
                <OrnamentalText/>
            </div>

            <div className='block-card'>
                <img src={Wood}/>
                <WoodText/>
            </div>
        </div>
    </div>
  )
}

export default FenceGallery