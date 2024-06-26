import React from 'react'
import './Hero.css'
import { MdOutlineWavingHand } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Nhluvuko from '../Assests/Nhluvuko.jpg';
import Edith from'../Assests/Edith.jpg';
import hand from'../Assests/hand.png';
import BusinessQR  from'../Assests/BusinessQr.png'
const Hero = () => {
    const arrowStyle = {
        fontSize: '24px',
        color: 'green',
        // Add any other styles you want here
      };

  return (
    <div className='hero'>
        <div className='hero-left'>
          <h2>Click, Shop,</h2>
        <div>
            <div className='hero-hand-icon'>
               <p>Smile: </p>
               <img src={hand}alt=''/>
            </div>
            <p> Your One-Stop Online Style</p>
             <p>For Everyone!</p>
        </div>
         <div className='hero-latest-btn'>
           <div>Latest Collection</div>
           <FaArrowRight />
         </div>

        </div>
         <div className='hero-right'>
          <img src={Nhluvuko}alt=''/>
         
         </div>
         <div className='code'>
          <img src={BusinessQR}alt=''/>  
         </div>

         

    </div>
  )
}

export default Hero