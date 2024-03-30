import React from 'react'
import './Hero.css'
import { MdOutlineWavingHand } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

import Edith from'../Assests/Edith.jpg';
import hand from'../Assests/hand.png';
const Hero = () => {
    const arrowStyle = {
        fontSize: '24px',
        color: 'green',
        // Add any other styles you want here
      };

  return (
    <div className='hero'>
        <div className='hero-left'>
          <h2>New Arrival</h2>
        <div>
            <div className='hero-hand-icon'>
               <p>new </p>
               <img src={hand}alt=''/>
            </div>
            <p>Collection</p>
             <p>For Everyone</p>
        </div>
         <div className='hero-latest-btn'>
           <div>Latest Collection</div>
           <FaArrowRight />

         </div>

        </div>
         <div className='hero-right'>
          <img src={Edith}alt=''/>

         </div>
    </div>
  )
}

export default Hero